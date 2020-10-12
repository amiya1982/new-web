import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin:0;
  padding:0;
}

html {
font-family: 'Source Sans Pro', sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
  margin: 80px 0 0 0;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #444;
  text-align: left;
  background-color: #fff;
}

ul, ol{
  margin:0;
  padding:0;
  list-style: none;
}

h1, h2, h3, h4, h5{
  margin:0;
  padding:0;
  display: block;
  margin-bottom: .5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: inherit;
  width:100%;
}
h1{
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 2.5rem;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
  @media screen and (max-width:960px){
    font-size: 2.8rem;
    font-weight: 300;
    line-height: 1.2;
  }
}
h5{font-size: 1.12rem;}
h4{
  font-family: 'Oswald', sans-serif;
  font-size: 1.3rem;
  line-height: 4rem;
  margin:0;
  padding:0;
  display: block;
}
h6{
  font-family: 'Oswald', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 3rem;
  text-transform: uppercase;
  margin:0;
  padding:0;
  display: block;
}
.footheader{color: #bde4f2}
.img-responsive{width:100%; height: auto;}
.primary-btn{
  margin-top: 1em;
    padding: 8px 16px;
    border-color: #08c #08c #069;
    border-radius: 3px !important;
    background-color: #08c;
    color: #fff;
    font-size: 16px;
    text-decoration:none;
    text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
}
.bg-red{
  background: #e27c7c;
}
.bg-green{
  background: #0cc485 !important;
}
.text-red{
  color: #e27c7c;
}
.text-green{
  color: #0cc485;
}
.text-light-blue{
  color: #008acc !important;
}
.btn{
  border:1px solid transparent;
  background-color: #fff;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  white-space: nowrap;
  padding: 0.3rem 1rem;
  border-radius: 0.2rem;
  letter-spacing: 1px;
}
.btn-default{
  background-color: #fff;
  border-color: #ddd;
  color: #333;
  &:hover{
    background-color: #08c;
    color: #fff;
    border-color: #08c;
  }
}
.btn-blue{
  background-color: #08c;
  border-color: #08c;
  color: #fff;
}
.btn-danger-alt{
  background-color: #fff;
  border-color: #ddd;
  color: #e27c7c;
  &:hover{
    background-color: #ed5348;
    color: #fff;
    border-color: #ed5348;
  }
}
.btn-danger{
  background-color: #e27c7c;
  border-color: #e27c7c;
  color: #fff;
  letter-spacing: 0.5px;
  &:hover{
    background-color: #ed5348;
    color: #fff;
    border-color: #ed5348;
  }
  
}
.border-left-0{
  border-left: 0;
}
.mr-2{margin-right: 0.3rem;}
.font-40{
  float: left;
  width: 36px;
  height: 36px;
  margin-right:10px;
  color: #0e2f40;
}
.font-36{
  float: left;
  width: 36px;
  height: 36px;
  color: #0e2f40;
  cursor: pointer;
}
.cart-input{
  padding: 0.5rem;
  border: 1px solid #ddd;
  width: 50px;
  border-radius: 0.23rem;
  text-align: center;
  font-weight: 600;
  font-family: 'Oswald', sans-serif;
  font-size: 1rem;
}
.tr-border-bottom{
  border-bottom: 1px solid #ddd;
}
.empty-cart-td{
  font-weight: 600;
  font-family: 'Oswald', sans-serif;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  min-height: 190px;
  display: flex;
}
.total-price-td{
  text-align: right;
  font-weight: 600;
  font-family: 'Oswald', sans-serif;
  font-size: 1rem;
}
.cart-btn-td{
  text-align: right;
}
.react-reveal{
  -webkit-box-flex: 0;
  -ms-flex: 0 0 25%;
  flex: 0 0 25%;
  max-width: 25%;
  padding: 15px;
}
@media screen and (max-width: 960px) {
  .react-reveal{
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    max-width: 100%;
    padding: 15px;
  }  
}
.product-row .react-reveal{
  -webkit-box-flex: 0;
  -ms-flex: 0 0 16.6666% !important;
  flex: 0 0 16.6666% !important;
  max-width: 16.6666% !important;
  padding 0 !important;
}
@media screen and (max-width: 960px) {
  .product-row .react-reveal{
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100% !important;
    flex: 0 0 100% !important;
    max-width: 100% !important;
    padding: 0 !important;
  }  
}
.Navcart-link:hover .cart-tooltip{
  display: block;
}
.Navwish-link:hover .wish-tooltip{
  display: block;
}
.empty-icon{
  margin-right: 10px;
  font-size: 44px;
}
.title-border-middle .section-title {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
}
.title-border-middle>.section-title {
  overflow: hidden;
  margin-bottom: 24px;
}
.section-title {
  color: #313131;
}
.section-title {
  font-size: 16px;
  line-height: 1.4;
  font-weight: 700;
  margin-bottom: 1.25em;
  letter-spacing: 1px;
}
.slider-title {
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 1px;
  font-weight: 700;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 1.25rem;
  position: relative;
}
.text-center {
  text-align: center!important;
}

.title-border-middle .section-title .line-l {
  height: 1px;
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-width: 10%;
  background: rgba(0,0,0,0.06);
}
.title-border-middle .section-title .inline-title {
  padding: 0 12px;
}
.title-border-middle>.section-title .inline-title {
  position: relative;
}
.title-border-middle>.section-title .inline-title:before {
  content: '';
  position: absolute;
  top: 50%;
  width: 1200px;
  right: calc(100% + 20px);
}
.title-border-middle .section-title .line-r {
  height: 1px;
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-width: 10%;
  background: rgba(0,0,0,0.06);
}
`;

export const Container = styled.div`
  z-index: 1;
  display: flex;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 50px;
  padding-right: 50px;

  @media screen and (max-width: 960px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

//
export const Button = styled.button`
  border-radius: 0.25rem;
  background-color: ${({ primary }) => (primary ? "#4B59F7" : "#0467FB")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  $:hover {
    transition: all 0.3s ease-out;
    background-color: #fff;
    background-color: ${({ primary }) => (primary ? "#0467FB" : "#4B59F7")};
  }
`;

export default GlobalStyle;
