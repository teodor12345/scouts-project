
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
        <section className="bg-[url('/homepage.jpg')]  bg-cover bg-center ... h-[929px] w-full border-blue-400 border-8">
        <div>
      <Image 
         src={logo} alt="placeholder" className=" w-32 h-32 mr-2 p-3"
      />
    </div>
        <nav className="  absolute top-0 right-0 mt-6 mr-5 p-5 text-xl    ">
      <ul className="flex space-x-10 ">
        <li className="mr-6 text-white "><a href="#">За Нас</a></li>
        <li className="mr-6 text-white hover:underline"><a href="galery.html">Галерија</a></li>
        <li className="mr-6 text-white"><a href="#">Активности</a></li>
        <li className="mr-6 text-white"><a href="#">Искуства</a></li>
        <li className="text-white"><a href="#">Контакт</a></li>
      </ul>
    </nav>
  
      <div className='absolute inset-0 flex items-center justify-center m-3.5'>
      <ul>
      <li className="text-white text-7xl text-center underline-offset-1 ">Извиднички Одред  </li>
      <li className="text-white text-7xl text-center underline-offset-1 ">Наум Наумовски- Борче </li>
      <li className="text-yellow-400 text-5xl text-center underline-offset-1  "> Создаваме подобар свет / Creating a better world</li>
      </ul>
      </div>
     </section>
    <section>
      <div className="flex justify-start items-start w-[1000px] py-[100px] px-[50px]">
      <div className=" w-4/5 ">
    <h1 className="text-6xl font-bold mb-4 text-blue-500">Article Title</h1>
    <h2 className=" text-3xl font-bold mb-4 text-blue-500  ">Lorem ipsoukm</h2>
    <p className="text-gray-600 text-lg mb-8 ">
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
      <div className="h-[800px] bg-gradient-to-r from-blue-300 to-blue-700 pt-32  border-blue-400 border-8 ">
        <h1 className="text-white text-7xl text-center underline-offset-1" >Придобивки од извидништвото </h1>
      </div>
      </section>
    </main>
    </div>
  )
}
