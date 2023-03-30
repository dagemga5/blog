import '@/styles/globals.css'
import Header from '@/components/header'
import Header2 from '@/components/header2'
import Footer from '../components/footer'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <>
    <Header/>
    <Header2/>
   <Component {...pageProps} />
   <Footer/>
   
  </>
}
