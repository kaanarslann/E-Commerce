import ShopCategories from "../components/ShopCategories";
import ShopProductCards from "../components/ShopProductCards";
import Clients from "../components/Clients";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts, getProductsByCategory } from "../store/thunks/productThunks";
import { useParams } from "react-router-dom";

export default function ShopPage() {
    const dispatch = useDispatch();
    const {categoryId} = useParams();
    console.log("param:", categoryId);

    useEffect(() => {
        dispatch(getProducts());
    }, [])

    useEffect(() => {
        dispatch(getProductsByCategory(categoryId));
    }, [categoryId])

    
    return (
        <>
            <ShopCategories />
            <ShopProductCards />
            <Clients />
        </>
    );
}