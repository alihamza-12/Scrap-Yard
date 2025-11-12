import React from 'react'

const FooterNav = () => {
  return (
    <nav>
        <ul className='flex items-center justify-evenly my-12'>
            <li className='text-lg text-white font-semibold p-3 bg-[#000000]  rounded-xl cursor-pointer'>Home</li>
            <li className='text-lg text-white font-semibold p-3 bg-[#000000] rounded-xl cursor-pointer'>More Information</li>
            <li className='text-lg text-white font-semibold p-3 bg-[#000000] rounded-xl cursor-pointer'>Talk To Us</li>
            <li className='text-lg text-white font-semibold p-3 bg-[#000000] rounded-xl cursor-pointer'>New & Blogs</li>
        </ul>
    </nav>
  )
}

export default FooterNav