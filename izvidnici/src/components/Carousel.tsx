import { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const images = [
  "/public/izvidnicileto1.png",
  "/public/izvidnicileto2.png",
  "/public/izvidniciStanci4.png",
  "/public/izvidniciStaneckiVodopadi1.png",
  "/public/izvidniciStaneckiVodopadi2.png",
];


interface CarouselProps {
  children: JSX.Element[];
}

export default function Carousel({ children: slides }: CarouselProps) {
  const [curr, setCurr] = useState<number>(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="relative">
      <div
        className="flex overflow-hidden transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={prev}
          className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
