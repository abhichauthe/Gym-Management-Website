import FitnessTraining from "../fitnessTraining/FitnessTraining";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
//importing all the necessary files
const TrainerSingle = () => {
  return (
    <div>
      {/**in this section we are assembling all the files to display in the correct way */}
      <First />
      <Second />
      <Third />
      <FitnessTraining />
    </div>
  );
};

export default TrainerSingle;
