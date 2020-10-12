import React, { useContext } from "react";
import { FaRegSurprise } from "react-icons/fa";
import { WishContext } from "../../Global/WishContext";
import {
    WishWrapper, 
    WishContainer, 
    WishContent, 
    WishRow, 
    WishBox, 
    WishContentTitle,
    WishBoxImage,
    WishBoxName,
    WishBoxButtons,
    EmptyBox,
} from "./WishList.elements";

const WishCart = () => {
    const { wishshoppingCart, wqty, dispatch : wishDispatch } = useContext(WishContext);
    return (
        <WishWrapper>
            <WishContainer>
                <WishContent>
                    <WishRow>
                        <WishContentTitle>
                            <h4>
                                My Wishlist has&nbsp;({wqty})&nbsp;
                                {wishshoppingCart.length > 1 ? "Items" : "Item"}
                            </h4>
                        </WishContentTitle>
                        {wishshoppingCart.length > 0 ? (
                      wishshoppingCart.map((wcart) => (
                        <WishBox key={wcart.id}>
                          <WishBoxImage>
                              <img
                                      src={wcart.image}
                                      alt={wcart.name}
                                      className="img-responsive"
                                    />
                            </WishBoxImage>
                            <WishBoxName>{wcart.name}</WishBoxName>
                            <WishBoxName>${wcart.price}.00</WishBoxName>
                            <WishBoxButtons>
                              <button
                                type="button"
                                title="Add to Cart"
                                className="btn btn-default">
                                View
                              </button>
                              <button
                                      className="btn btn-danger"
                                      onClick={() =>
                                        wishDispatch({
                                          type: "DELETE_WISH",
                                          id: wcart.id,
                                          wcart,
                                        })
                                      }
                                    >
                                      Remove
                                    </button>
                            </WishBoxButtons>
                        </WishBox>
                      ))
                    ) : (
                      
                          <EmptyBox><FaRegSurprise className="empty-icon" />Your Wishlist is empty!</EmptyBox>
                        
                    )}
                    </WishRow>
                </WishContent>
            </WishContainer>
        </WishWrapper>
    )
}
 export default WishCart;