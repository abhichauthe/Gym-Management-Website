import styles from "./trainers.module.css";
//this particular code is used to give the zoom out effect on the page

const First = () => {
  return (
    <div
      className={`${styles.first} margin-sections main-background`}
      data-aos="zoom-out-down">
      <h1 className="main-heading">Meet our Trainers</h1>
    </div>
  );
};

export default First;
