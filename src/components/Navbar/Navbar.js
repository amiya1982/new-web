import React, { useState, useContext } from "react";
import { WishContext } from "../../Global/WishContext";
import { CartContext } from "../../Global/CartContext";
import {
  FaBars,
  FaTimes,
  FaHeart,
  FaUserLock,
  FaCaretDown,
  FaShoppingBag,
  FaShopify,
} from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  Topnav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  Count,
  Tooltip,
  NavSearch,
} from "./Navbar.elements";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const { qty } = useContext(CartContext);
  const { wqty } = useContext(WishContext);
  return (
    <>
      <IconContext.Provider value={{ color: "#444" }}>
        <Topnav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon className="text-light-blue" />
              React Store
            </NavLogo>
            <NavSearch></NavSearch>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">
                  <FaShopify />
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/wishlist" className="Navwish-link">
                  {wqty > 0 ? <Count className="bg-green">{wqty}</Count> : <Count>{wqty}</Count>}
                  <FaHeart />
                  <Tooltip className="wish-tooltip">Your wishlist has ({wqty}) {wqty > 1 ? "Items" : "Item"}.</Tooltip>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="cart" className="Navcart-link">
                  {qty > 0 ? <Count className="bg-green">{qty}</Count> : <Count>{qty}</Count>}
                  <FaShoppingBag />
                  <Tooltip className="cart-tooltip">Your cart has ({qty}) {qty > 1 ? "Items" : "Item"}.</Tooltip>
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">
                  <FaUserLock className="mr-2" />
                  <FaCaretDown />
                </NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Topnav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
