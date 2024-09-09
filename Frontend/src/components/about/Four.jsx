import { useNavigate } from "react-router";
import styles from "./about.module.css";

const Four = () => {
  const navigate = useNavigate(); // Initializing the useNavigate hook

  return (
    <div className={styles.four}>
      {/* Section with background image */}
      <div className={styles.four_image}></div>

      {/* Values Section */}
      <div className={`${styles.four_content} sections-padding`}>
        {/* Heading and Book a Class Button */}
        <div className={`${styles.values} container`}>
          <div>
            <p className="paragraph">Values</p>
            <h2>My core work values</h2>
          </div>
          <button onClick={() => navigate("/contact")}>Book a Class</button>
        </div>

        {/* Info Boxes */}
        <div className={`${styles.four_boxes} container`}>
          {/* Certified Trainer */}
          <div data-aos="fade-right">
            <i className="fa-regular fa-newspaper"></i>
            <h3>Certified trainer</h3>
            <p>
              Bring to the table win survival strategies ensure proactive new
              domination.
            </p>
          </div>

          {/* Nutrition & Diet */}
          <div data-aos="fade-right">
            <i className="fa-solid fa-apple-whole"></i>
            <h3>Nutrition & diet</h3>
            <p>
              Bring to the table win survival strategies ensure proactive new
              domination.
            </p>
          </div>

          {/* Years of Experience */}
          <div data-aos="fade-right">
            <i className="fa-solid fa-person"></i>
            <h3>Years of experience</h3>
            <p>
              Bring to the table win survival strategies ensure proactive new
              domination.
            </p>
          </div>
        </div>
      </div>

      {/* Numbers Section */}
      <div className={`${styles.numbers} container`}>
        {/* Experience */}
        <div>
          <h3>10+</h3>
          <p>Year of Experience</p>
        </div>

        {/* Happy Clients */}
        <div>
          <h3>500+</h3>
          <p>Happy Clients</p>
        </div>

        {/* Expert Trainers */}
        <div>
          <h3>50+</h3>
          <p>Expert Trainers</p>
        </div>

        {/* Instagram Followers */}
        <div>
          <h3>15k</h3>
          <p>Instagram followers</p>
        </div>
      </div>
    </div>
  );
};

export default Four;
