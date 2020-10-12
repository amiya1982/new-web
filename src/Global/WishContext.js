import React, { createContext, useReducer } from "react";

import { WishReducer } from "./WishReducer";

export const WishContext = createContext();

const WishContextProvider = (props) => {
    const [wcart, dispatch] = useReducer(WishReducer, {
        wishshoppingCart: [],
        wqty: 0,
    });
    return (
        <WishContext.Provider value={{ ...wcart, dispatch }}>
            {props.children}
        </WishContext.Provider>
    );
};

export default WishContextProvider;
