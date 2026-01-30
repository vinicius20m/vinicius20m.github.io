/* eslint-disable react/prop-types */

import React, { useState, useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Modal from './Modal'

export default function CertificatesCarousel({ certificates }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const tweenFactor = useRef(0)
  const tweenNodes = useRef([])
  const autoplayInterval = useRef(null)

  const AUTOPLAY_DELAY = 1750
  const TWEEN_FACTOR_BASE = 0.72

  const numberWithinRange = (number, min, max) =>
    Math.min(Math.max(number, min), max)

  const goToPrev = () => {
    if (emblaApi) emblaApi.goToPrev()
  }

  const goToNext = () => {
    if (emblaApi) emblaApi.goToNext()
  }

  // ✅ AUTOPLAY MANUAL
  const startAutoplay = () => {
    stopAutoplay()
    autoplayInterval.current = setInterval(() => {
      if (emblaApi) emblaApi.goToNext()
    }, AUTOPLAY_DELAY)
  }

  const stopAutoplay = () => {
    if (autoplayInterval.current) {
      clearInterval(autoplayInterval.current)
      autoplayInterval.current = null
    }
  }

  const openModal = (certificate) => {
    stopAutoplay()
    setSelectedCertificate(certificate)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCertificate(null)
    startAutoplay()
  }

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) =>
      slideNode.querySelector('.certificate-card')
    )
  }, [])

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.snapList().length
  }, [])

  const tweenScale = useCallback((emblaApi, event) => {
    const engine = emblaApi.internalEngine()
    const scrollProgress = emblaApi.scrollProgress()
    const slidesInView = emblaApi.slidesInView()
    const isScrollEvent = event?.type === 'scroll'

    emblaApi.snapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress
      const slidesInSnap = engine.scrollSnapList.slidesBySnap[snapIndex]

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target()

            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target)
              if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress)
              if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress)
            }
          })
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
        const scale = numberWithinRange(tweenValue, TWEEN_FACTOR_BASE, 1)
        const opacity = numberWithinRange(tweenValue, 0.5, 1)

        const tweenNode = tweenNodes.current[slideIndex]
        if (!tweenNode) return

        tweenNode.style.transform = `scale(${scale})`
        tweenNode.style.opacity = opacity
      })
    })
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenScale(emblaApi)

    // ✅ START AUTOPLAY
    startAutoplay()

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('select', tweenScale)

    // ✅ PAUSE autoplay while dragging
    emblaApi.on('pointerDown', stopAutoplay)
    emblaApi.on('pointerUp', startAutoplay)

    return () => stopAutoplay()
  }, [emblaApi, tweenScale])

  return (
    <>
      <div className="embla mx-auto max-w-5xl" onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
        <div className="embla__viewport overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {certificates.map((cert, index) => (
              <CertificateCard
                key={index}
                certificate={cert}
                onClick={() => openModal(cert)}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
            onClick={goToPrev}
          >
            Previous
          </button>

          <button
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
            onClick={goToNext}
          >
            Next
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedCertificate?.title || 'Certificate'}
      >
        {selectedCertificate && (
          <div className="w-full h-full">
            <iframe
              src={selectedCertificate.pdf}
              className="w-full h-100 md:h-130 border-0 rounded"
              title={selectedCertificate.title}
            />
          </div>
        )}
      </Modal>
    </>
  )
}

function CertificateCard({ certificate, onClick }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="embla__slide flex-shrink-0 w-xl p-1 mx-3 pt-8">
      <div
        className="certificate-card relative bg-cover bg-center rounded-lg shadow-lg h-88 border border-slate-700/40 cursor-pointer overflow-hidden transition-transform duration-70 ease-out hover:scale-105 hover:-translate-y-3"
        onClick={onClick}
      >
        {!imageError ? (
          <img
            src={certificate.image}
            alt={certificate.title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <img
            src="/placeholder-logo.jpg"
            alt={certificate.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        <div className="absolute bottom-20 right-11">
          <div className="bg-slate-200/30 backdrop-blur-md rounded-full border border-slate-200/50 p-2">
            <img
              src={certificate.icon}
              alt={`${certificate.title} icon`}
              className="w-27 h-27 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
