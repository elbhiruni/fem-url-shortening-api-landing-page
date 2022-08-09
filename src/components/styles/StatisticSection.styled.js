import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  background-color: var(--grayish);
  padding: 95px 24px 80px 24px;

  @media (min-width: 1024px) {
    padding-top: 130px;
    padding-bottom: 120px;
  }

  @media (min-width: 1280px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const TextWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;

  @media (min-width: 1024px) {
    max-width: 500px;
  }
`;

export const Title = styled.h2`
  color: var(--very-dark-blue);
  font-size: 28px;
  line-height: 1;
  margin-bottom: 30px;

  @media (min-width: 1024px) {
    font-size: 40px;
  }
`;

export const Paragraph = styled.p`
  color: var(--gray);
  font-size: 16px;
  line-height: 180%;

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 55px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    margin-top: 64px;

    & div:nth-child(3) {
      margin-top: 44px;
    }

    & div:nth-child(5) {
      margin-top: 88px;
    }
  }
`;

export const Line = styled.div`
  align-self: center;
  width: 8px;
  height: 48px;
  background-color: var(--cyan);
  margin: 0 auto;

  @media (min-width: 1024px) {
    width: 30px;
    height: 8px;
    margin: 0;
  }
`;
