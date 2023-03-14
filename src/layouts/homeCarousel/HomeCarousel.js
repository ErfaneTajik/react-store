
import phone from '../../assets/images/phone.jpg'
import home from '../../assets/images/home.jpg'
import slideTv from '../../assets/images/slideTv.jpg'
import slideWatch from '../../assets/images/slideWatch.jpg'
import perfume from'../../assets/images/perfume.jpg'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {Navigation, Pagination} from "swiper";
import styles from './HomeCarousel.css'
import {Swiper, SwiperSlide} from "swiper/react";





const homeCarousel = () => {


    const images = [{src: perfume,alt: 'perfume'},{
        src: phone,
        alt: 'smartPhone'
    },{src: home, alt: 'furniture'},  {src: slideTv, alt: 'Tv'}, {src: slideWatch, alt: 'watch'}]
    const slides=images.map(img =>

        <SwiperSlide key={img.alt} style={{ backgroundImage: `url("${img.src}")`}}>
{/*<p  className={styles.slideText}>hellooooooooooooooo</p>*/}
        </SwiperSlide>


    )
    return (
        <>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                speed={600}
                navigation={true}
                modules={[ Pagination, Navigation]}
                className="mySwiper"
            >
                {slides}

            </Swiper>
        </>
    );
}
export default homeCarousel