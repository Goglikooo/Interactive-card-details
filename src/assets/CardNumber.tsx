import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ErrorMessage from "./ErrorMessage";

interface Props {
  inputPlaceholder: number | string;
  setCardHolderNumberValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputHeading(props: Props) {
  const { inputPlaceholder, setCardHolderNumberValue } = props;
  const [val, setVal] = useState("");

  let isnum = /([a-z]|[A-Z])/.test(val); // checks if card number containes only numbers. if error - error message

  const onChange = (e: any) => {
    setCardHolderNumberValue(cc_format(val));
    setVal(e.target.value);
  };

  useEffect(() => {
    setCardHolderNumberValue(cc_format(val));
  }, [val]);

  function cc_format(value: any) {
    const v = value
      .replace(/\s+/g, "")
      .replace(/[^0-9]/gi, "")
      .substr(0, 16);
    const parts = [];

    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substr(i, 4));
    }

    return parts.length > 1 ? parts.join(" ") : value;
  }

  return (
    <CardNumber>
      <InputName>Card Number</InputName>
      <InputData
        placeholder={`${inputPlaceholder}`}
        type="Text"
        required
        value={cc_format(val)}
        onChange={onChange}
      />
      {isnum ? (
        <ErrorMessage msg={"Wrong format, numbers only"} />
      ) : (
        <Hidden>Wrong format, numbers only</Hidden>
      )}
    </CardNumber>
  );
}

const Hidden = styled.div`
  font-family: "Space Grotesk", monospace;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  /* line-height: 15px; */
  margin-top: 7px;
  margin: 0;
  padding: 0;
  /* Red */

  color: #ff5050;

  visibility: hidden;
`;

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
