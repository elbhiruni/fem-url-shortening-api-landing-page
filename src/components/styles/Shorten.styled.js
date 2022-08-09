import styled from "styled-components";
import bgShortenMobile from "../../images/bg-shorten-mobile.svg";
import bgShortenDesktop from "../../images/bg-shorten-desktop.svg";

export const StyledSection = styled.section`
  margin-top: 88px;

  @media (min-width: 768px) {
    margin-top: 68px;
  }
`;

export const Container = styled.div`
  position: relative;
  padding-top: 80px;

  @media (min-width: 768px) {
    padding-top: 84px;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 160px;
  max-height: 182px;
  padding: 24px;
  border-radius: 10px;
  background-color: var(--dark-violet);
  background-image: url(${bgShortenMobile});
  background-repeat: no-repeat;
  background-position: top right;
  position: absolute;
  top: 0;
  left: 24px;
  right: 24px;

  @media (min-width: 768px) {
    height: 168px;
    background-image: url(${bgShortenDesktop});
    background-size: cover;
    padding: 52px 64px;
  }

  @media (min-width: 1280px) {
    left: 100px;
    right: 100px;
  }

  @media (min-width: 1440px) {
    left: 168px;
    right: 168px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 14px;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;

  & i {
    color: var(--red);
    font-size: 14px;

    @media (min-width: 768px) {
      font-size: 16px;
      position: absolute;
      left: 64px;
      top: 120px;
    }
  }
`;

export const InputLink = styled.input`
  width: 100%;
  height: 48px;
  padding: 18px 16px;
  border-radius: 4px;
  color: var(--very-dark-blue);
  font-weight: 700;

  @media (min-width: 768px) {
    height: 64px;
    font-size: 20px;
  }

  &:not(:focus):invalid {
    color: var(--red);
    border: 3px solid var(--red);

    &::placeholder {
      color: var(--red);
    }
  }
`;

export const ShortenWrapper = styled.div`
  background-color: var(--grayish);
  padding-top: 80px;
  padding-left: 24px;
  padding-right: 24px;

  @media (min-width: 768px) {
    padding-top: 84px;
  }

  @media (min-width: 1280px) {
    padding-left: 100px;
    padding-right: 100px;
  }

  @media (min-width: 1440px) {
    padding-left: 168px;
    padding-right: 168px;
  }
`;
