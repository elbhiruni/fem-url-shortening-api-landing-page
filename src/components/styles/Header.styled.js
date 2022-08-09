import styled from "styled-components";

const Container = styled.div`
  padding-top: 40px;
  padding-left: 24px;
  padding-right: 24px;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    padding-top: 55px;
    padding-bottom: 55px;
  }

  @media (min-width: 1280px) {
    display: flex;
    align-items: center;
    padding-left: 100px;
    padding-right: 100px;
  }

  @media (min-width: 1440px) {
    padding-left: 168px;
    padding-right: 168px;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 22px;
  user-select: none;

  @media (min-width: 1024px) {
    margin-right: 45px;
    padding-bottom: 0;
  }
`;

const MenuButton = styled.button`
  line-height: 0;
  background-color: transparent;
  user-select: none;
  cursor: pointer;

  & .material-icons {
    color: var(--grayish-violet);
    font-size: 33px;
  }

  & .material-icons:hover {
    color: var(--very-dark-blue);
    font-size: 33px;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export { Container, MenuWrapper, MenuButton };
