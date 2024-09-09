import { useNavigate } from "react-router";
import styles from "./classes.module.css";

const Third = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.third} data-aos="zoom-in">
      <div>
        <h2>Join Our Club</h2>
        <p>
          Join our club today and embark on a journey to a healthier and more
          active lifestyle. Our expert trainers and diverse range of classes
          will help you achieve your fitness goals. Don't wait, start now!
        </p>
        <button onClick={() => navigate("/schedule")}>Start Now</button>
      </div>
    </div>
  );
};

export default Third;

