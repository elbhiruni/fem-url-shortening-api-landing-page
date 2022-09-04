import styled from "styled-components";

const StyledNav = styled.nav`
  width: 100%;
  color: white;
  font-weight: 700;
  text-align: center;
  line-height: 1;

  @media (min-width: 1024px) {
    visibility: visible;
    color: var(--grayish-violet);

    & li:hover {
      color: var(--very-dark-blue);
    }
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

const Card = styled.div`
  width: 100%;
  background-color: var(--dark-violet);
  padding: 40px 20px;
  border-radius: 10px;
  margin-left: 24px;
  margin-right: 24px;
  position: absolute;

  @media (min-width: 640px) {
    width: 330px;
    right: 0;
    margin: 0;
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: transparent;
    padding: 0;
    position: initial;
    border-radius: 0;
  }
`;

const LinkPage = styled.ul`
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
  }

  & li:not(:last-child) {
    margin-bottom: 40px;

    @media (min-width: 1024px) {
      margin-right: 32px;
      margin-bottom: 0;
    }

    & a {
      display: inline-block;
    }
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--grayish-violet);
  margin: 36px 0;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const NavLogin = styled.ul`
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
  }

  & li:first-child {
    margin-bottom: 25px;
    @media (min-width: 1024px) {
      margin-right: 38px;
      margin-bottom: 0;
    }
  }
`;

export { StyledNav, Container, Card, LinkPage, Line, NavLogin };
