import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaReact } from "react-icons/fa";
import { Container } from "../../globalStyles";
//
export const Topnav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  font-size: 1.2rem;
  position: fixed;
  z-index: 9999;
  width: 100%;
  max-width: 100%;
  background-color: #fff;
  top: 0;
  left: 0;
  border-bottom: 1px solid #bde4f2;
`;
//
export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  ${Container}
`;
//
export const NavLogo = styled(Link)`
  color: #008acc;
  justify-itself: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-transform: uppercase;
`;
//
export const NavIcon = styled(FaReact)`
  margin-right: 0.5rem;
`;
//
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    font-size: 1.8rem;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
  }
`;
//
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background-color: #101522;
  }
`;
//
export const NavItem = styled.li`
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;
//
export const NavLinks = styled(Link)`
  color: #444;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 100%;
  &:hover {
    color: #008acc;
    transition: all 0.3s ease;
  }
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }
`;
//
export const NavButton = styled.div``;
//
export const Count = styled.span`
  position: absolute;
  margin-top: -35px;
  color: #fff;
  background-color: #ed5348;
  border-radius: 0.25rem;
  padding: 0 5px;
  line-height: 15px;
  font-size: 0.8rem;
  margin-left: 15px;
  font-weight: 600;
`;
//
export const Button = styled.div`
  background-color: #fff;
  color: #333333;
  cursor: pointer;
  border-radius: 0.25rem;
  padding: 0.3rem 1rem;
`;
//
export const Tooltip = styled.span`
position: absolute;
background-color: #fff;
color: #333333;
cursor: pointer;
border-radius: 0.25rem;
padding: 0.2rem 0.5rem;
font-size: 0.9rem;
box-shadow: 0 0 3px rgba(0,0,0,0.35);
top: 64px;
display: none;
`;
//
export const NavSearch = styled.div``;