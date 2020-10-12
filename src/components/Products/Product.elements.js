import styled from "styled-components";
import { Container } from "../../globalStyles";

export const ProductContainer = styled(Container)`
  display: flex;
  margin-bottom: 2rem;
  ${Container}
`;
//
export const ProductRow = styled.div`
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;
//
export const ProductThumbContainer = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;

  @media screen and (max-width: 1024px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 33.3333333%;
    flex: 0 0 33.3333333%;
    max-width: 33.3333333%;
  }

  @media screen and (max-width: 768px) {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 33.3333333%;
    flex: 0 0 33.3333333%;
    max-width: 33.3333333%;
  }

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
export const ProductContent = styled.div`
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 30px;
`;
//
export const ProductImage = styled.div`
  padding: 15px;
  background-color: #efefef;
  border-bottom: 2px solid #ddd;
`;
//
export const ProductName = styled.div`
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
export const ProductPrice = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  justify-content: center;
  display: flex;
  font-size: 1.1rem;
  font-family: "Oswald", sans-serif;
  margin-top: 1rem;
`;
//
export const CartButtons = styled.div`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  justify-content: space-between;
  display: flex;
  margin-top: 1rem;
`;
//
export const ProductStatus = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.7rem;
  color: #fff;
  padding: 1px 5px;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
`;
//
