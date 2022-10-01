export const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return { cart: [action.payload, ...state.cart] };
        case "REMOVE_FROM_CART":
            return { cart: state.cart.filter(c => c.product.id !== action.payload.product.id) };
        case "UPDARE_CART": {
            var updatedCart = [];
            state.cart.forEach(product => {
                if (product.product.id === action.payload.product.id) {
                    updatedCart.push({ product: product.product, qty: action.payload.qty })
                } else updatedCart.push(product)
            });
            return { cart: updatedCart };
        }

        default: return state;
    }
}