import React from "react";
import styled from "styled-components";

export default function SubmitButton() {
  return <Submit>Confirm</Submit>;
}

const Submit = styled.button`
  height: 53px;
  width: 327px;
  border-radius: 8px;
  background: #21092f;
  border-radius: 8px;
  font-family: "Space Mono", monospace;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
  margin-top: 28px;

  &:hover {
    background-color: #46205b;
    cursor: pointer;
  }
`;
