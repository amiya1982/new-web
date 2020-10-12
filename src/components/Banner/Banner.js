import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

import {
  JumbotronWrapper,
  JumbotronContainer,
  JumbotronSubContainer,
  Header,
  SubHeader,
  JumbotronContent,
  ButtonContainer,
  InfoWrapper,
  InfoRow,
  InfoContainer,
  InfoBox,
  TitleSmall,
  TitleBig,
} from "./Banner.elements";

import {
  FaDollarSign,
  FaHeadphonesAlt,
  FaRegMoneyBillAlt,
  FaShippingFast,
} from "react-icons/fa";


const Banner = () => {
  return (
    <>
      <JumbotronWrapper>
        <JumbotronContainer>
          <JumbotronSubContainer>
            <JumbotronContent>
              <Header>
                <h6>Up To 50% OFF</h6>
              </Header>
              <SubHeader>
                <h1>Fashion Mega Sale</h1>
              </SubHeader>
              <ButtonContainer>
                <Link to="/" className="primary-btn">
                  Shop Now
                </Link>
              </ButtonContainer>
            </JumbotronContent>
          </JumbotronSubContainer>
        </JumbotronContainer>
      </JumbotronWrapper>
      <InfoWrapper>
        <InfoContainer>
          <InfoRow>
            <Fade left cascade>
              <InfoBox>
                <FaShippingFast className="font-40" />
                <TitleBig>FREE SHIPPING &amp; RETURN</TitleBig>
                <TitleSmall>Free shipping on all orders over $99.</TitleSmall>
              </InfoBox>
              <InfoBox>
                <FaDollarSign className="font-40" />
                <TitleBig>MONEY BACK GUARANTEE</TitleBig>
                <TitleSmall>100% money back guarantee.</TitleSmall>
              </InfoBox>
              <InfoBox>
                <FaRegMoneyBillAlt className="font-40" />
                <TitleBig>GUARANTEED CASH BACK</TitleBig>
                <TitleSmall>5% cashback on your first order.</TitleSmall>
              </InfoBox>
              <InfoBox>
                <FaHeadphonesAlt className="font-40" />
                <TitleBig>ONLINE SUPPORT 24/7</TitleBig>
                <TitleSmall>Lorem ipsum dolor sit amet.</TitleSmall>
              </InfoBox>
            </Fade>
          </InfoRow>
        </InfoContainer>
      </InfoWrapper>
    </>
  );
};

export default Banner;
