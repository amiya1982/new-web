import styled from "styled-components";
import { Container } from "../../globalStyles";

export const NotFoundWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
`;
export const NotFoundContainer = styled(Container)`
  display: flex;
  min-height: 255px;
  text-align: center;
  align-items: center;
  ${Container}
`;
export const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
`;
export const TitleBig = styled.div`
  display: flex;
  font-family: "Oswald", sans-serif;
  color: #0e2f40;
  width: 100%;
  max-width: 100%;
`;
//
export const TitleSmall = styled.div`
  display: flex;
  font-family: "Oswald", sans-serif;
  color: #0e2f40;
  width: 100%;
  max-width: 100%;
  font-size: 25px !important;
  justify-content: center;
  text-transform: uppercase;
  margin-top: 25px;
`;
//
