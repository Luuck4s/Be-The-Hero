import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  width: 100%;
  height: 100%;
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
  box-shadow: 10px 10px 100px rgba(0, 0, 0, 0.1);

  svg {
    align-self: flex-end;
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  margin-top: 10px;
  margin-bottom: 30px;
  font-size: 1.8rem;
`;

export const Code = styled.p`
  font-size: 1.7rem;
  text-align: center;
  color: #e02041;
`;
