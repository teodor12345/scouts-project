import { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react";

const images = [
  "/public/izvidnicileto1.png",
  "/public/izvidnicileto2.png",
  "/public/izvidniciStanci4.png",
  "/public/izvidniciStaneckiVodopadi1.png",
  "/public/izvidniciStaneckiVodopadi2.png",
];

interface Props {
  images: string[];
}

const Carousel = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between absolute top-1/2 w-full z-10">
        <button
          className="bg-white bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-100"
          onClick={handlePrevClick}
        >
          <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
        </button>
        <button
          className="bg-white bg-opacity-50 p-2 rounded-full shadow-md hover:bg-opacity-100"
          onClick={handleNextClick}
        >
          <ChevronRightIcon className="h-6 w-6 text-gray-800" />
        </button>
      </div>
      <div className="relative w-full h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
