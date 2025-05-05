import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/navigation';
import 'swiper/css/pagination';



// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>

      <SwiperSlide><div className='object-center h-screen'><img src="https://cdn.discordapp.com/attachments/792330606552809503/1368756950464069642/DAY387.png?ex=681961bf&is=6818103f&hm=b1c4d7b682cdce0aff3cb5744e1440536af4d6ebdf2f12ea6be75b62e4b657d5&" className="object-[30%] object-cover"/></div></SwiperSlide>
      <SwiperSlide><div className='object-center h-screen'><img src="https://cdn.discordapp.com/attachments/792330606552809503/1368756947473399859/DAY387.1.png?ex=681961be&is=6818103e&hm=7c9424d794bbbe7f3aa2fed91974bca277fcb13cb2abaf164da093964c66a870&" className="w-full  object-cover object-top" /></div></SwiperSlide>
      <SwiperSlide><div className='object-center h-screen'><img src="https://cdn.discordapp.com/attachments/792330606552809503/1368756954734002226/DAY436.png?ex=681961c0&is=68181040&hm=07d77e5c6c62d1b9a926dadc727c3db89ab2d45fa38df86201ab2e59cf8a8ece&" className="w-full  object-cover object-top" /></div></SwiperSlide>
      <SwiperSlide><div className='object-center h-screen'><img src="https://cdn.discordapp.com/attachments/792330606552809503/1368756958752149504/DAY437.png?ex=681961c1&is=68181041&hm=2c3f2537a5a97539639433ce210a6761e0e73681fbafd2ee31d34cd018f8fb65&" className="w-full  object-cover object-top" /></div></SwiperSlide>
      <SwiperSlide><div className='object-center h-screen'><img src="https://cdn.discordapp.com/attachments/792330606552809503/1368756962845524038/DAY438.png?ex=681961c2&is=68181042&hm=759ab0f6d3697b2abf5883e5a9ec7a5a81c4017c68e8079b713ba918a90e9085&" className="w-full  object-cover object-top" /></div></SwiperSlide>
      <SwiperSlide><div className='object-center h-screen'><img src="https://cdn.discordapp.com/attachments/792330606552809503/1368756967069192222/DAY440.png?ex=681961c3&is=68181043&hm=1fe06b4eca9af0053affc607bb3d30151bbae54db2b0d67e80fb0500d3bddd20&" className="w-full  object-cover object-top" /></div></SwiperSlide>

    </Swiper>
  );
};
