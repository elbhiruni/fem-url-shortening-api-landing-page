import styled from "styled-components";

const Button = styled.button`
  color: white;
  background-color: hsl(180, 66%, 49%);
  cursor: pointer;
  user-select: none;
  font-weight: 700;
  border-radius: 9999px;

  &:hover {
    background-color: hsl(180, 66%, 80%);
  }
`;

const GetStartedBtn = styled(Button)`
  width: 198px;
  height: 56px;
  font-size: 20px;
`;

const SignUpBtn = styled(Button)`
  width: 100%;
  height: 50px;
  font-size: 18px;

  @media (min-width: 1024px) {
    width: 105px;
    height: 40px;
  }
`;

const ShortenBtn = styled(Button)`
  width: 100%;
  height: 50px;
  font-size: 18px;
  border-radius: 4px;

  @media (min-width: 768px) {
    width: 190px;
    height: 64px;
  }
`;

const CopyBtn = styled(ShortenBtn)`
  height: 40px;
  font-size: 16px;

  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 1024px) {
    width: 103px;
  }
`;

export default Button;

export { GetStartedBtn, SignUpBtn, ShortenBtn, CopyBtn };
