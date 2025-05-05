import { useState } from "react";
import  Button  from "../components/ui/Footer2";
import { Menu, X } from "lucide-react";
import bgImage from "../assets/img/Gl6CDElbwAAw4fS.png";
import Navbar from "../components/ui/Navbar";
import Footer2 from "../components/ui/Footer2";
import { Link } from 'react-router-dom';

export default function Page2() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-white">
     <Navbar/>
        <div className="grid grid-cols-3 gap-1 pt-24 pb-64 ">
            <div className="h-[780px] mx-auto w-4/5  my-2 ">
                <Link to="/Azurlane"><img src="https://media.discordapp.net/attachments/792330606552809503/1368760564414677022/DAY422.png?ex=6819651c&is=6818139c&hm=1baef82e23349f7eea19c3301ef8cf3a320e3e225c8db3c46c03e7023ef1ea61&=&format=webp&quality=lossless&width=1431&height=856" className="h-full object-[25%] object-cover rounded-xl" /></Link>
                <h1 className="pt-3 text-lg font-bold">Azurlane</h1>
                <p>A side-scrolling shoot 'em up game featuring anthropomorphized warships as anime girls. Players collect and manage shipgirls from WWII navies and engage in naval combat with a mix of action and strategy. Known for fanservice and character collecting.</p>
            </div>
            <div className="h-[780px] mx-auto w-4/5  my-2 ">
            <Link to="/Star"><img src="https://cdn.discordapp.com/attachments/373204840760737796/1368667817636921415/122125845_p0_master1200.jpg?ex=68190ebc&is=6817bd3c&hm=7ad1288af2dc8dd26d4263badbf631c709f7f5577d7cb9abf5aed5c9a3046e89&" className="w-full object-[0%,20%] h-full object-cover rounded-xl" /></Link>
                
                <h1 className="pt-3 text-lg font-bold">Honkai Star rail</h1>
                <p>A turn-based RPG from HoYoverse set in a sci-fi universe. Players follow the Trailblazer on a journey aboard the Astral Express, exploring planets, battling enemies, and uncovering mysteries. Known for cinematic storytelling and polished combat.</p>
            </div>
            <div className="h-[780px] mx-auto w-4/5  my-2 ">
            <Link to="/Wuwa"><img src="https://cdn.discordapp.com/attachments/792330606552809503/1368759800590106694/DAY419.png?ex=68196466&is=681812e6&hm=653fb9f6eb9546c0e54229091bb17cdceb77a4e68cfae1fe1dbef5fc80bdf380&" className="w-full object-[33%,80%] h-full object-cover rounded-xl" /></Link>
                
                <h1 className="pt-3 text-lg font-bold">Wuthering Wave</h1>
                <p>An open-world action RPG with fast-paced, combo-heavy combat. Set in a post-apocalyptic sci-fi world, players control Resonators with unique abilities, exploring vast environments and fighting to uncover lost memories. Developed by Kuro Games.</p>
            </div>
        </div>

        <Footer2></Footer2>
    </div>

  );
}
