/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function CertificatesCarousel({ certificates }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

  const goToPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const goToNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <div className="embla mx-auto max-w-4xl">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} certificate={cert} />
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
  );
}

function CertificateCard({ certificate }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="embla__slide flex-shrink-0 w-full p-4">
      <div className="relative bg-cover bg-center rounded-lg shadow-lg h-64 cursor-pointer overflow-hidden">
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
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={certificate.icon}
            alt={`${certificate.title} icon`}
            className="w-35 h-35 object-contain"
          />
        </div>
      </div>
    </div>
  );
}
