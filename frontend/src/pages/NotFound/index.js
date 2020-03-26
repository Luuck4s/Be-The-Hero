import React from "react";

import { Container, Title, Image } from "./styles";

import error from "../../assets/error.png";

import Button from "../../components/Button";
import Link from "../../components/Link";

export default function NotFound() {
  return (
    <Container>
      <Title>404 not found</Title>
      <Link effect={"false"} to="/">
        <Button type="button" text="Voltar para início" />
      </Link>
      <Image src={error} />
    </Container>
  );
}
