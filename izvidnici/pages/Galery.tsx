import React, { Children } from 'react'
import Image,{ImageProps} from 'next/image'
import logo from '../public/logo.png'
import Carousel from '@/src/components/Carousel';


import card1 from '../public/izvidnicileto1.jpg';
import card2 from '../public/izvidnicileto2.jpg';
import card3 from '../public/izvidniciStaneckiVodopadi1.jpg';
import card4 from '../public/izvidniciStanci4.jpg';
import card5 from '../public/izvidniciStaneckiVodopadi2.jpg';

const ImageItems = [
  <Image className=" h-full w-full " src={card1} alt="card1" /> ,
  <Image className=" h-full w-full " src={card2} alt="card2" /> ,
  <Image className=" h-full w-full " src={card3} alt="card3" /> ,
  <Image className=" h-full w-full " src={card4} alt="card4" /> ,
  <Image className=" h-full w-full " src={card5} alt="card5" /> , 
]



export default function Galery() {
  return<main>
    
    <div className="bg-[url('/homepage.jpg')]  bg-cover bg-center ... h-[529px] border-blue-400 border-8">
        
      <Image 
         src={logo} alt="placeholder" className=" w-28 h-28 mr-2 p-3"
      />
       <h1 className="text-white text-8xl text-center underline-offset-1 m-48">Галерија</h1>
   </div>
    <nav className="  absolute top-0 right-0 mt-8 mr-5 p-5 text-lg    ">
      <ul className="flex space-x-10 text-xl ">
        <li className="mr-6 text-white "><a href="#">За Нас</a></li>
        <li className="mr-6 text-white hover:underline"><a href="galery.html">Галерија</a></li>
        <li className="mr-6 text-white"><a href="#">Патеки</a></li>
        <li className="mr-6 text-white"><a href="#">Искуства</a></li>
        <li className="text-white"><a href="#">Контакт</a></li>
      </ul>
    </nav>
    <div className=" flex w-full flex-col flex-1 items-center justify-center px-20 text-center">
     <div className=" mb-10 flex flex-col justify-center space-y-6  ">
      
     </div>
    </div>
      </main>
  
}
