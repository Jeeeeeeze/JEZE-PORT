// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><div className='object-center h-80'><img src="https://cdn.discordapp.com/attachments/373204840760737796/1368665343471648948/109874344_p0_master1200.jpg?ex=68190c6e&is=6817baee&hm=ec77df1181b8ff7b68b473dd5bcb007cbba1a0affa7f3de5fbd187d45ab08e21&" className="object-[30%] object-cover"/></div></SwiperSlide>
      <SwiperSlide><div className='object-center h-80'><img src="https://cdn.discordapp.com/attachments/792330606552809503/1368563502545113088/4.jpg?ex=6818ad95&is=68175c15&hm=d6867dc63f68a3e53742948d5f0918e928b612386ab0768efab9cb6f418afa28&" className="w-full  object-cover object-top" /></div></SwiperSlide>
      <SwiperSlide><div className='object-center h-80'><img src="https://cdn.discordapp.com/attachments/792330606552809503/1368563502997966938/3.jpg?ex=6818ad95&is=68175c15&hm=487291e7e75b21d63ddbdb5b50a28b8139e50d7b6f4aab2b46bd6a7d7c84b7c9&" className="w-full  object-cover object-top" /></div></SwiperSlide>
      <SwiperSlide><div className='object-center h-80'><img src="https://cdn.discordapp.com/attachments/792330606552809503/1368563503560130652/2.jpg?ex=6818ad95&is=68175c15&hm=80b4e10f38bd23d2ef0a22461fc6bc3156d6acf770f37de61b4038986a4b1789&" className="w-full  object-cover object-top" /></div></SwiperSlide>

    </Swiper>
  );
};
