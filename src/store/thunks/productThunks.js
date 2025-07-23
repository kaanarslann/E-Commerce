import axiosInstance from "../../utils/axiosInstance";
import { setCategories, setProductList, setTotal, setFetchState } from "../actions/productActions";

export const getCategories = () => async (dispatch, getState) => {
    const {categories} = getState().product;

    if(categories.length > 0)
        return categories;

    try {
        const response = await axiosInstance.get("/categories");
        dispatch(setCategories(response.data));
    } catch (error) {
        console.error("Category fetch failed: ", error);
    }
};

export const getProducts = () => async (dispatch, getState) => {
    const {productList, fetchState} = getState().product;

    if(productList.length > 0 || fetchState == "FETCHING") {
        return;
    }

    try {
        dispatch(setFetchState("FETCHING"));

        const response = await axiosInstance.get("/products");
        const {products, total} = response.data;
        dispatch(setTotal(total));
        dispatch(setProductList(products));
        dispatch(setFetchState("FETCHED"));
    } catch (error) {
        console.error("Product fetch failed: ", error);
        dispatch(setFetchState("FAILED"));
    }
};