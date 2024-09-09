import styles from "./contact.module.css";
// used for zoom in then zoom out in the top of the page
const First = () => {
  return (
    <div
      className={`${styles.first} margin-sections main-background`}
      data-aos="zoom-out-down">
      <h1 className="main-heading">Contact Us</h1>
    </div>
  );
};

export default First;
