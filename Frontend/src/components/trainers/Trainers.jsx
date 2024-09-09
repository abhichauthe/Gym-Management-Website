// Importing styles from the trainers.module.css file
import styles from "./trainers.module.css";

// Importing trainer images from the assets folder
import photo1 from "../../assets/tr2.png";
import photo2 from "../../assets/tr1.png";
import photo3 from "../../assets/tr3.png";

const Seventh = () => {
  return (
    <div className={`${styles.trainers} container sections-padding`}>
      {/* Trainers Headline */}
      <div className={styles.trainers_head}>
        <p className="paragraph">Our Trainers</p>
        <h2>We Train You to Gain</h2>
      </div>

      {/* Trainer Boxes */}
      <div className={styles.boxes}>
        {/* Trainer 1 */}
        <div
          className={styles.box}
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <img src={photo1} alt="Amanda" />
          <div>
            <div>
              <h4>Amanda</h4>
              <p>
                <i className="fa-solid fa-star"></i>/5
              </p>
            </div>
            <h5>Specialisations :</h5>
            <p>Crossfit Expert, Nutrition & Rehab</p>
            <a href="#" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Trainer 2 */}
        <div
          className={styles.box}
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <img src={photo2} alt="Madison Froning" />
          <div>
            <div>
              <h4>Madison Froning</h4>
              <p>
                <i className="fa-solid fa-star"></i>/5
              </p>
            </div>
            <h5>Specialisations :</h5>
            <p>Crossfit Expert, Nutrition & Rehab</p>
            <a href="#" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Trainer 3 */}
        <div
          className={styles.box}
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <img src={photo3} alt="Joshua Frankilin" />
          <div>
            <div>
              <h4>Joshua Frankilin</h4>
              <p>
                <i className="fa-solid fa-star"></i>/5
              </p>
            </div>
            <h5>Specialisations :</h5>
            <p>Crossfit Expert, Nutrition & Rehab</p>
            <a href="#" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seventh;
