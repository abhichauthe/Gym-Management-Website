import styles from "./blogSimgle.module.css";
import photo from "../../assets/blog9.png";

const Third = () => {
  return (
    <div className={`${styles.third} sections-padding`}>
      {/* Author Image */}
      <img src={photo} alt="Benjamin Gray" />

      {/* Author Name */}
      <h4>Benjamin Gray</h4>

      {/* Author's Profession */}
      <p>Professional Trainer</p>

      {/* Author's Bio */}
      <p>
        Discover the story behind my fitness journey. I started as an enthusiast
        and evolved into a professional trainer, helping individuals achieve
        their fitness goals. Join me on this journey towards a healthier and
        stronger you.
      </p>

      {/* LinkedIn Link */}
      <a href="#" target="_blank">
        <i className="fa-brands fa-linkedin"></i>
      </a>
    </div>
  );
};

export default Third;