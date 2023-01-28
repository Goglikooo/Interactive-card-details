import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setCvcYes: React.Dispatch<React.SetStateAction<boolean>>;
  setExpDateYes: React.Dispatch<React.SetStateAction<boolean>>;
  expDateYes: boolean;
  setAllGood: React.Dispatch<React.SetStateAction<boolean>>;
  cvc: string | number;
  month: string | number;
  year: string | number;
  cardHolderNumberValue: string;
  cardName: string;
}

export default function SubmitButton(props: Props) {
  const {
    setIsClicked,
    setCvcYes,
    setExpDateYes,
    expDateYes,
    setAllGood,
    cvc,
    month,
    year,
    cardHolderNumberValue,
    cardName,
  } = props;

  return (
    <Submit
      onClick={() => {
        setIsClicked(true);
        setCvcYes(true);

        setExpDateYes(true);
        if (
          cvc.toString().length >= 3 &&
          month.toString().length >= 2 &&
          year.toString().length >= 2 &&
          cardHolderNumberValue.length >= 19 &&
          cardName != ""
        ) {
          setAllGood(true);
        }
      }}
    >
      Confirm
    </Submit>
  );
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
