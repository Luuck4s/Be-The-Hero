import React from "react";

import { ButtonElement } from "./styles";

export default function Button({ type = "submit", text }) {
  return <ButtonElement type={type}>{text}</ButtonElement>;
}
