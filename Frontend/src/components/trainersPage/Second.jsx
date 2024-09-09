// Importing styles from the trainers.module.css file
import styles from "./trainers.module.css";

// Importing trainer images from the assets folder
import photo1 from "../../assets/tr1.png";
import photo2 from "../../assets/tr2.png";
import photo3 from "../../assets/tr3.png";
import photo4 from "../../assets/trainers2.png";
import photo5 from "../../assets/trainers3.png";
import photo6 from "../../assets/trainers4.png";

const Second = () => {
  return (
    <div className={`${styles.second} container sections-padding`}>
      <div>
        {/* Trainers Headline */}
        <p className="paragraph">Our Trainers</p>
        <h2>We Train You to Gain</h2>
      </div>
      <div className={styles.trainers_boxes}>
        {/* Trainer 1 */}
        <div data-aos="fade-right">
          <img src={photo1} alt="Madison Froning" />
          <div className={styles.info}>
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

        {/* Trainer 2 */}
        <div data-aos="fade-right">
          <img src={photo2} alt="Joshua Frankilin" />
          <div className={styles.info}>
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

        {/* Trainer 3 */}
        <div data-aos="fade-right">
          <img src={photo3} alt="Miranda" />
          <div className={styles.info}>
            <div>
              <h4>Miranda</h4>
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

        {/* Trainer 4 */}
        <div data-aos="fade-right">
          <img src={photo4} alt="Steve Smith" />
          <div className={styles.info}>
            <div>
              <h4>Steve Smith</h4>
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

        {/* Trainer 5 */}
        <div data-aos="fade-right">
          <img src={photo5} alt="Kane Lucy" />
          <div className={styles.info}>
            <div>
              <h4>Kane Lucy</h4>
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

        {/* Trainer 6 */}
        <div data-aos="fade-right">
          <img src={photo6} alt="Jhon Willson" />
          <div className={styles.info}>
            <div>
              <h4>Jhon Willson</h4>
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

export default Second;
