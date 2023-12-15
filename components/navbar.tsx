import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between py-4 px-6 items-center text-md'>
    <div className=' font-bold '>
        ManageWise
    </div>
    <div className='flex justify-between  items-center'>
        <div className='mr-8'>
        <span className='mr-4'>Features</span>
        <span className='mr-4'>.</span>
        <span className='mr-4'>FAQ</span>
        <span className='mr-4'>.</span>
        <span className='mr-4'>Pricing</span>
        <span className='mr-4'>.</span>
        <span className='mr-4'>Testimonials</span>
        </div>
        <div className='ml-4 mr-6'>
            <button className=' bg-white py-3 px-5 rounded-lg font-bold'>Buy Template</button>
        </div>
    </div>
    </nav>
  )
}

export default Navbar
