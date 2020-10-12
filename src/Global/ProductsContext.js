import React, { createContext, useState } from "react";

import prod1 from "../assets/prod1.png";
import prod2 from "../assets/prod2.png";
import prod3 from "../assets/prod3.png";
import prod4 from "../assets/prod4.png";
import prod5 from "../assets/prod5.png";
import prod6 from "../assets/prod6.png";
import prod7 from "../assets/prod7.png";
import prod8 from "../assets/prod8.png";
import prod9 from "../assets/prod9.png";
import prod10 from "../assets/prod10.png";
import prod11 from "../assets/prod11.png";
import prod12 from "../assets/prod12.png";

export const ProductsContext = createContext();

const ProductContextProvider = (props) => {
  const [products] = useState([
    { id: 1, name: "Apple Desktop", price: 300, image: prod1, status: "Hot" },
    {
      id: 2,
      name: "Windows Tablet",
      price: 150.0,
      image: prod2,
      status: "Hot",
    },
    {
      id: 3,
      name: "Apple iPhone 7",
      price: 250.0,
      image: prod3,
      status: "Hot",
    },
    {
      id: 4,
      name: "iBall CPU",
      price: 200.0,
      image: prod4,
      status: "Hot",
    },
    { id: 5, name: "Intext CPU", price: 375.0, image: prod5, status: "Hot" },
    { id: 6, name: "Apple iPad", price: 290.0, image: prod6, status: "Hot" },
    { id: 7, name: "Samsung S9", price: 180.0, image: prod7, status: "New" },
    { id: 8, name: "Bell Laptop", price: 330.0, image: prod8, status: "New" },
    { id: 9, name: "Intext CPU", price: 375.0, image: prod9, status: "New" },
    { id: 10, name: "Tommy CPU", price: 290.0, image: prod10, status: "New" },
    { id: 11, name: "Mobile S9", price: 180.0, image: prod11, status: "New" },
    { id: 12, name: "Laptop D1", price: 330.0, image: prod12, status: "New" },
  ]);
  return (
    <ProductsContext.Provider value={{ products: [...products] }}>
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductContextProvider;
