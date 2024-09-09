import styles from "./classes.module.css";

//This code is used add the zoom out effect and also change the heading of the page 
const First = () => {
  return (
    <div
      className={`${styles.first} margin-sections main-background`}
      data-aos="zoom-out-down">
      <h1 className="main-heading">Classes</h1>
    </div>
  );
};

export default First;
