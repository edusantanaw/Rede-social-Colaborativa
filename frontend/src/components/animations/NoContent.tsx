import Lottie from "lottie-react";
import styled from "styled-components";
import Fighting from "../../shared/assets/astronaut.json";

const Container = styled.div`
  width: 37em;
  padding: 1em;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 0.8em;
  min-height: 5.5em;
  color: #fff;
  align-items: center;
  background-color: rgb(15, 15, 15);
   span {
    font-weight: 300;
  }
`;

const defaultConfig = {
  loop: true,
  autoplay: true,
  animationData: Fighting,
};

interface props {
  w?: string;
}

const NoContent = ({}: props) => {
  return (
    <Container>
      <span>Nunhuma publicação encontrada!</span>
      <Lottie
        id="robot"
        {...defaultConfig}
        style={{ width: "80%", alignSelf: "center" }}
      />
    </Container>
  );
};

export default NoContent;
