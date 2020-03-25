import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;
  padding: 0 5% 0 5%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 930px) {
    flex-direction: column;
  }

  @media (max-width: 650px) {
    margin: 0;
  }
`;

export const Section = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;

  @media (max-width: 930px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Form = styled.form`
  margin-top: 100px;
`;

export const Image = styled.img`
  @media (max-width: 930px) {
    ${props =>
      props.logo &&
      css`
        margin: 5% 0 0 0;
      `}
  }

  @media (max-width: 650px) {
    width: 80%;
  }
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 32px;
`;
