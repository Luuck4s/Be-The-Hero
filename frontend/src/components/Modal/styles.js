import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #ffffff99;
`;

export const ModalElement = styled.div`
  width: 100%;
  max-width: 500px;
  height: 200px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  z-index: 1;
  border-radius: 10px;
  border: 0.5px solid  #e02041;
  box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.1);

  svg {
    align-self: flex-end;
    cursor: pointer;
  }

  @media (max-width: 930px) {
    max-width: 400px;
  }

  @media (max-width: 500px) {
    max-width: 300px;
  }
`;

export const Title = styled.h1`
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 1.5rem;
`;

export const Code = styled.p`
  font-size: 1.7rem;
  text-align: center;
  color: #e02041;
`;
