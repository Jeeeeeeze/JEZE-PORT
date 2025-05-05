import { useState } from "react";
import  Button  from "../components/ui/Button";
import { Menu, X } from "lucide-react";
import bgImage from "../assets/img/Gl6CDElbwAAw4fS.png";
import VideoBg from "../assets/img/video/TotLS.mp4"
import Navbar from "../components/ui/Navbar";
import Footer2 from "../components/ui/Footer2";
import Glide from "../components/ui/Glide";
import Glide2 from "../components/ui/Glide2";
import Glide3 from "../components/ui/Glide3";
import { Link } from 'react-router-dom';


export default function YostarMockup() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans bg-gray-100 min-h-screen">

      <Navbar></Navbar>
      

      {/* Hero Section */}
      <section className="relative w-full aspect-video 2xl:h-screen overflow-hidden">
        <video className="object-cover" src={VideoBg} autoPlay loop muted />
        <div className="absolute inset-0 flex items-end pb-12">
          <div className="w-full text-white text-center p-6 bg-transparent backdrop-blur-sm">
            <h1 className="text-xl sm:text-3xl font-semibold">
              Jeze Portfolio
            </h1>
            <p>
              i'm professional illustrator
            </p>
          </div>
        </div>
      </section>


      <div className="px-4 py-4">
        
        <div className='max-w-[1400px] m-auto grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 pt-8'>
            <div className='px-4'><Glide></Glide></div>
            <div className='text-black p-4'>
                <h1 className='text-2xl font-bold'>|OFFICIAL WORKS</h1>
                <h1 className='text-xl'>OFFICIAL Commission</h1>
                <p className='pt-4'>Illustrator – Yostar
                Created character illustrations, promotional art, and in-game assets for titles such as  Azur Lane or Wurtering Wave. Worked closely with the art team to match the game's visual style and deliver high-quality, deadline-driven artwork that supports both gameplay and marketing.</p>
                <hr class="h-px mt-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div className="flex items-center justify-end">
                  <div className="w-1/4 pt-4"><li className='hover:underline list-none text-center'><Link to="/Page3">SEE MORE  &gt;&gt; </Link></li></div>   
                </div>
                
            </div>
        </div>

        <div className='max-w-[1400px] m-auto grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 pt-8'>
        <div className='px-4'><Glide2></Glide2></div>
            <div className='text-black p-4'>
                <h1 className='text-2xl font-bold'>|FANART WORKS</h1>
                <h1 className='text-xl'>FANART Commission</h1>
                <p className='pt-4'>Gacha Game Fanart Illustrator
                I specialize in anime-style fanart inspired by gacha games, focusing on expressive characters, vivid colors, and polished rendering. I create portraits, splash art, and key visuals that capture the energy and emotion of the source material. Open for commissions and collaborations.</p>
                <hr class="h-px mt-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div className="flex items-center justify-end">
                  <div className="w-1/4 pt-4"><li className='hover:underline list-none text-center'><Link to="/Fanart">SEE MORE  &gt;&gt;</Link></li></div>   
                </div> 
            </div>
        </div>

        <div className='max-w-[1400px] m-auto grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 pt-8'>
          <div className='px-4'><Glide3></Glide3></div>
            <div className='text-black p-4'>
                <h1 className='text-2xl font-bold'>|Original WORKS</h1>
                <h1 className='text-xl'>Original Commission</h1>
                <p className='pt-4'>Original Character Illustration
                I create original anime-style characters with a focus on personality, storytelling, and clean, expressive rendering. My work suits VTuber models, game assets, or personal commissions. Available for custom designs and concept-based projects.</p>
                <hr class="h-px mt-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div className="flex items-center justify-end">
                  <div className="w-1/4 pt-4"><li className='hover:underline list-none text-center'><Link to="/Original">SEE MORE  &gt;&gt;</Link></li></div>   
                </div> 
            </div>
        </div>

      

      
      </div>
      <Footer2></Footer2>


      
    </div>
    
  );
}
