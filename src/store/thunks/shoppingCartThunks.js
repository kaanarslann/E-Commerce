import {setCart} from "../actions/shoppingCartActions";

export const addToCart = (product) => async (dispatch, getState) => {
    const {cart} = getState().shoppingCart;
    const existingItem = cart.find((item) => item.product.id === product.id);

    if(existingItem) {
        const updatedCart = cart.map((item) => item.product.id === product.id ? {...item, count: item.count + 1} : item);
        dispatch(setCart(updatedCart));
    } else {
        const updatedCart = [...cart, {count: 1, checked: true, product}];
        dispatch(setCart(updatedCart));
    }
}; 