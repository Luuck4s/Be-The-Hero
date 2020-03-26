import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 5% 0 5%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 930px) {
    height: 100%;
    flex-direction: column;
  }

  @media (max-width: 650px) {
    margin: 0;
  }

  @media (max-width: 500px) {
    max-height: 100%;
  }
`;

export const Section = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;

  @media (max-width: 930px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 0;
  }
`;

export const Form = styled.form`
  margin-top: 100px;

  @media (max-width: 650px) {
    margin-left: 5%;
  }
`;

export const Image = styled.img`
  @media (max-width: 930px) {
    width: 50%;

    ${props =>
      props.logo &&
      css`
        margin: 5% 0 0 0;
        width: 40%;
      `}
  }

  @media (max-width: 650px) {
    width: 80%;

    ${props =>
      props.logo &&
      css`
        width: 60%;
      `}
  }

  @media (max-width: 500px) {
    width: 100%;
    margin-top: 50px;

    ${props =>
      props.logo &&
      css`
        width: 80%;
      `}
  }
`;

export const Title = styled.h1`
  font-size: 1.6rem;
  margin-bottom: 32px;
`;
