import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  month: string | number;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  value: string | number;
  year: string | number;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  cvc: string | number;
  setCvc: React.Dispatch<React.SetStateAction<string>>;
}

export default function Expdate(props: Props) {
  const { value, month, year, setMonth, setYear, cvc, setCvc } = props;

  return (
    <Container>
      <ExpDateHeader>
        <ExpDateP>Exp. Date (MM/YY)</ExpDateP>
        <ExpDateP>CVC</ExpDateP>
      </ExpDateHeader>

      <ExpDateInput>
        <MonthYearInput
          type="text"
          placeholder="MM"
          value={month}
          onChange={(e) => {
            setMonth(e.target.value);
          }}
        />
        <MonthYearInput
          type="number"
          placeholder="YY"
          value={year}
          onChange={(e) => {
            setYear(e.target.value);
          }}
        />
        <CVC
          type="number"
          placeholder="e.g. 123"
          value={cvc}
          onChange={(e) => {
            setCvc(e.target.value);
          }}
        />
      </ExpDateInput>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExpDateHeader = styled.div`
  display: flex;
  gap: 23px;
`;

const ExpDateInput = styled.div`
  display: flex;
  gap: 8px;
`;

const ExpDateP = styled.p`
  font-family: "Space Mono", monospace;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #21092f;
`;

const MonthYearInput = styled.input`
  height: 45px;
  width: 72px;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid #dfdee0;
  box-sizing: border-box;
  padding: 16px;
  font-family: "Space Mono", monospace;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #21092f;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::placeholder {
    opacity: 0.25;
  }
`;

const CVC = styled.input`
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  height: 45px;
  width: 164px;
  border-radius: 8px;
  padding: 16px;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #dfdee0;
  font-family: "Space Mono", monospace;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  color: #21092f;

  &::placeholder {
    opacity: 0.25;
  }
`;
