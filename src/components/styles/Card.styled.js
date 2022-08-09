import styled from "styled-components";

export const Relative = styled.div`
  position: relative;
`;

export const ImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 88px;
  height: 88px;
  background-color: var(--dark-violet);
  border-radius: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 1024px) {
    left: 30px;
    transform: translateX(0%);
  }
`;

export const Wrapper = styled.div`
  max-width: 350px;
  height: 267px;
  text-align: center;
  background-color: white;
  padding-top: 80px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 44px;
  border-radius: 5px;

  @media (min-width: 1024px) {
    text-align: left;
    padding-top: 85px;
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const Title = styled.h3`
  color: var(--very-dark-blue);
  font-size: 22px;
  line-height: 1;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  color: var(--gray);
  font-size: 16px;
  word-spacing: -2px;
`;
