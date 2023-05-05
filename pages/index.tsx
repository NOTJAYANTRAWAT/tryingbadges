import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden
    z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]'>
      <Head>
        <title>Jayant Portfolio </title>
      </Head>
      <Header/>
    </div>
  )
}
