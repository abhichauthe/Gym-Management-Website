import styles from "./trainer.module.css";
//this particular code is used to give the zoom out effect on the page
const First = () => {
  return (
    <div
      className={`${styles.first} main-background margin-sections`}
      data-aos="zoom-out-down">
      <h1 className="main-heading">Madison Froning</h1>
    </div>
  );
};

export default First;
