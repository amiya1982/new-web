import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaReact,
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaMapMarkerAlt,
  FaPhone,
  FaRegEnvelope,
} from "react-icons/fa";
//
export const FooterContainer = styled.div`
  display: flex;
  min-height: 250px;
  position: relative;
  margin-top: 50px;
  background-color: #272723;
`;
//
export const FooterSubContainer = styled.div`
  display: flex;
  font-size: 1rem;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px 50px 0 50px;
`;
//
export const FooterContent = styled.div`
  display: flex;
  font-size: 1rem;
  width: 100%;
  padding: 30px 0 0 0;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;
//
export const FooterInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  padding-left: 15px;
  padding-right: 15px;
  &:first-child {
    padding-left: 0;
  }
  @media screen and (max-width: 960px) {
    padding: 0;
  }
`;
//
export const FootFull = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
//
export const FootLogo = styled(Link)`
  color: #bde4f2;
  justify-itself: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  line-height: 16px;
`;
//
export const FootIcon = styled(FaReact)`
  margin-right: 0.5rem;
`;
export const FacebookIcon = styled(FaFacebookSquare)`
  margin-right: 0.5rem;
`;
export const TwitterIcon = styled(FaTwitterSquare)`
  margin-right: 0.5rem;
`;
export const YouTubeIcon = styled(FaYoutubeSquare)`
  margin-right: 0.5rem;
`;
export const InstagramIcon = styled(FaInstagramSquare)`
  margin-right: 0.5rem;
`;
export const FootLocationIcon = styled(FaMapMarkerAlt)`
  margin-right: 0.5rem;
`;
export const FootPhoneIcon = styled(FaPhone)`
  margin-right: 0.5rem;
`;
export const FootEmailIcon = styled(FaRegEnvelope)`
  margin-right: 0.5rem;
`;
//
export const FootCopy = styled.div`
  display: flex;
  margin-top: 15px;
  font-size: 0.8rem;
  color: #fff;
`;
//
export const FootAddress = styled.div`
  display: flex;
  margin-top: 15px;
  font-size: 0.9rem;
  line-height: 15px;
  color: #fff;
`;
//
export const FootMenu = styled.ul`
  text-align: left;
`;
//
export const FootItem = styled.li`
  display: block;
  width: 100%;
`;
//
export const FootLinks = styled(Link)`
  display: inline-flex;
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 0;
  font-size: 0.9rem;
  line-height: 15px;
  &:hover {
    color: #bde4f2;
  }
`;
//
