import React from "react";
import { Paragraph } from "./styled";

const Message = ({ children, error }) => (
  <Paragraph error={error}>
    {children}
  </Paragraph>
)

export default Message;