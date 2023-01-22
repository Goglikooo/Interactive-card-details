import React from "react";
import styled from "styled-components";
import Backgroundimage from "../images/bg-main-mobile.png";
import CardBack from "../images/bg-card-back.png";
import CardFront from "../images/bg-card-front.png";

interface Props {
  CardHolderName: string;
  CardHolderNumberValue: number | string;
  month: string;
  year: string;
  cvc: string;
}

export default function HeaderBackground(props: Props) {
  const { CardHolderName, CardHolderNumberValue, month, year, cvc } = props;
  return (
    <div>
      <HeaderBackgroundImage>
        <BgCardBack>
          <CVC>{cvc}</CVC>
        </BgCardBack>
        <BgCardFront>
          <CardHolderNumber>
            {CardHolderNumberValue
              ? CardHolderNumberValue
              : "0000 0000 0000 0000"}
          </CardHolderNumber>
          <CardHolderNameAndExpDate>
            <CardHolderNameStyle>
              {CardHolderName ? CardHolderName : "JANE APPLESEED"}
            </CardHolderNameStyle>
            <ExpDate>
              {month ? month : "00"}
              {year ? `/${year}` : "/00"}
            </ExpDate>
          </CardHolderNameAndExpDate>
        </BgCardFront>
      </HeaderBackgroundImage>
    </div>
  );
}

const CVC = styled.p`
  font-family: "Space Grotesk", monospace;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  text-align: right;
  letter-spacing: 1.28571px;
  text-transform: uppercase;

  margin-top: 72px;
  margin-right: 32px;

  /* White */

  color: #ffffff;
`;

const ExpDate = styled.div`
  font-family: "Space Grotesk", monospace;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  text-align: right;
  letter-spacing: 1.28571px;
  text-transform: uppercase;

  /* White */

  color: #ffffff;
`;

const CardHolderNameAndExpDate = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  box-sizing: border-box;
`;

const CardHolderNameStyle = styled.p`
  font-family: "Space Grotesk", monospace;
  font-style: normal;
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  letter-spacing: 1.28571px;
  text-transform: uppercase;

  /* White */

  color: #ffffff;
`;

const CardHolderNumber = styled.p`
  font-family: "Space Grotesk", monospace;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  margin-top: 84px;
  letter-spacing: 2.2px;

  color: #ffffff;
`;

const HeaderBackgroundImage = styled.div`
  background-image: url(${Backgroundimage});
  height: 240px;
  width: 375px;
  border-radius: 0px;
  position: relative;
`;

const BgCardBack = styled.div`
  background-image: url(${CardBack});
  background-repeat: no-repeat;
  background-size: cover;

  width: 286px;
  height: 157px;
  border-radius: 6px;
  position: absolute;
  top: 32px;
  left: 73px;
`;

const BgCardFront = styled.div`
  background-image: url(${CardFront});
  position: absolute;
  height: 157px;
  width: 286px;
  top: 123px;
  left: 15px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  color: white;
  flex-direction: column;
`;
