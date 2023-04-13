import React from 'react'
import logo from '../public/logo.png'

export const HeaderBlock = () => {
  return (
    <div className=" flex h-screen w-full flex-col">
         <div>
      <Image 
         src={logo} alt="placeholder" className=" w-32 h-32 mr-2 p-3"
      />
    </div>
    </div>
  )
}


