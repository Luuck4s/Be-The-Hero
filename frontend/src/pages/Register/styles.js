import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 930px) {
    height: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 930px) {
    flex-direction: column;
    justify-content: center;
    padding: 70px;
  }

  @media (max-width: 650px) {
    padding: 50px;
  }
`;

export const Section = styled.section`
  width: 100%;
  max-width: 380px;

  @media (max-width: 930px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 450px;

    a {
      margin: 5% 0 5% 0;
    }
  }

  @media (max-width: 650px) {
    max-width: 100%;
  }
`;

export const Image = styled.img`

  @media (max-width: 650px) {
    width: 80%;
  }

  @media (max-width: 500px) {
    width: 100%;
    margin-top: 50px;
  }
  
`;

export const Title = styled.h1`
  margin: 64px 0 32px;
  font-size: 2rem;
`;

export const Text = styled.p`
  font-size: 1rem;
  color: #737380;
  line-height: 32px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;

  input {
    margin-top: 8px;
  }

  @media (max-width: 650px) {
    max-width: 100%;
  }
`;

export const InputGroup = styled.div`
  display: flex;

  input + input {
    margin-left: 8px;
  }
`;
