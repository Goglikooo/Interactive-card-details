import React from "react";
import styled from "styled-components";

interface Props {
  placeholder: string;
  value: string;
  setCardName: (value: React.SetStateAction<string>) => void;
}

export default function CardName(props: Props) {
  const { value, placeholder, setCardName } = props;

  return (
    <CardWrapper>
      <InputName>Cardholder Name</InputName>
      <InputData
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          setCardName(e.target.value);
        }}
      />
    </CardWrapper>
  );
}

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

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Space Mono", monospace;
  font-weight: 500;
  /* gap: 10px; */
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

  &::placeholder {
    opacity: 0.25;
  }
`;
