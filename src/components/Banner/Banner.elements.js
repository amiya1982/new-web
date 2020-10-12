import styled from "styled-components";
import { Container } from "../../globalStyles";

export const JumbotronWrapper = styled.div`
  display: flex;
  background-color: #bde4f2;
`;
//
export const JumbotronContainer = styled(Container)`
  display: flex;
  ${Container}
`;
//
export const JumbotronSubContainer = styled.div`
  display: flex;
  width: 100%;
  background-image: url("./images/banner.png");
  background-position: center center;
  background-size: cover;
  height: 300px;
  color: #0e2f40;
  padding-left: 50px;
  padding-right: 50px;
  align-items: center;

  @media screen and (max-width: 960px) {
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
  }
`;
//
export const JumbotronContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
//
export const Header = styled.div`
  display: flex;
  width: 100%;
  margin: 0;
  padding: 0;
  justify-content: center;
`;
//
export const SubHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
//
export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
//
export const InfoWrapper = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-bottom: 2rem;
`;
//
export const InfoContainer = styled(Container)`
  display: flex;
  ${Container}
`;
//
export const InfoRow = styled.div`
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  width: 100%;
  max-width: 100%;
`;
//
export const InfoBox = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;  
`;
//
export const TitleBig = styled.div`
  display: flex;
  font-family: "Oswald", sans-serif;
  color: #0e2f40;
`;
//
export const TitleSmall = styled.div`
  display: flex;
  font-family: "Oswald", sans-serif;
  color: #0e2f40;
`;
//
