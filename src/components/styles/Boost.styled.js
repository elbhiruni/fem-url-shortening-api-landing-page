import styled from "styled-components";

// Images
import bgBoostMobile from "../../images/bg-boost-mobile.svg";
import bgBoostDesktop from "../../images/bg-boost-desktop.svg";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 18.75rem; /* 300px */
  background-color: var(--dark-violet);
  background-image: url(${bgBoostMobile});
  background-repeat: no-repeat;
  background-size: cover;
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: 376px) {
    height: 15.625rem; /* 250px */
    background-image: url(${bgBoostDesktop});
  }
`;

const BoostText = styled.p`
  color: white;
  text-align: center;
  font-size: 1.75rem; /* 28px */
  font-weight: 700;
  margin-bottom: 1.125rem; /* 18px */

  @media (min-width: 768px) {
    font-size: 2.5rem; /* 40px */
    margin-bottom: 1.5rem; /* 24px */
  }
`;

export { Container, BoostText };
