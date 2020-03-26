import React from "react";
import { FiX } from "react-icons/fi";
import { Container, ModalElement, Title, Code } from "./styles";

export default function Modal({ code, hanldeClose }) {
  return (
    <Container>
      <ModalElement>
        <FiX size={20} color={"#e02041"} onClick={hanldeClose} />
        <Title>Seu id para Login:</Title>
        <Code>{code}</Code>
      </ModalElement>
    </Container>
  );
}
