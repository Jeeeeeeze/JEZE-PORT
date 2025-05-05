import React from 'react'
import { useState } from "react";
import Footer2 from '../components/ui/Footer2';
import Navbar from '../components/ui/Navbar';
import Glide from '../components/ui/Glide';

const Page3 = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (

    
    <div className="min-h-screen bg-white pt-8 ">
        <Navbar/>
        <div className='px-80 pt-12'>
        <h1 className="text-5xl font-bold text-left text-gray-600 mb-1">|OFFICIAL WORKS</h1>
        <h2 className="text-sm font-semibold text-left text-gray-600 mb-6">OFFICIAL COMMISSION</h2>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        {/* Card 1 */}
        <div className="overflow-hidden">
        <div className='overflow-hidden h-96'>
          <img src="https://media.discordapp.net/attachments/792330606552809503/1368563502117290014/5.jpg?ex=6818ad95&is=68175c15&hm=f6cfb6ed24bed45c78820aadccd15d6ea1ca2c524d7cc7d74751d1395cc3acfe&=&format=webp&width=876&height=658" alt="Card 1" className="w-full h-full  object-cover object-top rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
          </div>
          <div className="pt-4">
            
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
              [Sports Day] Special training with Bremerton!?
            </h3>
            <p className="text-sm text-gray-800 mb-1">2024/10/14</p>
          </div>
        </div>

        <div className="overflow-hidden">
        <div className='overflow-hidden h-96'>
          <img src="https://cdn.discordapp.com/attachments/792330606552809503/1368563502545113088/4.jpg?ex=6818ad95&is=68175c15&hm=d6867dc63f68a3e53742948d5f0918e928b612386ab0768efab9cb6f418afa28&" alt="Card 1" className="w-full h-full  object-cover object-top rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
          </div>
          <div className="pt-4">
            
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
              [Commermorative Illustration] Light Cheasing Sea of Stars
            </h3>
            <p className="text-sm text-gray-800 mb-1">2023/03/22</p>
          </div>
        </div>

        <div className="overflow-hidden">
        <div className='overflow-hidden h-96'>
          <img src="https://cdn.discordapp.com/attachments/792330606552809503/1368563502997966938/3.jpg?ex=6818ad95&is=68175c15&hm=487291e7e75b21d63ddbdb5b50a28b8139e50d7b6f4aab2b46bd6a7d7c84b7c9&" alt="Card 1" className="w-full h-full  object-cover object-top rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
          </div>
          <div className="pt-4">
            
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
              [Marine Day] A summer day with marine girls
            </h3>
            <p className="text-sm text-gray-800 mb-1">2024/10/14</p>
          </div>
        </div>

        <div className="overflow-hidden">
            <div className='overflow-hidden h-96'>
            <img src="https://cdn.discordapp.com/attachments/792330606552809503/1368563503560130652/2.jpg?ex=6818ad95&is=68175c15&hm=80b4e10f38bd23d2ef0a22461fc6bc3156d6acf770f37de61b4038986a4b1789&" alt="Card 1" className="w-full h-full  object-cover object-top rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
          </div>
          <div className="pt-4">
            
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
              [Chrismas Special Video] Pamiat' Merkuria's ASMR
            </h3>
            <p className="text-sm text-gray-800 mb-1">2024/10/14</p>
          </div>
        </div>

        <div className="overflow-hidden">
            <div class='h-96 overflow-hidden'>
                <img src="https://cdn.discordapp.com/attachments/792330606552809503/1368563501701795890/7.jpg?ex=6818ad95&is=68175c15&hm=7a1446746a52634e21c20be7f284f57a7d204f8beb519bd6de73dbcd6b67d860&" alt="Card 1" className="h-full object-cover rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
            </div>
          
          <div className="pt-4 overflow-hidden">
            
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
              [Commermorative Illustration] Verthandi and Asura
            </h3>
            <p className="text-sm text-gray-800 mb-1">2024/10/14</p>
          </div>
        </div>

        <div className="overflow-hidden">
            <div className='h-96 overflow-hidden'>
                <img src="https://cdn.discordapp.com/attachments/792330606552809503/1368563503899742290/1.jpg?ex=6818ad96&is=68175c16&hm=73f4158b8f27ac1a09e657ba91200326ead1aac6e47272144e276f988010b693&" alt="Card 1" className="h-full w-full object-cover object-top rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
            </div>
          <div className="pt-4">
            
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
              [Commermorative Illustration] Northen Pilarment Illustration
            </h3>
            <p className="text-sm text-gray-800 mb-1">2024/10/14</p>
          </div>
        </div>
        
        </div>

        
        </div> 
        <Footer2></Footer2>
    </div>

    
  )
}

export default Page3