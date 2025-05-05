import React from 'react'
import { useState } from "react";
import Footer2 from '../components/ui/Footer2';
import Navbar from '../components/ui/Navbar';
import Glide from '../components/ui/Glide';

const Wuwa = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (

    
    <div className="min-h-screen bg-white pt-8 ">
        <Navbar/>
        <div className='px-80 pt-12'>
        <h1 className="text-5xl font-bold text-left text-gray-600 mb-8">|Wuthering Waves FanArt</h1>
        

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        {/* Card 1 */}
        <div className="overflow-hidden">
        <div className='h-[900px] overflow-hidden'>
          <img src="https://media.discordapp.net/attachments/792330606552809503/1368758505674117120/DAY441.png?ex=68196332&is=681811b2&hm=574b98b0e8e043a69cecfad8b5d3109ab7d90fb4d8747ed13808ed8ce6cab393&=&format=webp&quality=lossless&width=659&height=856" alt="Card 1" className="w-full h-full  object-cover object-top rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
          </div>
          <div className="pt-4">
            
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
              フィービー
            </h3>
            <p className="text-sm text-gray-800 mb-1">2025/04/08</p>
          </div>
        </div>

        <div className="overflow-hidden">
        <div className='h-[900px] overflow-hidden'>
          <img src="https://cdn.discordapp.com/attachments/792330606552809503/1368758496899891231/DAY430.png?ex=6819632f&is=681811af&hm=830c1d9bfa187c821471173dfef7f5c48a5dfc4607aab7d600ec403549cfcb21&" alt="Card 1" className="w-full h-full  object-cover object-top rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
          </div>
          <div className="pt-4">
            
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
              カルロッタ
            </h3>
            <p className="text-sm text-gray-800 mb-1">2025/04/08</p>
          </div>
        </div>

        <div className="overflow-hidden">
        <div className='h-[900px] overflow-hidden'>
          <img src="https://cdn.discordapp.com/attachments/792330606552809503/1368801993883390083/DAY447.png?ex=68198bb2&is=68183a32&hm=a86dd20281c5f7a5ce0ad865d7afb84176095f7df2409e00b1ac14bfbadadb6e&" alt="Card 1" className="w-full h-full  object-cover object-top rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
          </div>
          <div className="pt-4">
            
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
              ザンニー
            </h3>
            <p className="text-sm text-gray-800 mb-1">2025/04/10</p>
          </div>
        </div>

        <div className="overflow-hidden">
            <div className='h-[900px] overflow-hidden'>
            <img src="https://cdn.discordapp.com/attachments/792330606552809503/1368758511068119090/DAY446.png?ex=68196333&is=681811b3&hm=2bb976718f11f6dea6ff94df19d7142bead453ed8bf1eca1b1e0370c579c3af7&" alt="Card 1" className="w-full h-full  object-cover object-top rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
          </div>
          <div className="pt-4">
            
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
            シャコンヌ
            </h3>
            <p className="text-sm text-gray-800 mb-1">2024/10/14</p>
          </div>
        </div>

        <div className="overflow-hidden">
            <div class='h-96 overflow-hidden'>
                <img src="https://cdn.discordapp.com/attachments/792330606552809503/1368758521663062047/DAY432.png?ex=68196335&is=681811b5&hm=e9618fb49e29fa8fa004f29b7bb9a6106657104939b019fc169e8f4aafdeb252&" alt="Card 1" className="h-full object-cover rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
            </div>
          
          <div className="pt-4 overflow-hidden">
            
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
            リナシタ
            </h3>
            <p className="text-sm text-gray-800 mb-1">2025/01/09</p>
          </div>
        </div>

        <div className="overflow-hidden">
            <div className='h-96 overflow-hidden'>
                <img src="https://cdn.discordapp.com/attachments/792330606552809503/1368758518710141010/DAY419.png?ex=68196335&is=681811b5&hm=46de6ea2a10140e7e507ebfb7ed0aeb8561a70c9fdd7509e9f32c29cf0f2d3eb&" alt="Card 1" className="h-full w-full object-cover object-top rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
            </div>
          <div className="pt-4">
            
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
              ブラックショア
            </h3>
            <p className="text-sm text-gray-800 mb-1">2024/09/19</p>
          </div>
        </div>
        
        </div>

        
        </div> 
        <Footer2></Footer2>
    </div>

    
  )
}

export default Wuwa