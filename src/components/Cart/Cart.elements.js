import styled from "styled-components";
import { Container } from "../../globalStyles";

export const CartWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  min-height: 255px;
`;
export const CartContainer = styled(Container)`
  display: flex;
  ${Container}
`;
export const CartContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
`;
export const CartRow = styled.div`
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  width: 100%;
  max-width: 100%;
`;
export const CartLeftContainer = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 66.666667%;
  flex: 0 0 66.666667%;
  max-width: 66.666667%;
  padding-left: 15px;
  padding-right: 15px;

  @media screen and (max-width: 600px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media screen and (max-width: 500px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;
//
export const CartRightContainer = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 33.3333333%;
  flex: 0 0 33.3333333%;
  max-width: 33.3333333%;
  padding-left: 15px;
  padding-right: 15px;

  @media screen and (max-width: 600px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
  }

  @media screen and (max-width: 500px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
  }
`;
//
export const CartLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0px 3px rgba(0, 0, 0, 0.35);
  min-height: 190px;
`;
export const CartLeftContentBox = styled.table`
  margin: 0;
  padding: 0;
  border-collapse: collapse;
`;
export const CartLeftContentBoxTHEAD = styled.thead`
  margin: 0;
  padding: 0;
`;
export const CartLeftContentBoxBODY = styled.tbody`
  margin: 0;
  padding: 0;
`;

export const CartLeftContentBoxTR = styled.tr``;
export const CartLeftContentBoxTH = styled.th`
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  padding: 0.5rem;
`;
export const CartLeftContentBoxTD = styled.td`
  vertical-align: top;
  padding: 0.5rem 1rem;
`;
export const CartContentTitle = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
`;
