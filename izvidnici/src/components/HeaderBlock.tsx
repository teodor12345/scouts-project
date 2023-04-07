import React from 'react';
import logo from '../public/logo.png'

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-blue-400">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-white -ml-32">
            <Image 
             src={logo} alt="placeholder" className=" w-28 h-28 mr-2 p-3 "
        />
            </a>
          </div>
          <div className="flex items-center">
            <nav className="text-white uppercase ml-auto font-serif space-x-10 underline font-semibold">
              <a href="#" className="mx-3">
                За нас
              </a>
              <a href="./galery.html" className="mx-3 ">
                Галерија
              </a>
              <a href="#" className="mx-3">
                Патеки
              </a>
              <a href="#" className="mx-3">
                Искуства
              </a>
              <a href="#" className="mx-3">
                Контакт
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
   
export default Header;
