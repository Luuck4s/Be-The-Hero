import styled from "styled-components";

export const ButtonElement = styled.button`
  width: 100%;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  line-height: 60px;
  transition: filter 0.2s;

  :hover {
    filter: brightness(90%);
  }
`;
