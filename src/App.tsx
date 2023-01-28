import { useState } from "react";
import styled, { css } from "styled-components";
import Expdate from "./assets/Expdate";
import CardNumber from "./assets/CardNumber";
import HeaderBackground from "./assets/HeaderBackground";
import SubmitButton from "./assets/SubmitButton";
import CardName from "./assets/CardName";
import ThankyouCard from "./assets/ThankyouCard";
import ContinueButton from "./assets/ContinueButton";

function App() {
  const [cardName, setCardName] = useState("");
  const [cardHolderNumberValue, setCardHolderNumberValue] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [cvcYes, setCvcYes] = useState(false);
  const [expDateYes, setExpDateYes] = useState(false);
  const [allGood, setAllGood] = useState(false);
  const [val, setVal] = useState("");

  return (
    <div>
      <Main>
        <HeaderBackground
          CardHolderName={cardName}
          CardHolderNumberValue={cardHolderNumberValue}
          month={month}
          year={year}
          cvc={cvc}
        />

        {allGood ? (
          <>
            <ThankyouContainer>
              <ThankyouCard />
              <ContinueButton />
            </ThankyouContainer>
          </>
        ) : (
          <InputContainer>
            <CardName
              placeholder={"e.g. Jane Appleseed"}
              value={cardName}
              setCardName={setCardName}
            />
            <CardNumber
              inputPlaceholder={"e.g. 1234 5678 9123 0000"}
              setCardHolderNumberValue={setCardHolderNumberValue}
            />

            <Expdate
              month={month}
              setMonth={setMonth}
              value={month}
              year={year}
              setYear={setYear}
              setCvc={setCvc}
              cvc={cvc}
              cvcYes={cvcYes}
              expDateYes={expDateYes}
            />

            <SubmitButton
              setIsClicked={setIsClicked}
              setCvcYes={setCvcYes}
              setExpDateYes={setExpDateYes}
              expDateYes={expDateYes}
              setAllGood={setAllGood}
              cvc={cvc}
              month={month}
              year={year}
              cardHolderNumberValue={cardHolderNumberValue}
              cardName={cardName}
            />
          </InputContainer>
        )}
      </Main>
    </div>
  );
}

export default App;

const Main = styled.div`
  width: 375px;
  background-color: #f2f2f2;
  margin: 0 auto;
`;

const InputContainer = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  gap: 20px;
  margin-top: 25px;
`;

const ThankyouContainer = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  gap: 20px;
  margin-top: 25px;
`;
