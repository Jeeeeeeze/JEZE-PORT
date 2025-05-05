import React from 'react'
import { useState } from "react";
import Footer2 from '../components/ui/Footer2';
import Navbar from '../components/ui/Navbar';
import Glide from '../components/ui/Glide';

const Star = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (

    
    <div className="min-h-screen bg-white pt-8 ">
        <Navbar/>
        <div className='px-80 pt-12'>
        <h1 className="text-5xl font-bold text-left text-gray-600 mb-8">|honkai star rail FanArt</h1>
        

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        {/* Card 1 */}
        <div className="overflow-hidden">
        <div className='h-96 overflow-hidden'>
          <img src="https://cdn.discordapp.com/attachments/792330606552809503/1368759430812008528/DAY392.png?ex=6819640e&is=6818128e&hm=3f13c9238337025173d4cecdb5ac361d44cdfac8f0aed2803026bc86751a2baa&" alt="Card 1" className="w-full h-full  object-cover object-top rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
          </div>
          <div className="pt-4">
            
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
                &lt;3
            </h3>
            <p className="text-sm text-gray-800 mb-1">2024/05/03</p>
          </div>
        </div>

        <div className="overflow-hidden">
        <div className='h-96 overflow-hidden'>
          <img src="https://cdn.discordapp.com/attachments/792330606552809503/1368759427531935804/DAY388.png?ex=6819640d&is=6818128d&hm=a3cce2b2589ee2094ddf2f374195c7eed49d1d8b9731fe6047c3352a9fd76bb0&" alt="Card 1" className="w-full h-full  object-cover object-top rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
          </div>
          <div className="pt-4">
            
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
                花火
            </h3>
            <p className="text-sm text-gray-800 mb-1">2024/04/18</p>
          </div>
        </div>

        <div className="overflow-hidden">
        <div className='h-96 overflow-hidden'>
          <img src="https://cdn.discordapp.com/attachments/792330606552809503/1368791448568201216/DAY395.png?ex=681981e0&is=68183060&hm=f839b2e75fccf6e1c729788fc4214860829e851212a38204256536a72d5f0d1e&" alt="Card 1" className="w-full h-full  object-cover object-top rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
          </div>
          <div className="pt-4">
            
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
                Swarm
            </h3>
            <p className="text-sm text-gray-800 mb-1">2024/05/21</p>
          </div>
        </div>

        <div className="overflow-hidden">
            <div className='h-96 overflow-hidden'>
            <img src="https://cdn.discordapp.com/attachments/792330606552809503/1368759201396035687/DAY427.png?ex=681963d7&is=68181257&hm=e4a8e64550097528f54b89ded56c14e29e1c06bc8ed5b7481e9cce9bc6536104&" alt="Card 1" className="w-full h-full  object-cover w-full object-[0%,20%] rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
          </div>
          <div className="pt-4">
            
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
              The Herta
            </h3>
            <p className="text-sm text-gray-800 mb-1">2024/10/14</p>
          </div>
        </div>

        <div className="overflow-hidden">
            <div class='h-96 overflow-hidden'>
                <img src="https://cdn.discordapp.com/attachments/792330606552809503/1368759196492763178/DAY415.1.png?ex=681963d6&is=68181256&hm=8b51a7ce5b8d35733aafbe1b92b88668a90bbce6a15f4795c840fc7480d2ab5f&" alt="Card 1" className="h-full w-full object-cover object-[0%,30%] rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
            </div>
          
          <div className="pt-4 overflow-hidden">
            
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
                N.O.U.S
            </h3>
            <p className="text-sm text-gray-800 mb-1">2024/09/03</p>
          </div>
        </div>

        <div className="overflow-hidden">
            <div className='h-96 overflow-hidden'>
                <img src="https://cdn.discordapp.com/attachments/792330606552809503/1368759198229463160/DAY416.1.png?ex=681963d7&is=68181257&hm=56817cb07e85248451b3a981373799a71ad4e6d1bee934e46ab27e406e49ed9f&" alt="Card 1" className="h-full w-full object-cover object-cover object-[0%,25%] rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
            </div>
          <div className="pt-4">
            
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
                A.H.A
            </h3>
            <p className="text-sm text-gray-800 mb-1">2024/09/04</p>
          </div>
        </div>
        
        </div>

        
        </div> 
        <Footer2></Footer2>
    </div>

    
  )
}

export default Star