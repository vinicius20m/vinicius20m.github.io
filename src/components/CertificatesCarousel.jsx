/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Modal from './Modal';

export default function CertificatesCarousel({ certificates }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 1800 })]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const goToPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const goToNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <>
      <div className="embla mx-auto max-w-5xl">
        <div className="embla__viewport overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {certificates.map((cert, index) => (
              <CertificateCard key={index} certificate={cert} onClick={() => openModal(cert)} />
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
              onError={() => {
                // Fallback if PDF fails to load
                return <p className="text-center text-gray-700 dark:text-gray-300">Unable to load certificate PDF</p>;
              }}
            />
          </div>
        )}
      </Modal>
    </>
  );
}

function CertificateCard({ certificate, onClick }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="embla__slide flex-shrink-0 w-2xl p-6 pt-8">
      <div
        className="relative bg-cover bg-center rounded-lg shadow-lg h-88 border border-slate-700/40 cursor-pointer overflow-hidden hover:scale-105 hover:-translate-y-5 transition-all duration-300"
        onClick={onClick}
      >
        {!imageError ? (
          <img
            src={certificate.image}
            alt={certificate.title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={handleImageError}
          />
        ) : (
          <img
            src="/placeholder-logo.jpg"
            alt={certificate.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
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
  );
}
