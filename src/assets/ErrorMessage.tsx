import React from "react";
import styled from "styled-components";

interface Props {
  msg: string;
}

export default function ErrorMessage(props: Props) {
  const { msg } = props;
  return <ErrorMessageText>{msg}</ErrorMessageText>;
}

const ErrorMessageText = styled.div`
  font-family: "Space Grotesk", monospace;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  margin-top: 7px;
  margin: 0;
  padding: 0;
  /* Red */

  color: #ff5050;
`;
