import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 155px;
  background-color: white;
  font-size: 16px;

  border-radius: 6px;
  margin-top: 24px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 72px;
    font-size: 20px;
    padding: 16px 24px;
  }

  & p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const FullLinkWrap = styled.div`
  padding: 14px 16px;
  max-width: 100%;
  border-bottom: 1px solid var(--gray);

  @media (min-width: 1024px) {
    max-width: 545px;
    padding: 0;
    border: 0;
  }

  & p {
    color: var(--very-dark-blue);
  }
`;

export const ShortLinkWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 14px 16px;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 0;
  }

  & p {
    color: var(--cyan);
    @media (min-width: 1024px) {
      padding-right: 24px;
    }
  }

  & .copiedBtn {
    background-color: var(--dark-violet);
  }
`;
