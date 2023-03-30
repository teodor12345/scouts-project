
import Head from 'next/head'
import Image,{ImageProps} from 'next/image'
import logo from '../public/logo.png'




export default function Home() {
  return (
    <div className="h-full">
      <Head >
        <title>Извиднички Одред Наум Наумовски-Борче</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="bg-[url('/homepage.jpg')]  bg-cover bg-center ... h-[929px] border-blue-400 border-8">
        <div>
      <Image 
         src={logo} alt="placeholder" className=" w-28 h-28 mr-2 p-3"
      />
    </div>
        <nav className="  absolute top-0 right-0 mt-6 mr-5 p-5 text-lg    ">
      <ul className="flex space-x-10 ">
        <li className="mr-6 text-white "><a href="#">За Нас</a></li>
        <li className="mr-6 text-white hover:underline"><a href="galery.html">Галерија</a></li>
        <li className="mr-6 text-white"><a href="#">Патеки</a></li>
        <li className="mr-6 text-white"><a href="#">Искуства</a></li>
        <li className="text-white"><a href="#">Контакт</a></li>
      </ul>
    </nav>
  
      <div className='absolute inset-0 flex items-center justify-center m-3.5'>
      <ul>
      <li className="text-white text-7xl text-center underline-offset-1 ">Извиднички Одред  </li>
      <li className="text-white text-7xl text-center underline-offset-1 ">Наум Наумовски- Борче </li>
      <li className="text-yellow-500 text-5xl text-center underline-offset-1  "> Создаваме подобар свет / Creating a better world</li>
      </ul>
      </div>
     </section>
    <section>
      <article className="flex h-[550px]">
        <h1 className=" text-lg[550px] items-center justify-center text-blue-500 font-poppins text-bold">За Нас</h1>
        <h2> article evry time changed with new action </h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At facere atque 
        amet illum suscipit ad id voluptates cupiditate placeat molestias veniam
         doloremque ipsam quos nam! Quidem, porro ess Lorem ipsum <br></br>dolor 
         sit amet consectetur adipisicing elit. At facere atque, eos qui 
        amet illum suscipit ad id voluptates cupiditate placeat molestias veniam
         doloremque ipsam quos nam! Quidem, porro ess Lorem ipsum <br></br>dolor 
         sit amet consectetur adipisicing elit. At facere atque, eos qui 
        amet illum suscipit ad id voluptates cupiditate placeat molestias veniam
         doloremque ipsam quos nam! Quidem, porro ess
      </article>
    </section>

      </main>
    </div>
  )
}
