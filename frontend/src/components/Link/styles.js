import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const RegisterLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: #41414d;
  font-size: 1rem;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;

  ${props =>
    props.effect &&
    css`
      :hover {
        opacity: 0.8;
      }
    `}

  svg {
    margin-right: 8px;
  }
`;
