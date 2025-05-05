import React from 'react'
import { useState } from "react";
import Footer2 from '../components/ui/Footer2';
import Navbar from '../components/ui/Navbar';
import Glide from '../components/ui/Glide';

const Azurlane = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (

    
    <div className="min-h-screen bg-white pt-8 ">
        <Navbar/>
        <div className='px-80 pt-12'>
        <h1 className="text-5xl font-bold text-left text-gray-600 mb-8">|Azurlane FanArt</h1>
        

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        {/* Card 1 */}
        <div className="overflow-hidden">
        <div className='h-96 overflow-hidden'>
          <img src="https://cdn.discordapp.com/attachments/792330606552809503/1368758884524625940/DAY358.png?ex=6819638c&is=6818120c&hm=30fc4ae84184d79b219da356a15a4cf9ea93679974a727bdb3aac78142db7de4&" alt="Card 1" className="w-full h-full  object-cover object-top rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
          </div>
          <div className="pt-4">
            
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
                ゴールデン・ハインド
            </h3>
            <p className="text-sm text-gray-800 mb-1">2023/11/18</p>
          </div>
        </div>

        <div className="overflow-hidden">
        <div className='h-96 overflow-hidden'>
          <img src="https://cdn.discordapp.com/attachments/792330606552809503/1368758886630293605/DAY380.png?ex=6819638c&is=6818120c&hm=5746ef052129cce7b7657977673bf56faafaa3bd468138853875cdeacbc04507&" alt="Card 1" className="w-full h-full  object-cover object-top rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
          </div>
          <div className="pt-4">
            
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
                済安
            </h3>
            <p className="text-sm text-gray-800 mb-1">2024/02/19</p>
          </div>
        </div>

        <div className="overflow-hidden">
        <div className='h-96 overflow-hidden'>
          <img src="https://cdn.discordapp.com/attachments/792330606552809503/1368758893273944165/DAY410.png?ex=6819638e&is=6818120e&hm=b31752617ccf62d6589a6c6829cff5e9b3d35d27371712cd790aa12973af6c26&" alt="Card 1" className="w-full h-full  object-cover object-top rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
          </div>
          <div className="pt-4">
            
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
                Sunset
            </h3>
            <p className="text-sm text-gray-800 mb-1">2024/07/31</p>
          </div>
        </div>

        <div className="overflow-hidden">
            <div className='h-96 overflow-hidden'>
            <img src="https://cdn.discordapp.com/attachments/792330606552809503/1368768685740658698/112769709_p0.png?ex=68196cad&is=68181b2d&hm=4738cd407a292dbebd5cf9b0ac98730a2b55238919228d5346c53ba887aaa656&" alt="Card 1" className="w-full h-full  object-cover object-top rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
          </div>
          <div className="pt-4">
            
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
            島風
            </h3>
            <p className="text-sm text-gray-800 mb-1">2023/10/22</p>
          </div>
        </div>

        <div className="overflow-hidden">
            <div class='h-96 overflow-hidden'>
                <img src="https://cdn.discordapp.com/attachments/792330606552809503/1368768689121394728/119292621_p0.png?ex=68196cad&is=68181b2d&hm=40919c4650dc57b3dcebe6aa63036c120c7ae6719532cc4ce141af5d442b42f7&" alt="Card 1" className="h-full w-full object-[0%,20%] object-cover rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
            </div>
          
          <div className="pt-4 overflow-hidden">
            
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
                アルザス
            </h3>
            <p className="text-sm text-gray-800 mb-1">2024/06/02</p>
          </div>
        </div>

        <div className="overflow-hidden">
            <div className='h-96 overflow-hidden'>
                <img src="https://cdn.discordapp.com/attachments/792330606552809503/1368758896621129898/DAY422.png?ex=6819638f&is=6818120f&hm=98cf237939df0ec2867bd07e9f2a416368d022d08789f9287f2553426431d035&" alt="Card 1" className="h-full w-full object-cover object-top rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
            </div>
          <div className="pt-4">
            
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
                武蔵
            </h3>
            <p className="text-sm text-gray-800 mb-1">2024/10/22</p>
          </div>
        </div>
        
        </div>

        
        </div> 
        <Footer2></Footer2>
    </div>

    
  )
}

export default Azurlane