import Lottie from "lottie-react";
import message from "../../shared/assets/message.json";

const defaultConfig = {
  loop: true,
  autoplay: true,
  animationData: message,
};

interface props {
  w?: string;
}

const Message = ({ w }: props) => {
  return (
    <Lottie id="robot" {...defaultConfig} style={{ width: w ?? "15em" }}  />
  );
};

export default Message;
