import axiosInstance from "../../utils/axiosInstance";
import { setCategories } from "../actions/productActions";

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