// Importing the CSS module for styling
import styles from "./fitness.module.css";

// Importing images for the FitnessTraining component
import photo1 from "../../assets/home4.png";
import photo2 from "../../assets/home3.png";
import photo3 from "../../assets/home2.png";

// Importing Link and useNavigate from react-router-dom for navigation
import { Link, useNavigate } from "react-router-dom";

// Functional component for FitnessTraining
const FitnessTraining = () => {
  // Initializing the useNavigate hook for programmatic navigation
  const navigate = useNavigate();

  // Rendering the FitnessTraining component
  return (
    <div className={`${styles.second_section} container sections-padding`}>
      <div className={styles.first}>
        <div>
          {/* Text content for the section */}
          <p className="paragraph">Our Fitness Training</p>
          <h2>Upcoming Classes</h2>
        </div>
        <div>
          {/* Button for navigating to the "classes" page */}
          <button onClick={() => navigate("/classes")}>More Class</button>
        </div>
      </div>
      <div className={styles.second}>
        {/* First fitness training section */}
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <img src={photo1} alt="women in gym" />
          <h3>Pilates Training</h3>
          <p>contaand more recently with </p>
          {/* Link to the "yogaClass" page */}
          
        </div>

        {/* Second fitness training section */}
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <img src={photo2} alt="women in gym" />
          <h3>Aerobic Training</h3>
          <p>containing Lorem Ipsum passagesand more recently with </p>
          {/* Placeholder link (replace with actual link) */}
          <a href="#">Read More</a>
        </div>

        {/* Third fitness training section */}
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <img src={photo3} alt="man in gym" />
          <h3>CrossFit Workout</h3>
          <p>containing Lorem Ipsum passagesand more recently with </p>
          {/* Placeholder link (replace with actual link) */}
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  );
};

// Exporting the FitnessTraining component as the default export for this file
export default FitnessTraining;
