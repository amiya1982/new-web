import React from "react";
import GlobalStyle from "./globalStyles";
import { Navbar, Footer, Products, WishList, Cart, NotFound } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductContextProvider from "./Global/ProductsContext";
import WishContextProvider from "./Global/WishContext";
import CartContextProvider from "./Global/CartContext";

function App() {
  return (
    <ProductContextProvider>
        <WishContextProvider>
          <CartContextProvider>
            <Router>
              <GlobalStyle />
              <Navbar />
              <Switch>
                <Route path="/" exact component={Products} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/wishlist" exact component={WishList} />
                <Route component={NotFound} />
              </Switch>
              <Footer />
            </Router>
          </CartContextProvider>
        </WishContextProvider>
    </ProductContextProvider>
  );
}

export default App;
