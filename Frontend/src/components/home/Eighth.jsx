import styles from "./home.module.css";
import photo from "../../assets/Video.png";

//In this page we have added the gym amenties

const Eighth = () => {
  return (
    <div className={styles.eight}>
      <div className={`${styles.eight_content} container sections-padding`}>
        {/* Section with text and image */}
        <div className={styles.eight_first}>
          <p>Gym Amenities</p>
          <h2>The Unique Standard</h2>
          <p>
            {/* Description of gym amenities */}
            Discover our world-class gym amenities that set us apart from the rest.
            We're dedicated to providing you with an exceptional fitness experience.
          </p>
          <img src={photo} alt="" />
        </div>

        {/* List of gym amenities */}
        <div className={styles.eight_second}>
          {/* Individual amenity */}
          <div>
            <h5>
              <i className="fa-regular fa-circle-check"></i>
              Lockers
            </h5>
            <p>
              {/* Description of lockers */}
              Secure lockers that work by you choosing a four-digit code.
            </p>
          </div>

          {/* Repeat the above structure for each amenity */}
          <div>
            <h5>
              <i className="fa-regular fa-circle-check"></i>
              Changing Rooms
            </h5>
            <p>
              Spacious changing rooms equipped with all the amenities you need for
              a comfortable post-workout experience.
            </p>
          </div>

          <div>
            <h5>
              <i className="fa-regular fa-circle-check"></i>
              Fuel Bar
            </h5>
            <p>
              Recharge at our fuel bar with delicious, protein-packed gourmet shakes
              available in various flavors. We also provide water and snacks.
            </p>
          </div>

          <div>
            <h5>
              <i className="fa-regular fa-circle-check"></i>
              Complimentary Towels
            </h5>
            <p>
              Enjoy complimentary towels during your workout for added convenience.
            </p>
          </div>

          <div>
            <h5>
              <i className="fa-regular fa-circle-check"></i>
              Wifi & Restrooms
            </h5>
            <p>
              Stay connected with our complimentary Wi-Fi and access clean restrooms.
            </p>
          </div>

          <div>
            <h5>
              <i className="fa-regular fa-circle-check"></i>
              Hot Showers & Hair Care
            </h5>
            <p>
              Refresh after your workout with hot showers and quality hair care products.
              Your well-being is our priority.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eighth;


