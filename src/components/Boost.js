// Components
import { Container, BoostText } from "./styles/Boost.styled";
import { GetStartedBtn } from "./styles/Button.styled";

function Boost() {
  return (
    <Container>
      <BoostText>Boost your links today</BoostText>
      <GetStartedBtn type="button">Get Started</GetStartedBtn>
    </Container>
  );
}

export default Boost;
