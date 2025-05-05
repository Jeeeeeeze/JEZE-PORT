import React from 'react'
import Navbar from '../components/ui/Navbar'
import Footer2 from '../components/ui/Footer2'
import Glide4 from '../components/ui/Glide4'

function Original() {
  return (
    <div>
        <Navbar/>

        
        <div className='relative'>
            <Glide4 className='object-cover'/>
            <div className="absolute inset-0  flex items-end pb-12">
          <div className="w-full text-black text-center p-6 bg-transparent backdrop-blur-sm z-40">
            <h1 className="text-2xl font-bold text-left text-gray-700 mb-1 ">|Original Character Design</h1>
            <h2 className="text-sm font-semibold text-left text-gray-700 mb-6">Original Concenp Design</h2>
          </div>
        </div>
            
        </div>
        
        <Footer2/>
    </div>
  )
}

export default Original