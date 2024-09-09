// Importing styles from the trainer.module.css file
import styles from "./trainer.module.css";

const Third = () => {
  return (
    <div className={`${styles.third} sections-padding`} data-aos="flip-down">
      {/* Trainer Contact Section */}
      <div className={`${styles.third_content} container`}>
        <div>
          <h2>
            Contact us And
            <br />
            Join The Team
          </h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is
          </p>
        </div>
        <div>
          {/* Contact Form */}
          <form>
            <div>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
            </div>
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message"></textarea>
            <button>Start Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Third;
