import {
  Relative,
  ImgWrapper,
  Wrapper,
  Title,
  Paragraph,
} from "./styles/Card.styled";

function Card({ image, title, paragraph }) {
  return (
    <Relative>
      <ImgWrapper>{image}</ImgWrapper>
      <Wrapper>
        <Title>{title}</Title>
        <Paragraph>{paragraph}</Paragraph>
      </Wrapper>
    </Relative>
  );
}

export default Card;
