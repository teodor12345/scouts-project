import React, { Children } from 'react'
import Image,{ImageProps} from 'next/image'
import logo from '../public/logo.png'
import Carousel from '../src/components/Carousel';


const slides = [
  "/izvidniciLeto1.jpg",
  "/izvidniciLeto2.jpg",
  "/izvidniciStanci4.jpg",
  "/izvidniciStaneckiVodopadi1.jpg",
  "/izvidniciStaneckiVodopadi2.jpg",
];


export default function Galery() {
  return<main>
    
    <div className="bg-[url('/homepage.jpg')]  bg-cover bg-center ... h-full w-full border-blue-400 border-8">
        
      <Image 
         src={logo} alt="placeholder" className=" w-28 h-28 mr-2 p-3"
      />
       <h1 className="text-white text-8xl text-center underline-offset-1 m-48">Галерија</h1>
   </div>
    <nav className="  absolute top-0 right-0 mt-8 mr-5 p-5 text-lg    ">
      <ul className="flex space-x-10 text-xl ">
        <li className="mr-6 text-white "><a href="#">За Нас</a></li>
        <li className="mr-6 text-white hover:underline"><a href="galery.html">Галерија</a></li>
        <li className="mr-6 text-white"><a href="#">Активности</a></li>
        <li className="mr-6 text-white"><a href="#">Искуства</a></li>
        <li className="text-white"><a href="#">Контакт</a></li>
      </ul>
    </nav>
    <div className=" flex w-full flex-col flex-1 items-center justify-center  px-20 text-center">
     <div className=" mb-16 flex flex-col justify-center space-y-6  ">
      <h1></h1>
     </div>
      <Carousel slides={slides}/>
    </div>
    
      </main>
  
}
