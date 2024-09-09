// Importing styles from the about.module.css file
import styles from "./about.module.css";

// Defining a functional component named First
const First = () => {
  // Returning a JSX element
  return (
    <div
      // Adding classes using template literals and styles imported from CSS module
      className={`${styles.first} margin-sections main-background`}
      // Adding data-aos attribute for animation
      data-aos="zoom-out-down"
    >
      {/* Rendering a heading */}
      <h1 className="main-heading">
        Start with us the body and
        <br />
        mind cleansing
      </h1>
    </div>
  );
};

// Exporting the First component as the default export
export default First;
