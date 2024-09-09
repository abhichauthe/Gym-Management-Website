// Importing styles from the about.module.css file
import styles from "./about.module.css";

// Importing images from the assets folder
import photo1 from "../../assets/about2.jpg";
import photo2 from "../../assets/about3.jpg";

// Defining a functional component named Second
const Second = () => {
  // Returning a JSX element
  return (
    <div 
      // Adding classes using styles imported from CSS module
      className={styles.second} 
      // Adding data-aos attribute for animation
      data-aos="fade-right"
    >
      {/* First Image */}
      <div>
        {/* Rendering an image with source from photo1 */}
        <img src={photo1} alt="" />
      </div>

      {/* Second Image */}
      <div>
        {/* Rendering an image with source from photo2 */}
        <img src={photo2} alt="" />
      </div>
    </div>
  );
};

// Exporting the Second component as the default export
export default Second;
