/* eslint-disable react/prop-types */

import React, { useState, useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Modal from './Modal'

export default function CertificatesCarousel({ certificates }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' })

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const tweenFactor = useRef(0)
  const tweenNodes = useRef([])
  const autoplayInterval = useRef(null)

  const AUTOPLAY_DELAY = 1750
  const TWEEN_FACTOR_BASE = 0.72

  const numberWithinRange = (number, min, max) =>
    Math.min(Math.max(number, min), max)

  const goToPrev = () => {
    if (emblaApi) {
      stopAutoplay()
      emblaApi.goToPrev()
      startAutoplay()
    }
  }

  const goToNext = () => {
    if (emblaApi) {
      stopAutoplay()
      emblaApi.goToNext()
      startAutoplay()
    }
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
      <div className="embla mx-auto max-w-5xl relative" onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>

        {/* Overlay shadows */}
        <div>  
          {/* Left side - original layer */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-r from-gray-100 dark:from-gray-900 to-transparent dark:to-gray-900/5 opacity-0 md:opacity-100 pointer-events-none z-10"
            aria-hidden="true"
          />
          
          
          {/* Left side - longer layer */}
          <div 
            className="absolute left-0 top-0 bottom-0 w-24 md:w-68 bg-gradient-to-r from-gray-100/60 dark:from-gray-900/90 to-transparent opacity-0 md:opacity-50 pointer-events-none z-8"
            aria-hidden="true"
          />
          
          {/* Right side - original layer */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-16 md:w-28 bg-gradient-to-l from-gray-100 dark:from-gray-900 to-transparent dark:to-gray-900/5 opacity-0 md:opacity-100 pointer-events-none z-10"
            aria-hidden="true"
          />
          
          
          {/* Right side - longer layer */}
          <div 
            className="absolute right-0 top-0 bottom-0 w-24 md:w-68 bg-gradient-to-l from-gray-100/60 dark:from-gray-900/90 to-transparent opacity-0 md:opacity-50 pointer-events-none z-8"
            aria-hidden="true"
          />
        </div>
          
        {/* Previous Button */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-17 h-17 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-full text-white opacity-60 hover:opacity-100 hover:scale-110 active:scale-70 transition-all duration-200"
          onClick={goToPrev}
          aria-label="Previous"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

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

        {/* Next Button */}
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-17 h-17 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-full text-white opacity-60 hover:opacity-100 hover:scale-110 active:scale-70 transition-all duration-200"
          onClick={goToNext}
          aria-label="Next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedCertificate?.title || 'Certificate'}
      >
        {selectedCertificate && (
          <div className="w-full h-full">
            {isMobile ? (
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded"
              />
            ) : (
              <iframe
                src={selectedCertificate.pdf}
                className="w-full h-[30rem] md:h-[30rem] border-0 rounded"
                title={selectedCertificate.title}
              />
            )}
          </div>
        )}
      </Modal>

    </>
  )
}

function CertificateCard({ certificate, onClick }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="embla__slide flex-shrink-0 w-72 sm:w-80 md:w-96 lg:w-xl p-1 sm:p-2 mx-2 sm:mx-3 pt-4 sm:pt-8">
      <div
        className="certificate-card relative bg-cover bg-center rounded-lg shadow-lg h-72 sm:h-80 md:h-88 border border-slate-700/40 cursor-pointer overflow-hidden transition-transform duration-70 ease-out hover:scale-105 hover:-translate-y-3"
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

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 sm:translate-x-0 left-auto bottom-42 right-9 md:bottom-20 md:right-9">
          <div className="bg-slate-400/30 backdrop-blur-md rounded-full border border-slate-200/50 p-1.5 sm:p-2">
            <img
              src={certificate.icon}
              alt={`${certificate.title} icon`}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-27 md:h-27 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
