import { useState } from "react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";


interface CarouselProps {
  slides: string[];
}

export default function Carousel({ slides }: CarouselProps) {
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
        {slides.map((slide, i) => (
          <div key={i} className="w-full">
            <Image src={slide} alt="" width={1500} height={1500} objectFit="cover" />
          </div>
          
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={prev}
          className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeftIcon className="w-10 h-10" />
        </button>
        <button
          onClick={next}
          className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRightIcon className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
}
