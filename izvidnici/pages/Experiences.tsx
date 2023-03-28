import React from 'react'
import Image,{ImageProps} from 'next/image'
import logo from '../public/logo.png'


export default function Experiences() {
  return <main>
         
    <div className="bg-[url('/homepage.jpg')]  bg-cover bg-center ... h-[529px] border-blue-400 border-8">
        
        <Image 
           src={logo} alt="placeholder" className=" w-28 h-28 mr-2 p-3"
        />
         <h1 className="text-white text-8xl text-center underline-offset-1 m-48">Искуства</h1>
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
         </main>
  
}
