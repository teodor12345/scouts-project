import React from 'react'
import Image,{ImageProps} from 'next/image'
import logo from '../public/logo.png'
import { url } from 'inspector'
import SnegPlanina from '../public/SnegPlanina.png'



export default function Experiences() {
  return <main>
         
    <div className="bg-[url('/homepage.jpg')]  bg-cover bg-center ... h-full w-full border-blue-400 border-8">
        
        <Image 
           src={logo} alt="placeholder" className=" w-28 h-28 mr-2 p-3 "
        />
         <h1 className="text-white text-8xl text-center underline-offset-1 m-48">За Нас</h1>
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
      <section>
      <div className="flex justify-start items-start w-[1000px] py-[100px] px-[50px]">
      <div className=" w-4/5 ">
    <h1 className="text-6xl font-bold mb-4 text-blue-500">Article Title</h1>
    <h2 className=" text-3xl font-bold mb-4 text-blue-500  ">Lorem ipsoukm</h2>
    <p className="text-gray-600 flex w-fit text-lg mb-8 ">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. S
      ed vitae lorem vel nunc ultricies sodales. Sed vel suscipit est. Donec in
       nulla sed elit dapibus eleifend. Proin faucibus posuere urna. Ut congue 
       libero non dolor commodo, non auctor felis sollicitudin. Nullam fringilla 
       neque a ex dictum, at posuere nulla ultrices. Pellentesque eget tristique urna.
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. S
      ed vitae lorem vel nunc ultricies sodales. Sed vel suscipit est. Donec in
       nulla sed elit dapibus eleifend. Proin faucibus posuere urna. Ut congue 
       libero non dolor commodo, non auctor felis sollicitudin. Nullam fringilla 
       neque a ex dictum, at posuere nulla ultrices. Pellentesque eget tristique urna
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. S
      ed vitae lorem vel nunc ultricies sodales. Sed vel suscipit est. Donec in
       nulla sed elit dapibus eleifend. Proin faucibus posuere urna. Ut congue 
       libero non dolor commodo, non auctor felis sollicitudin. Nullam fringilla 
       neque a ex dictum, at posuere nulla ultrices. Pellentesque eget tristique urna
    </p>
   
     </div>
     </div>
    </section>
    <section>
    <div className='flex justify-center items-center '>
        
    <Image 
           src={SnegPlanina} alt="placeholder" className=" w-[1800px] h-[600px]  border-blue-400 border-8 "
        />
     </div>
     <div>
     <p className="text-gray-600 text-lg mt-28 text-center justify-start items-center w-[1700px] pr-3">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. S
      ed vitae lorem vel nunc ultricies sodales. Sed vel suscipit est. Donec in
      nulla sed elit dapibus eleifend. Proin faucibus posuere urna. Ut congue 
      libero non dolor commodo, non auctor felis sollicitudin. Nullam fringilla 
      neque a ex dictum, at posuere nulla ultrices. Pellentesque eget tristique urna.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. S
      ed vitae lorem vel nunc ultricies sodales. Sed vel suscipit est. Donec in
       nulla sed elit dapibus eleifend. Proin faucibus posuere urna. Ut congue 
       libero non dolor commodo, non auctor felis sollicitudin. Nullam fringilla 
       neque a ex dictum, at posuere nulla ultrices. Pellentesque eget tristique urna
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. S
      ed vitae lorem vel nunc ultricies sodales. Sed vel suscipit est. Donec in
       nulla sed elit dapibus eleifend. Proin faucibus posuere urna. Ut congue 
       libero non dolor commodo, non auctor felis sollicitudin. Nullam fringilla 
       neque a ex dictum, at posuere nulla ultrices. Pellentesque eget tristique urna
    </p>
    <p className="text-gray-600 text-lg mt-14 w-[1700px] text-center justify-start items-center ">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. S
      ed vitae lorem vel nunc ultricies sodales. Sed vel suscipit est. Donec in
       nulla sed elit dapibus eleifend. Proin faucibus posuere urna. Ut congue 
       libero non dolor commodo, non auctor felis sollicitudin. Nullam fringilla 
       neque a ex dictum, at posuere nulla ultrices. Pellentesque eget tristique urna.
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. S
      ed vitae lorem vel nunc ultricies sodales. Sed vel suscipit est. Donec in
       nulla sed elit dapibus eleifend. Proin faucibus posuere urna. Ut congue 
       libero non dolor commodo, non auctor felis sollicitudin. Nullam fringilla 
       neque a ex dictum, at posuere nulla ultrices. Pellentesque eget tristique urna
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. S
      ed vitae lorem vel nunc ultricies sodales. Sed vel suscipit est. Donec in
       nulla sed elit dapibus eleifend. Proin faucibus posuere urna. Ut congue 
       libero non dolor commodo, non auctor felis sollicitudin. Nullam fringilla 
       neque a ex dictum, at posuere nulla ultrices. Pellentesque eget tristique urna
    </p>
    <p className="text-gray-600 text-lg mt-14 w-[1700px] text-center justify-start items-center ">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. S
      ed vitae lorem vel nunc ultricies sodales. Sed vel suscipit est. Donec in
       nulla sed elit dapibus eleifend. Proin faucibus posuere urna. Ut congue 
       libero non dolor commodo, non auctor felis sollicitudin. Nullam fringilla 
       neque a ex dictum, at posuere nulla ultrices. Pellentesque eget tristique urna.
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. S
      ed vitae lorem vel nunc ultricies sodales. Sed vel suscipit est. Donec in
       nulla sed elit dapibus eleifend. Proin faucibus posuere urna. Ut congue 
       libero non dolor commodo, non auctor felis sollicitudin. Nullam fringilla 
       neque a ex dictum, at posuere nulla ultrices. Pellentesque eget tristique urna
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. S
      ed vitae lorem vel nunc ultricies sodales. Sed vel suscipit est. Donec in
       nulla sed elit dapibus eleifend. Proin faucibus posuere urna. Ut congue 
       libero non dolor commodo, non auctor felis sollicitudin. Nullam fringilla 
       neque a ex dictum, at posuere nulla ultrices. Pellentesque eget tristique urna
    </p>
    </div>
    </section>
         </main>
  
}