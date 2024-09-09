import styles from "./home.module.css";

import photo1 from "../../assets/home5.png";
import photo2 from "../../assets/home6.png";
import photo3 from "../../assets/home7.jpg";
import { useNavigate } from "react-router";

const FourthSection = () => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.fourth} container sections-padding`}>
      <div
        className={styles.text}
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <p className="paragraph">About Us</p>
        <h2>
          Embrace a Healthy Lifestyle,
          <br />
          You Deserve It
        </h2>
        <p>
          Discover the path to a healthier, more vibrant you. We are dedicated to
          providing you with the support and resources you need to achieve your
          fitness goals.
        </p>
        <div className={styles.text_one}>
          <div>
            <h3>Motivation</h3>
            <p>
              Find the motivation you need to stay committed to your fitness journey.
            </p>
          </div>
          <img src={photo1} alt="Motivation" />
        </div>
        <div className={styles.text_two}>
          <img src={photo2} alt="Inspiration" />
          <div>
            <h3>Inspire</h3>
            <p>
              Inspire yourself and others to lead a healthier and happier life.
            </p>
          </div>
        </div>
      </div>
      <div
        className={styles.fourth_image_container}
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <img src={photo3} alt="Man Exercising" />
        <button onClick={() => navigate("/schedule")}>Get Started</button>
      </div>
    </div>
  );
};

export default FourthSection;

