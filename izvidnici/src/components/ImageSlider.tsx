import React from 'react'
import Image from 'next/image'
import Galery from '@/pages/Galery';
import CaruselItem from './CaruselItem';


export interface ImageSliderProps{
  width?:number,
  height?:number,
  items:React.ReactNode[];
}


export default function ImageSlider({width,height,items}:
  ImageSliderProps ) {
  return<div>
    {
      items.map((item,index) =>(
        <CaruselItem key={index}>
          
        </CaruselItem>
      ))
    }
       </div>
    
  
}
