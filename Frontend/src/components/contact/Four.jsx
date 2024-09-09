import { useState } from "react";
import styles from "./contact.module.css";

const Four = () => { //activity index, active is an array of bool values, active index is initially set to 0, it is the index of currently active state
  const [active, setActive] = useState(Array(4).fill(false));
  const [activeIndex, setActiveIndex] = useState(-1);

  const paragraphHandler = (index) => {
    setActive((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });

    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className={`${styles.four} sections-padding`}>
      <div>
        <div>
          <h4>What is the Fitnessfit schedule?</h4>
          <i
            className={`fa-solid fa-chevron-down ${
              activeIndex === 0 ? styles.activeIcon : ""
            }`}
            onClick={() => paragraphHandler(0)}></i>
        </div>
        <p className={active[0] ? styles.active : ""}>
          The fitness schedule is designed solely for each of our clients, therefore 
          being fully customisable to support your fitness journey.
        </p>
      </div>
      <div>
        <div>
          <h4>How will you benefit?</h4>
          <i
            className={`fa-solid fa-chevron-down ${
              activeIndex === 1 ? styles.activeIcon : ""
            }`}
            onClick={() => paragraphHandler(1)}></i>
        </div>
        <p className={active[1] ? styles.active : ""}>
          Progress is surely slow, but the satisafaction when you reach your goal is
          very high
        </p>
      </div>

      <div>
        <div>
          <h4>How do I stay healthy?</h4>
          <i
            className={`fa-solid fa-chevron-down ${
              activeIndex === 2 ? styles.activeIcon : ""
            }`}
            onClick={() => paragraphHandler(2)}></i>
        </div>
        <p className={active[2] ? styles.active : ""}>
          Always remember is a healthy body is a healthy mind. Keep yourself
          and the people, animals and objects around you happy and healthy.
        </p>
      </div>

      <div>
        <div>
          <h4>How often should I exercise?</h4>
          <i
            className={`fa-solid fa-chevron-down ${
              activeIndex === 3 ? styles.activeIcon : ""
            }`}
            onClick={() => paragraphHandler(3)}></i>
        </div>
        <p className={active[3] ? styles.active : ""}>
          Any number of times you are comfortable with do not overwork 
          yourself but always strive to keep your body in motion and 
          active.
        </p>
      </div>
    </div>
  );
};

export default Four;
