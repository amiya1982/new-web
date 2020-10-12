import styled from "styled-components";
import { Container } from "../../globalStyles";

export const WishWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  min-height: 255px;
`;
export const WishContainer = styled(Container)`
  display: flex;
  ${Container}
`;
export const WishContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
`;
export const WishRow = styled.div`
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  width: 100%;
  max-width: 100%;
`;
export const WishBox = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 16.6666%;
  flex: 0 0 16.6666%;
  max-width: 16.6666%;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 30px;

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
export const WishRightContainer = styled.div`
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
export const WishLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0px 3px rgba(0, 0, 0, 0.35);
`;
//
export const WishContentTitle = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  padding-left: 15px;
  padding-right: 15px;
`;
//
export const WishBoxImage = styled.div`
  padding: 15px;
  background-color: #efefef;
  border-radius: 0.25rem;
`;
//
export const WishBoxName = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  justify-content: center;
  padding: 0.8rem 1rem 0 1rem;
  display: flex;
  font-size: 0.9rem;
  font-family: "Oswald", sans-serif;
`;
//
export const WishBoxButtons = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  justify-content: space-between;
  display: flex;
  margin-top: 1rem;
`;
//
export const EmptyBox = styled.div`
  font-family: "Oswald", sans-serif;
  display: flex;
  width: 100%;
  max-width: 100%;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 600;
`;
