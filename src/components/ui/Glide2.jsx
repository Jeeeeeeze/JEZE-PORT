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
      <SwiperSlide><div className='object-center h-80'><img src="https://cdn.discordapp.com/attachments/1368722388606521374/1368722497356169377/109609853_p0.png?ex=681941a9&is=6817f029&hm=f1aa05a5cbd3b804d4253b05e70c0c9651e413882df793614cb9019372829a98&" className="object-[30%] object-cover"/></div></SwiperSlide>
      <SwiperSlide><div className='object-center h-80'><img src="https://cdn.discordapp.com/attachments/1368722388606521374/1368722498325188751/110967851_p0_master1200.jpg?ex=681941a9&is=6817f029&hm=513e395605ae3c567a54680a9e249f8601a3d6dcdf89544bd3ecc107f8ba48b1&" className="w-full  object-cover object-top" /></div></SwiperSlide>
      <SwiperSlide><div className='object-center h-80'><img src="https://cdn.discordapp.com/attachments/1368722388606521374/1368722498711195669/112126714_p0_master1200.jpg?ex=681941a9&is=6817f029&hm=a81f290000ac34bf9d2b75fc75aca8b6ccbdd2622fdd6145437a0d689f762070&" className="w-full  object-cover object-top" /></div></SwiperSlide>
      <SwiperSlide><div className='object-center h-80'><img src="https://cdn.discordapp.com/attachments/1368722388606521374/1368722499075838023/121047427_p0_master1200.jpg?ex=681941a9&is=6817f029&hm=01ff03d1148a515e753bfeab9bd39dd6cdeaf44f729149479d5f94c532d36e41&" className="w-full  object-cover object-top" /></div></SwiperSlide>

    </Swiper>
  );
};
