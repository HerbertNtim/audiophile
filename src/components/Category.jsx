import Link from 'next/link'
import React from 'react'

const Category = () => {
  return (
    <div className='bg-gray-200 pt-20'>
      {/* CARDS */}
      <div className='flex items-center justify-center gap-5 text-black w-full'>
        <div className='relative'>
          <p>Image</p>
          <div className='absolute'>
            <h3>HEADPHONES</h3>
            <Link href="/headphones">
              SHOP
              arrow
            </Link>
          </div>
        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  )
}

export default Category
