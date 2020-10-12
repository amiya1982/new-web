import React from "react";

import {
  FooterContainer,
  FooterSubContainer,
  FooterInfoBox,
  FootFull,
  FootLogo,
  FootIcon,
  FacebookIcon,
  TwitterIcon,
  YouTubeIcon,
  InstagramIcon,
  FootCopy,
  FootMenu,
  FootItem,
  FootLinks,
  FootAddress,
  FootLocationIcon,
  FootPhoneIcon,
  FootEmailIcon,
  FooterContent,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubContainer>
        <FooterContent>
          <FooterInfoBox>
            <FootFull>
              <FootLogo to="/">
                <FootIcon />
                REACT STORE
              </FootLogo>
              <FootAddress>
                <FootLocationIcon />
                894 Evergreen St. Sidney,
                <br />
                OH 45365
              </FootAddress>
              <FootAddress>
                <FootPhoneIcon />
                000-000-0000
              </FootAddress>
              <FootAddress>
                <FootEmailIcon />
                ultrademo@demo.com
              </FootAddress>
              <FootCopy>&copy; 2020. All rights reserved.</FootCopy>
            </FootFull>
          </FooterInfoBox>
          <FooterInfoBox>
            <h5 className="footheader">Features</h5>
            <FootMenu>
              <FootItem>
                <FootLinks to="/">Cool stuff</FootLinks>
              </FootItem>
              <FootItem>
                <FootLinks to="/">Random feature</FootLinks>
              </FootItem>
              <FootItem>
                <FootLinks to="/">Team feature</FootLinks>
              </FootItem>
              <FootItem>
                <FootLinks to="/">Stuff for developers</FootLinks>
              </FootItem>
            </FootMenu>
          </FooterInfoBox>
          <FooterInfoBox>
            <h5 className="footheader">Resources</h5>
            <FootMenu>
              <FootItem>
                <FootLinks to="/">Resource</FootLinks>
              </FootItem>
              <FootItem>
                <FootLinks to="/">Resource name</FootLinks>
              </FootItem>
              <FootItem>
                <FootLinks to="/">Another resource</FootLinks>
              </FootItem>
              <FootItem>
                <FootLinks to="/">Final resource</FootLinks>
              </FootItem>
            </FootMenu>
          </FooterInfoBox>
          <FooterInfoBox>
            <h5 className="footheader">About</h5>
            <FootMenu>
              <FootItem>
                <FootLinks to="/">Team</FootLinks>
              </FootItem>
              <FootItem>
                <FootLinks to="/">Locations</FootLinks>
              </FootItem>
              <FootItem>
                <FootLinks to="/">Privacy</FootLinks>
              </FootItem>
              <FootItem>
                <FootLinks to="/">Terms</FootLinks>
              </FootItem>
            </FootMenu>
          </FooterInfoBox>
          <FooterInfoBox>
            <h5 className="footheader">Follow Us:</h5>
            <FootMenu>
              <FootItem>
                <FootLinks to="/">
                  <FacebookIcon />
                  Facebook
                </FootLinks>
              </FootItem>
              <FootItem>
                <FootLinks to="/">
                  <TwitterIcon />
                  Twitter
                </FootLinks>
              </FootItem>
              <FootItem>
                <FootLinks to="/">
                  <YouTubeIcon />
                  YouTube
                </FootLinks>
              </FootItem>
              <FootItem>
                <FootLinks to="/">
                  <InstagramIcon />
                  Instagram
                </FootLinks>
              </FootItem>
            </FootMenu>
          </FooterInfoBox>
        </FooterContent>
      </FooterSubContainer>
    </FooterContainer>
  );
};

export default Footer;
