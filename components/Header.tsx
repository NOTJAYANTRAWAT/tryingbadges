import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react'
import { SocialIcon } from 'react-social-icons';
type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20
    xl:items-center'>
        <div className='flex flex-row items-center h-22 w-22  '>
            <SocialIcon url="https://twitter.com/NOTJAYANTRAWAT"
            fgColor='grey'
            bgColor='transparent'
            />
            <SocialIcon url="https://www.linkedin.com/in/jayant-rawat-b59042230/"
            fgColor='grey'
            bgColor='transparent'
            />
            <SocialIcon url="https://github.com/NOTJAYANTRAWAT"
            fgColor='grey'
            bgColor='transparent'
            />

        </div>
        <div>
        <SocialIcon 
            className='cursor-pointer'
            network='email'
            fgColor='grey'
            bgColor='transparent'
            />
            <p className ="uppercase hidden md:inline-flex text-sm text-gray-400 ">
                Get In Touch
            </p>
        </div>
    </header>
  )
}