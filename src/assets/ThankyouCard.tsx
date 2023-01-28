import React from "react";
import styled from "styled-components";
import completedpic from "../images/icon-complete.svg";

export default function ThankyouCard() {
  return (
    <ThankyouContainer>
      <img src={completedpic} alt="" />
      <ThankYouText>THANK YOU!</ThankYouText>
      <ThankYouParagraph>We’ve added your card details</ThankYouParagraph>
    </ThankyouContainer>
  );
}

const ThankyouContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ThankYouText = styled.h1`
  font-family: "Space Grotesk", monospace;
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  /* identical to box height */

  text-align: center;
  letter-spacing: 3.42222px;

  /* Deep Violet */

  color: #21092f;
`;

const ThankYouParagraph = styled.p`
  font-family: "Space Grotesk", monospace;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height */

  text-align: center;

  /* Purplish Grey */

  color: #8f8694;
`;
