import React, { useContext } from "react";
import Banner from "../Banner/Banner";
import Fade from "react-reveal/Fade";
import { ProductsContext } from "../../Global/ProductsContext";
import { WishContext } from "../../Global/WishContext";
import { CartContext } from "../../Global/CartContext";
import { FaShoppingBag, FaHeart } from "react-icons/fa";
import {
  ProductContainer,
  ProductThumbContainer,
  ProductImage,
  ProductRow,
  ProductContent,
  ProductName,
  ProductPrice,
  ProductStatus,
  CartButtons,
} from "./Product.elements";
const Products = () => {
  const { products } = useContext(ProductsContext);
  const { dispatch: cartDispatch } = useContext(CartContext);
  const { dispatch: wishDispatch } = useContext(WishContext);
  return (
    <>
      <Banner />
      <ProductContainer>
        <ProductRow className="product-row title-border-middle">
        <h2 className="section-title slider-title text-center">
          <span className="line-l"></span>
            <span className="inline-title">
              <span className="lang1">FEATURED PRODUCTS</span>
            </span>
          <span className="line-r">
          </span>
        </h2>
          {products.map((product) => (            
            <Fade bottom cascade key={product.id}>
              {product.status === "Hot" ? 
              <ProductThumbContainer>
                <ProductContent>
                <ProductStatus className="bg-red">
                    {product.status}
                  </ProductStatus>
                <ProductImage>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-responsive"
                  />
                </ProductImage>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>$&nbsp;{product.price}.00</ProductPrice>
                <CartButtons>
                  <button type="button" className="btn btn-default">
                    View
                  </button>
                  <button
                    type="button"
                    title="Add to Cart"
                    className="btn btn-default"
                    onClick={() =>
                      cartDispatch({
                        type: "ADD_TO_CART",
                        id: product.id,
                        product,
                      })
                    }
                  >
                    <FaShoppingBag />
                  </button>
                  <button
                    type="button"
                    title="Add to Wishlist"
                    className="btn btn-danger-alt"
                    onClick={() => 
                      wishDispatch({
                        type:"ADD_TO_WISHLIST", 
                        id: product.id, 
                        product,
                      })
                      }>
                    <FaHeart />
                  </button>
                </CartButtons>
                </ProductContent>
              </ProductThumbContainer> : ""}              
            </Fade>
          ))}
        </ProductRow>
      </ProductContainer>
    
      <ProductContainer>
        <ProductRow className="product-row title-border-middle">
        <h2 className="section-title slider-title text-center">
          <span className="line-l"></span>
            <span className="inline-title">
              <span className="lang1">NEW PRODUCTS</span>
            </span>
          <span className="line-r">
          </span>
        </h2>
          {products.map((product) => (            
            <Fade bottom cascade key={product.id}>
              {product.status === "New" ? 
              <ProductThumbContainer>
                <ProductContent>
                <ProductStatus className="bg-green">
                    {product.status}
                  </ProductStatus>
                <ProductImage>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-responsive"
                  />
                </ProductImage>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>$&nbsp;{product.price}.00</ProductPrice>
                <CartButtons>
                  <button type="button" className="btn btn-default">
                    View
                  </button>
                  <button
                    type="button"
                    title="Add to Cart"
                    className="btn btn-default"
                    onClick={() =>
                      cartDispatch({
                        type: "ADD_TO_CART",
                        id: product.id,
                        product,
                      })
                    }
                  >
                    <FaShoppingBag />
                  </button>
                  <button
                    type="button"
                    title="Add to Wishlist"
                    className="btn btn-danger-alt"
                    onClick={() => 
                      wishDispatch({
                        type:"ADD_TO_WISHLIST", 
                        id: product.id, 
                        product,
                      })
                      }>
                    <FaHeart />
                  </button>
                </CartButtons>
                </ProductContent>
              </ProductThumbContainer> : ""}              
            </Fade>
          ))}
        </ProductRow>
      </ProductContainer>
    </>
  );
};

export default Products;
