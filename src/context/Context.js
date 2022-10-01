import { createContext } from "react";
import { useReducer } from "react";
import { reducer } from "./Reducers";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, {
        cart: []
    });

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;