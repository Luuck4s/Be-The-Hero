import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  a button{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9rem;
    width: 200px;
  }
`;

export const Title = styled.h1`
  font-size: 1.7rem;
  text-align: center;
  color: #e02041;
  margin: 5% 0 0 0;
`;

export const Image = styled.img`
  width: 50%;

  @media (max-width: 930px) {
    width: 70%;
  }

  @media (max-width: 650px) {
    width: 100%;
  }
`;

