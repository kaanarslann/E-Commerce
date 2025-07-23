import ShopCategories from "../components/ShopCategories";
import ShopProductCards from "../components/ShopProductCards";
import Clients from "../components/Clients";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../store/thunks/productThunks";

export default function ShopPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
    }, [])
    
    return (
        <>
            <ShopCategories />
            <ShopProductCards />
            <Clients />
        </>
    );
}