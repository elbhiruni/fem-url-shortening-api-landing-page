import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: var(--very-dark-violet);
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 776px;

  @media (min-width: 768px) {
    height: 300px;
    flex-direction: row;
    align-items: flex-start;
    padding-top: 70px;
  }
`;

const LogoWrapper = styled.div`
  margin-bottom: 48px;

  & svg path {
    fill: white;
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 60px;
  }

  @media (min-width: 1024px) {
    margin-bottom: 0;
    margin-right: 100px;
  }

  @media (min-width: 1280px) {
    margin-right: 260px;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 45px;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    text-align: left;
    column-gap: 30px;
  }

  @media (min-width: 1024px) {
    column-gap: 0px;
    & div:first-child {
      margin-right: 80px;
    }
    & div:nth-child(2) {
      margin-right: 100px;
    }
    & div:nth-child(3) {
      margin-right: 100px;
    }
  }
`;

const LinkWrapper = styled.div`
  & a:not(:last-child) {
    margin-bottom: 8px;
  }
`;

const Title = styled.h2`
  color: white;
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 20px;
`;

const Link = styled.a`
  display: block;
  color: var(--gray);
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;

  &:hover {
    color: var(--cyan);
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;
`;

const IconLink = styled.a`
  line-height: 0;

  &:hover svg path {
    fill: var(--cyan);
  }
`;

export {
  StyledFooter,
  Container,
  LogoWrapper,
  LinkContainer,
  LinkWrapper,
  Title,
  Link,
  IconWrapper,
  IconLink,
};
