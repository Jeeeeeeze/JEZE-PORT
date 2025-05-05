import React from 'react'
import Navbar from '../components/ui/Navbar'
import Footer2 from '../components/ui/Footer2'

function Fanart() {
  return (
    <div>
        <div className="min-h-screen bg-white pt-8 ">
        <Navbar/>
        <div className='px-80 pt-12'>
        <h1 className="text-5xl font-bold text-left text-gray-600 mb-1">|FANART WORKS</h1>
        <h2 className="text-sm font-semibold text-left text-gray-600 mb-6">FANART COMMISSION</h2>

        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
        {/* Card 1 */}
        <div className="overflow-hidden">
        <div className='h-96 overflow-hidden'>
          <img src="https://cdn.discordapp.com/attachments/1368722388606521374/1368722497356169377/109609853_p0.png?ex=681941a9&is=6817f029&hm=f1aa05a5cbd3b804d4253b05e70c0c9651e413882df793614cb9019372829a98&" alt="Card 1" className="w-full h-full  object-cover object-top rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
          </div>
          <div className="pt-4">
            
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
                ゴリツィア
            </h3>
            <p className="text-sm text-gray-800 mb-1">2023/07/04</p>
          </div>
        </div>

        <div className="overflow-hidden">
        <div className='h-96 overflow-hidden'>
          <img src="https://cdn.discordapp.com/attachments/1368722388606521374/1368722498325188751/110967851_p0_master1200.jpg?ex=681941a9&is=6817f029&hm=513e395605ae3c567a54680a9e249f8601a3d6dcdf89544bd3ecc107f8ba48b1&" alt="Card 1" className="w-full h-full  object-cover object-top rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
          </div>
          <div className="pt-4">
            
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
                鉄血
            </h3>
            <p className="text-sm text-gray-800 mb-1">2023/08/19</p>
          </div>
        </div>

        <div className="overflow-hidden">
        <div className='h-96 overflow-hidden'>
          <img src="https://cdn.discordapp.com/attachments/1368722388606521374/1368742786635010108/116191994_p0.png?ex=6819548e&is=6818030e&hm=21f46ddd2aafb283f4539f7b25e9bc76e2147091122118bbec52e5198d8758d0&" alt="Card 1" className="w-full h-full  object-cover object-top rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
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
            <img src="https://cdn.discordapp.com/attachments/1368722388606521374/1368722498711195669/112126714_p0_master1200.jpg?ex=681941a9&is=6817f029&hm=a81f290000ac34bf9d2b75fc75aca8b6ccbdd2622fdd6145437a0d689f762070&" alt="Card 1" className="w-full h-full  object-cover object-top rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
          </div>
          <div className="pt-4">
            
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
                 尾張ちゃん
            </h3>
            <p className="text-sm text-gray-800 mb-1">2023/09/29</p>
          </div>
        </div>

        <div className="overflow-hidden">
            <div class='h-96 overflow-hidden'>
                <img src="https://cdn.discordapp.com/attachments/1368722388606521374/1368722499075838023/121047427_p0_master1200.jpg?ex=681941a9&is=6817f029&hm=01ff03d1148a515e753bfeab9bd39dd6cdeaf44f729149479d5f94c532d36e41&" alt="Card 1" className="h-full object-cover rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
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
                <img src="https://cdn.discordapp.com/attachments/792330606552809503/1368798416213245962/109408675_p0.png?ex=6819885d&is=681836dd&hm=0409e28fd6726c6a798a96d8541331cd6294a9d41248c83dd8f369abde4d1db5&" alt="Card 1" className="h-full w-full object-cover object-top rounded-xl hover:scale-125 transition-all duration-300 ease-in-out" />
            </div>
          <div className="pt-4">
            
            <h3 className="text-md font-semibold text-gray-800 leading-snug">
                水族館
            </h3>
            <p className="text-sm text-gray-800 mb-1">2023/06/28</p>
          </div>
        </div>
        
        </div>

        
        </div> 
        <Footer2></Footer2>
        </div>
    </div>
  )
}

export default Fanart