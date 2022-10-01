import "./CartItem.css";
import { useState, useContext } from "react";
import { CartContext } from "../context/Context";

const CartItem = ({ product, qty }) => {
    const [itemCount, setItemCount] = useState(qty);

    const { dispatch } = useContext(CartContext);

    function removeItem() {
        dispatch({ type: "REMOVE_FROM_CART", payload: { product } })
    }

    function updateCart(prod, count) {
        setItemCount(count)
        dispatch({ type: "UPDARE_CART", payload: { product: prod, qty: count } })
    }

    return (
        <tr>
            <td className="cart-item-img">
                <span className="material-symbols-rounded" onClick={removeItem}>
                    close
                </span>
                <img src={product.thumbnail} alt="" />
            </td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>
                <label htmlFor="item-count"></label>
                <input type="number" id="item-count" min="1" defaultValue={qty} onChange={e => updateCart(product, e.target.value)} />
            </td>
            <td>${itemCount * product.price}</td>
        </tr>
    );
}

export default CartItem;