import "./Product.css";
import { useState, useContext } from "react";
import { CartContext } from "../context/Context";

const Product = ({ product }) => {
    const [itemCount, setItemCount] = useState("1");
    const { dispatch } = useContext(CartContext);

    return (
        <tr key={product.id}>
            <td>
                <img src={product.thumbnail} alt="" />
            </td>
            <td>{product.title}</td>
            <td>{product.rating}/5</td>
            <td>In Stock</td>
            <td>{product.price}</td>
            <td className="buy">
                <div className="buy-container">
                    <div className="count-input">
                        <label htmlFor="item-count"></label>
                        <input type="number" id="item-count" min="1" defaultValue={1} onChange={e => setItemCount(e.target.value)} />
                    </div>
                    <div className="row-cart">
                        <span className="material-symbols-rounded">
                            shopping_cart
                        </span>
                    </div>
                    <div className="cart-check">
                        <input type="checkbox" name="cart-select" value="" onChange={
                            e => {
                                if (e.target.checked) {
                                    dispatch({ type: "ADD_TO_CART", payload: { product, qty: itemCount } })
                                } else {
                                    dispatch({ type: "REMOVE_FROM_CART", payload: { product } })
                                }
                            }
                        } />
                    </div>
                </div>
            </td>
        </tr>
    );
}

export default Product;