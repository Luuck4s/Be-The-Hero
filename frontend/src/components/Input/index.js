import React from "react";

import { InputElement } from "./styles";

export default function Input({
  type = "text",
  placeholder,
  width = "100%",
  value,
  onChange
}) {
  return (
    <InputElement
      value={value}
      onChange={onChange}
      width={width}
      type={type}
      placeholder={placeholder}
    />
  );
}
