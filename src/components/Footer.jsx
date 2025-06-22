import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='w-full h-35 bg-black/75'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-16 text-white'>
        <div className='text-sm md:text-base'>
          &copy; 2025 Audiophile. All rights reserved.
        </div>
        <div className='flex space-x-4 mt-4 md:mt-0'>
          <Link href="/" className='hover:underline'>Home</Link>
          <Link href="/headphones" className='hover:underline'>Headphones</Link>
          <Link href="/earphones" className='hover:underline'>Earphones</Link>
          <Link href="/speakers" className='hover:underline'>Speakers</Link>
        </div>
        <div className='flex space-x-4 mt-4 md:mt-0'>
          <Image src="/icons/icon-twitter.svg" alt='twitter' width={20} height={20}  />
          <Image src="/icons/icon-facebook.svg" alt='facebook' width={20} height={20}  />
          <Image src="/icons/icon-instagram.svg" alt='instagram' width={20} height={20}  />
        </div>
      </div>
    </div>
  )
}

export default Footer
