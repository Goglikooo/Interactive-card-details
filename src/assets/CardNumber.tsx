import React from "react";
import styled from "styled-components";

interface Props {
  inputPlaceholder: number | string;
  setCardHolderNumberValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputHeading(props: Props) {
  const { inputPlaceholder, setCardHolderNumberValue } = props;

  return (
    <CardNumber>
      <InputName>Card Number</InputName>
      <InputData
        placeholder={`${inputPlaceholder}`}
        type="number"
        maxLength={16}
        onChange={(e) => {
          setCardHolderNumberValue(e.target.value);
        }}
      />
    </CardNumber>
  );
}

const CardNumber = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Space Mono", monospace;
  font-weight: 500;
`;

const InputName = styled.p`
  font-family: "Space Mono", monospace;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #21092f;
  margin-bottom: 9px;
  box-sizing: border-box;
`;

const InputData = styled.input`
  font-family: "Space Mono", monospace;
  font-size: 18px;
  line-height: 23px;
  font-style: normal;
  color: #21092f;
  height: 45px;
  width: 327px;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid #dfdee0;
  padding: 11px;
  box-sizing: border-box;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    opacity: 0.25;
  }
`;
