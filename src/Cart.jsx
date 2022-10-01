import "./Cart.css"
import CartItem from "./components/CartItem";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./context/Context";
import { Link } from "react-router-dom";

const Cart = () => {
    const { state: { cart } } = useContext(CartContext);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let total = 0;
        cart.forEach(prod => total += prod.product.price * prod.qty);
        setTotal(total);

    }, [cart])

    return (
        <div className="cart">
            <table>
                <tbody>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                    {
                        cart.map((product, i) => {
                            return (
                                <CartItem product={product.product} qty={product.qty} key={i} />
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="cart-details">
                <div className="cart-title">
                    Cart Details
                </div>
                <span>Subtotal - ${total} </span>
                <span className="cart-total">Total - ${total}</span>
                <Link to="/cart-finish">
                    <button>PROCEED TO CHECKOUT</button>
                </Link>
            </div>
        </div>
    );
}

export default Cart;