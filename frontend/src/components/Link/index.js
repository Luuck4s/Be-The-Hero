import React from "react";

import { RegisterLink } from "./styles";

export default function Link({ to, children, effect = "true" }) {
  return (
    <RegisterLink effect={effect} to={to}>
      {children}
    </RegisterLink>
  );
}
