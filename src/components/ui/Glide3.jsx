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
      <SwiperSlide><div className='object-center h-80'><img src="https://media.canva.com/v2/image-resize/format:PNG/height:450/quality:100/uri:ifs%3A%2F%2F%2Feec7727e-c4eb-436c-af41-a84c0cf97158/watermark:F/width:800?csig=AAAAAAAAAAAAAAAAAAAAAFnE9J8RdHsPdWEELwg8xTWJhog_S2eNkVPRhIweSWPu&exp=1746417132&osig=AAAAAAAAAAAAAAAAAAAAACBWb2Gl46jBiUR9O8YQ4h1g2VPxnepO0t5KsU43laOJ&signer=media-rpc&x-canva-quality=screen" className="object-[30%] object-cover"/></div></SwiperSlide>
      <SwiperSlide><div className='object-center h-80'><img src="https://media.canva.com/v2/image-resize/format:PNG/height:450/quality:100/uri:ifs%3A%2F%2F%2F0947abb3-7c69-4c8e-a24a-2b9625407720/watermark:F/width:800?csig=AAAAAAAAAAAAAAAAAAAAADXEnXVyT3gWM1Ts19FHUqukXWutRXOtlLiIOt2hSxpF&exp=1746417677&osig=AAAAAAAAAAAAAAAAAAAAAEldH4_HWKa4IfxYdXSwNX7sh-wjwkeoPNtUpb-g6ILD&signer=media-rpc&x-canva-quality=screen" className="w-full  object-cover object-top" /></div></SwiperSlide>
      <SwiperSlide><div className='object-center h-80'><img src="https://cdn.discordapp.com/attachments/1368722388606521374/1368726150053888181/GncSEgBaMAAeN2F.jpg?ex=6819450f&is=6817f38f&hm=c796668be6e75ff87c18243025a93541d9abbc490e18c65aab93b4af6c09fe81&" /></div></SwiperSlide>
      <SwiperSlide><div className='object-center h-80'><img src="https://media.discordapp.net/attachments/1368722388606521374/1368726150716723263/Go6k0RqasAAlSiV.jpg?ex=68194510&is=6817f390&hm=79bc269f41e7727886230b8e4b0b2a898e31c401e24aeb8436e1f8742541ecaf&=&format=webp&width=1418&height=725" className="w-full  object-cover object-top" /></div></SwiperSlide>

    </Swiper>
  );
};
