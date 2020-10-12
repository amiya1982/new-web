import React, { useContext } from "react";
import { CartContext } from "../../Global/CartContext";
import StripeCheckout from "react-stripe-checkout";
import {
  CartWrapper,
  CartContainer,
  CartContent,
  CartRow,
  CartLeftContainer,
  CartRightContainer,
  CartLeftContent,
  CartLeftContentBox,
  CartLeftContentBoxTR,
  CartLeftContentBoxTD,
  CartLeftContentBoxBODY,
  CartContentTitle,
} from "./Cart.elements";
import { FaPlusSquare, FaMinusSquare, FaRegSurprise } from "react-icons/fa";
const Cart = () => {
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext);
  const handleToken = (token) => {};
  return (
    <CartWrapper>
      <CartContainer>
        <CartContent>
          <CartRow>
            <CartLeftContainer>
              <CartContentTitle>
                <h4>
                  My Cart has&nbsp;({qty})&nbsp;
                  {shoppingCart.length > 1 ? "Items" : "Item"}
                </h4>
              </CartContentTitle>
              <CartLeftContent>
                <CartLeftContentBox style={{width: '100%'}}>
                  <CartLeftContentBoxBODY>
                    {shoppingCart.length > 0 ? (
                      shoppingCart.map((cart) => (
                        <CartLeftContentBoxTR
                          key={cart.id}
                          className="tr-border-bottom">
                          <CartLeftContentBoxTD style={{ width: "30%" }}>
                            <CartLeftContentBox>
                              <CartLeftContentBoxBODY>
                                <CartLeftContentBoxTR>
                                  <CartLeftContentBoxTD colSpan="3">
                                    <img
                                      src={cart.image}
                                      alt={cart.name}
                                      className="img-responsive"
                                    />
                                  </CartLeftContentBoxTD>
                                </CartLeftContentBoxTR>
                                <CartLeftContentBoxTR>
                                  <CartLeftContentBoxTD>
                                    <FaPlusSquare
                                      className="font-36"
                                      onClick={() =>
                                        dispatch({
                                          type: "INCREMENT",
                                          id: cart.id,
                                          cart,
                                        })
                                      }
                                    />
                                  </CartLeftContentBoxTD>
                                  <CartLeftContentBoxTD>
                                    <span className="cart-input">{cart.qty}</span>
                                  </CartLeftContentBoxTD>
                                  <CartLeftContentBoxTD>
                                    <FaMinusSquare
                                      className="font-36"
                                      onClick={() =>
                                        dispatch({
                                          type: "DECREMENT",
                                          id: cart.id,
                                          cart,
                                        })
                                      }
                                    />
                                  </CartLeftContentBoxTD>
                                </CartLeftContentBoxTR>
                              </CartLeftContentBoxBODY>
                            </CartLeftContentBox>
                          </CartLeftContentBoxTD>
                          <CartLeftContentBoxTD>
                            <CartLeftContentBox>
                              <CartLeftContentBoxBODY>
                                <CartLeftContentBoxTR>
                                  <CartLeftContentBoxTD>
                                    {cart.name}
                                  </CartLeftContentBoxTD>
                                </CartLeftContentBoxTR>
                                <CartLeftContentBoxTR>
                                  <CartLeftContentBoxTD>
                                    <h4>${cart.price * cart.qty}.00</h4>
                                  </CartLeftContentBoxTD>
                                </CartLeftContentBoxTR>
                                <CartLeftContentBoxTR>
                                  <CartLeftContentBoxTD>
                                    <button
                                      className="btn btn-danger"
                                      onClick={() =>
                                        dispatch({
                                          type: "DELETE",
                                          id: cart.id,
                                          cart,
                                        })
                                      }
                                    >
                                      Remove
                                    </button>
                                  </CartLeftContentBoxTD>
                                </CartLeftContentBoxTR>
                              </CartLeftContentBoxBODY>
                            </CartLeftContentBox>
                          </CartLeftContentBoxTD>
                        </CartLeftContentBoxTR>
                      ))
                    ) : (
                      <CartLeftContentBoxTR>
                        <CartLeftContentBoxTD
                          colSpan="2"
                          className="empty-cart-td"
                        >
                          <FaRegSurprise className="empty-icon" />Your Cart is empty!
                        </CartLeftContentBoxTD>
                      </CartLeftContentBoxTR>
                    )}
                    {shoppingCart.length > 0 ? (
                      <CartLeftContentBoxTR>
                        <CartLeftContentBoxTD
                          colSpan="2"
                          className="cart-btn-td"
                        >
                          <StripeCheckout
                            stripeKey="pk_test_51HaEu8JmcJ3sFWDx4TzAHwQMFKog3tynxHzvsXV1ezI7IhFBpFaP8c09VUp1f5r8AhmBZ69Mlxbhrd4U7wVPTHT200F722Dv0g"
                            token={handleToken}
                            billingAddress
                            shippingAddress
                            amount={totalPrice * 100}
                            name="Checkout"
                          >
                            <button className="btn btn-blue">Checkout</button>
                          </StripeCheckout>
                        </CartLeftContentBoxTD>
                      </CartLeftContentBoxTR>
                    ) : (
                      ""
                    )}
                  </CartLeftContentBoxBODY>
                </CartLeftContentBox>
              </CartLeftContent>
            </CartLeftContainer>
            
              <CartRightContainer>
                <CartContentTitle>
                  <h4>PRICE DETAILS</h4>
                </CartContentTitle>
              <CartLeftContent>
                {shoppingCart.length > 0 ? (
                <CartLeftContentBox style={{ width: '100%' }}>
                    <CartLeftContentBoxBODY>
                      <CartLeftContentBoxTR>
                        <CartLeftContentBoxTD>
                          Price&nbsp;({qty}&nbsp;
                          {shoppingCart.length > 1 ? "Items" : "Item"})
                        </CartLeftContentBoxTD>
                        <CartLeftContentBoxTD className="total-price-td">
                          $ {totalPrice}.00
                        </CartLeftContentBoxTD>
                      </CartLeftContentBoxTR>
                      <CartLeftContentBoxTR>
                        <CartLeftContentBoxTD>
                          Delivery Charges
                        </CartLeftContentBoxTD>
                        <CartLeftContentBoxTD className="total-price-td">
                          Free
                        </CartLeftContentBoxTD>
                      </CartLeftContentBoxTR>
                      <CartLeftContentBoxTR>
                        <CartLeftContentBoxTD>Total Price</CartLeftContentBoxTD>
                        <CartLeftContentBoxTD className="total-price-td">
                          $ {totalPrice}.00
                        </CartLeftContentBoxTD>
                      </CartLeftContentBoxTR>
                    </CartLeftContentBoxBODY>
                  </CartLeftContentBox>
                   ) : (
                  ""
                  )}
                </CartLeftContent>
              </CartRightContainer>
          </CartRow>
        </CartContent>
      </CartContainer>
    </CartWrapper>
  );
};
export default Cart;
