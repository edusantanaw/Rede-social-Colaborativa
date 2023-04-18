import Lottie from "lottie-react";
import austronaut from "../../shared/assets/astronaut.json";

const defaultConfig = {
  loop: true,
  autoplay: true,
  animationData: austronaut,
};

interface props {
  w?: string;
}

const Austronaut = ({ w }: props) => {
  return (
    <Lottie id="robot" {...defaultConfig}  style={{ width: w ?? "15em" }}  />
  );
};

export default Austronaut;
