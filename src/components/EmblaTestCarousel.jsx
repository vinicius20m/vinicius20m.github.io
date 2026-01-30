import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function EmblaTestCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })]);

  const goToPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const goToNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  const slides = [
    { title: 'Certificate 1', color: 'bg-blue-500' },
    { title: 'Certificate 2', color: 'bg-green-500' },
    { title: 'Certificate 3', color: 'bg-red-500' },
    { title: 'Certificate 4', color: 'bg-yellow-500' },
    { title: 'Certificate 5', color: 'bg-purple-500' },
  ];

  return (
    <div className="embla mx-auto max-w-4xl">
      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide, index) => (
            <div key={index} className="embla__slide flex-shrink-0 w-full p-4">
              <div className={`card ${slide.color} h-64 flex items-center justify-center rounded-lg shadow-lg`}>
                <h3 className="text-white text-xl font-bold">{slide.title}</h3>
              </div>
            </div>
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
