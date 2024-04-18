// import function to register Swiper custom elements

import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCoverflow } from "swiper/modules"
import { Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

function App() {
  return (
    <Swiper
      className=" py-36"
      loop={true}
      grabCursor={true}
      centeredSlides={true}
      coverflowEffect={{
        rotate: 30,
        stretch: 10,
        depth: 100,
        modifier: 2,
        slideShadows: false,
      }}
      effect={"coverflow"}
      modules={[Autoplay, EffectCoverflow]}
      spaceBetween={50}
      slidesPerView={2}
      autoplay={{ delay: 4000 }}
    >
      <SwiperSlide>
        <img
          className="shadow hover:shadow-2xl hover:shadow-emerald-300 rounded-2xl"
          src="01.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="shadow hover:shadow-2xl hover:shadow-emerald-300 rounded-2xl"
          src="02.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="shadow hover:shadow-2xl hover:shadow-emerald-300 rounded-2xl"
          src="03.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="shadow hover:shadow-2xl hover:shadow-emerald-300 rounded-2xl"
          src="04.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  )
}

export default App
