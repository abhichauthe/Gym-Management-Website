import styles from "./home.module.css";
import photo1 from "../../assets/s1.jpg";
import photo2 from "../../assets/s2.jpg";
import photo3 from "../../assets/quet.png";

// Import Swiper
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Sixth = () => {
  return (
    <div
      className={`${styles.six} sections-padding`}
      data-aos="fade-up"
      data-aos-anchor-placement="center-bottom"
    >
      <div className={`${styles.six_content} container `}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          breakpoints={{
            600: {
              slidesPerView: 1,
            },
            800: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className={styles.swipe_content}>
              <div className={styles.six_image_holder}>
                <img src={photo1} alt="" className={styles.trainer} />
                <img src={photo3} alt="" />
              </div>

              <div className={styles.six_text}>
                <h4>Natasha</h4>
                <p>Athletics / Trainer</p>
                <div className={styles.starts}>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <p>
                  Explore the world of fitness and reach your goals with Natasha.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className={styles.swipe_content}>
              <div className={styles.six_image_holder}>
                <img src={photo2} alt="" className={styles.trainer} />
                <img src={photo3} alt="" />
              </div>

              <div className={styles.six_text}>
                <h4>John</h4>
                <p>Yoga Instructor</p>
                <div className={styles.starts}>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <p>
                  Enhance your well-being through yoga practice with John.
                </p>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className={styles.swipe_content}>
              <div className={styles.six_image_holder}>
                <img src={photo1} alt="" className={styles.trainer} />
                <img src={photo3} alt="" />
              </div>

              <div className={styles.six_text}>
                <h4>Lisa</h4>
                <p>Fitness Coach</p>
                <div className={styles.starts}>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <p>
                  Achieve your fitness goals with expert guidance from Lisa.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Sixth;

