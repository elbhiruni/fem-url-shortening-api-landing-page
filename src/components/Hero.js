import {
  Section,
  Container,
  HeroImage,
  HeroText,
  Title,
  Text,
} from "./styles/Hero.styled";
import { GetStartedBtn } from "./styles/Button.styled";

import illustration from "../images/illustration-working.svg";

function Hero() {
  return (
    <Section>
      <Container>
        <HeroImage>
          <img src={illustration} alt="Illustration Working" />
        </HeroImage>
        <HeroText>
          <Title>More than just shorter links</Title>
          <Text>
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </Text>
          <GetStartedBtn type="button">Get Started</GetStartedBtn>
        </HeroText>
      </Container>
    </Section>
  );
}

export default Hero;
