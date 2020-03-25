import React from "react";
import { FiUserX } from "react-icons/fi";
import { Container, ModalElement, Title, Code } from "./styles";

export default function Modal({ code, hanldeClose }) {
  return (
    <Container>
      <ModalElement>
        <FiUserX size={20} color={"#00"} onClick={hanldeClose} />
        <Title>Seu id para Login:</Title>
        <Code>{code}</Code>
      </ModalElement>
    </Container>
  );
}
