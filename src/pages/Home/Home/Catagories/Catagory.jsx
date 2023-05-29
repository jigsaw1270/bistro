import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

import slide1 from '../../../../assets/home/slide1.jpg'
import slide2 from '../../../../assets/home/slide2.jpg'
import slide3 from '../../../../assets/home/slide3.jpg'
import slide4 from '../../../../assets/home/slide4.jpg'
import slide5 from '../../../../assets/home/slide5.jpg'
import Sectionstittle from "../../../../components/Sectionstittle";

const Catagory = () => {
    return (
        <section>

        <Sectionstittle heading={"Order online"} subHeading={"From 11.00am to 10.00pm"}></Sectionstittle>
        
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mb-24 mySwiper"
      >
        <SwiperSlide> <img src={slide1} alt="" /><h3 className="-mt-12 font-mono text-4xl text-center text-amber-400 drop-shadow-xl">Salads</h3></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /><h3 className="-mt-12 font-mono text-4xl text-center text-amber-400 drop-shadow-xl">Pizza</h3></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /><h3 className="-mt-12 font-mono text-4xl text-center text-amber-400 drop-shadow-xl">Soup</h3></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /><h3 className="-mt-12 font-mono text-4xl text-center text-amber-400 drop-shadow-xl">Cake</h3></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide1} alt="" /></SwiperSlide>
      </Swiper>
   
            
        </section>
    );
};

export default Catagory;