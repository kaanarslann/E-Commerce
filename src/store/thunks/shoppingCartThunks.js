import {setCart} from "../actions/shoppingCartActions";
import { toast } from "react-toastify";

export const addToCart = (product) => async (dispatch, getState) => {
    const {cart} = getState().shoppingCart;
    const existingItem = cart.find((item) => item.product.id === product.id);

    if(existingItem) {
        const updatedCart = cart.map((item) => item.product.id === product.id ? {...item, count: item.count + 1} : item);
        dispatch(setCart(updatedCart));
        toast.success("The quantity of the product increased successfully.");
    } else {
        const updatedCart = [...cart, {count: 1, checked: true, product}];
        dispatch(setCart(updatedCart));
        toast.success("Product added to the cart successfully!");
    }
};

export const updateProductCount = (productId, newCount) => (dispatch, getState) => {
    const {cart} = getState().shoppingCart;
    const updatedCart = cart.map((item) => item.product.id === productId ? {...item, count: newCount} : item);
    dispatch(setCart(updatedCart));
};

export const deleteProduct = (productId) => (dispatch, getState) => {
    const {cart} = getState().shoppingCart;
    const updatedCart = cart.filter(item => item.product.id !== productId);
    dispatch(setCart(updatedCart));
};