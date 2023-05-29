import Sectionstittle from "../../../components/Sectionstittle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaQuoteLeft } from 'react-icons/fa';

import '@smastrom/react-rating/style.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { Icon } from "@iconify/react";

const Testimonials = () => {

    const [reviews , setReviews] = useState([]);
useEffect(() => {
    fetch('reviews.json')
    .then(res => res.json())
    .then(data => setReviews(data))
},[])

    return (
        <section className="my-20">
<Sectionstittle subHeading={"What Our Clints Say"} heading={"Testimonials"}></Sectionstittle>

<Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
       {
        reviews.map(review =><SwiperSlide key={review._id}>
          <div className="flex flex-col items-center mx-16 my-24 ">
          <Rating
      style={{ maxWidth: 180 }}
      value={review.rating}
      readOnly
    />
<FaQuoteLeft size={56}></FaQuoteLeft>
          <p>{review.details}</p>
            <h3 className="text-2xl text-orange-400 ">{review.name}</h3>
          </div>
        </SwiperSlide> )
       }
      </Swiper>

        </section>
    );
};

export default Testimonials;