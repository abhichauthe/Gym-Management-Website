import styles from "./contact.module.css";

const Third = () => { //funtional component
  return (
    <div className={`${styles.third}  sections-padding`} data-aos="zoom-in">
      <div className={`${styles.third_content} container`}>
        <div>
          <i className="fa-solid fa-phone"></i>
          <h4>Phone</h4>
          <p>Call us here.</p>
          <p>+91 0000000000</p>
        </div> 
        <div> 
          <i className="fa-solid fa-envelope"></i>
          <h4>Email</h4>
          <p>Our email ID.</p>
          <p>strengthy@gmail.com</p>
        </div>
        <div>
          <i className="fa-solid fa-location-dot"></i>
          <h4>Location</h4>
          <p>Our location</p>
          <p>Pune, India</p>
        </div>
      </div>
    </div>
  );
};

export default Third; //apply the export throughout the other modules of the application.
