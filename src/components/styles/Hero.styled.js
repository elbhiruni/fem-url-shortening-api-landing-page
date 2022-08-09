import styled from "styled-components";

const Section = styled.section``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 540px) {
    align-items: center;
  }

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    padding-left: 24px;
  }

  @media (min-width: 1280px) {
    padding-left: 100px;
  }

  @media (min-width: 1440px) {
    padding-left: 168px;
  }
`;

const HeroImage = styled.div`
  padding-left: 24px;
  overflow-x: hidden;
  overflow-y: visible;

  @media (min-width: 540px) {
    padding-left: 0;
  }

  @media (min-width: 768px) {
    max-width: 353px;
  }

  @media (min-width: 1024px) {
    max-width: 450px;
  }

  @media (min-width: 1440px) {
    max-width: 610px;
  }

  & img {
    width: auto;
    height: 100%;
    max-height: 337px;

    @media (min-width: 1024px) {
      max-height: 480px;
    }
  }
`;

const HeroText = styled.div`
  text-align: center;
  padding-top: 40px 24px;
  padding-left: 24px;
  padding-right: 24px;

  @media (min-width: 768px) {
    max-width: 460px;
    text-align: left;
    padding: 0;
  }

  @media (min-width: 1024px) {
    max-width: 565px;
  }
`;

const Title = styled.h1`
  color: var(--very-dark-blue);
  font-size: 42px;
  font-weight: 700;
  line-height: 115%;
  letter-spacing: -1px;
  margin-bottom: 28px;

  @media (min-width: 768px) {
    margin-bottom: 0px;
  }

  @media (min-width: 1024px) {
    font-size: 78px;
  }
`;

const Text = styled.p`
  color: var(--gray);
  line-height: 165%;
  margin-bottom: 34px;
  letter-spacing: -1px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }

  @media (min-width: 640px) {
    font-size: 22px;
  }
`;

export { Section, Container, HeroImage, HeroText, Title, Text };
