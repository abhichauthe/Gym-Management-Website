import styles from "./about.module.css";
import photo2 from "../../assets/about5.png";

const Third = () => {
  return (
    <div
      className={`${styles.third} container sections-padding`}
      data-aos="fade-right"
    >
      <div className={styles.third_one}>
        <div className={styles.one_content}>
          <p className="paragraph">Welcome</p>
          <h2>
            The Story Behind
            <br />
            Our Gym
          </h2>
          <p>
            Welcome to [Gym Name], where we're dedicated to helping you achieve
            your fitness goals. Our journey began with a passion for health and
            a desire to create a welcoming space for people of all fitness
            levels. We believe in the power of community and the positive impact
            it can have on personal wellness.
          </p>
        </div>
        <div className={styles.one_content2}>
          <h3>Our Story</h3>
          <p>
            [Gym Name] was founded on the belief that everyone deserves access
            to quality fitness facilities and personalized training. Our team of
            experienced trainers and state-of-the-art equipment are here to
            support you on your fitness journey. Whether you're a seasoned
            athlete or just starting out, we're committed to helping you reach
            your full potential.
          </p>
          <img src={photo2} alt="Gym Interior" />
        </div>
      </div>
      <div className={styles.third_two}>
        <div className={styles.two_content}>
          <h3>Our Mission</h3>
          <p>
            Our mission is to inspire and empower individuals to lead healthier,
            happier lives. We strive to create a positive and inclusive
            environment where everyone feels supported and motivated to
            prioritize their well-being. Through expert guidance, innovative
            programs, and a strong sense of community, we aim to transform lives
            one workout at a time.
          </p>
        </div>
        <div className={styles.two_content2}>
          <h3>Our Values</h3>
          <p>
            Integrity, inclusivity, and excellence are at the core of everything
            we do. We believe in transparency, honesty, and treating every
            individual with respect. Our commitment to continuous improvement
            ensures that we provide the highest quality services and facilities
            to our members. Together, we're building a healthier, stronger
            community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Third;
