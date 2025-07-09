import BestSellerProducts from "../components/BestSellerProducts";
import Product from "../components/Product";
import ProductDescription from "../components/ProductDescription";
import Clients from "../components/Clients";

import { useEffect } from "react";

export default function ProductDetail() {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <section className="product-detail">
            <Product />
            <ProductDescription />
            <BestSellerProducts />
            <Clients />
        </section>
    );
}