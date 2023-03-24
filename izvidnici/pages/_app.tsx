import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return<>
 <p className=' font-bold'>This id my app lets see what we can do with it and learn something new I hope really hope because it is not easy!!</p>
   <Component {...pageProps} /></>
}
