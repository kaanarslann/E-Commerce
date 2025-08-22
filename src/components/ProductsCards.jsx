import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getBestSellers } from "../store/thunks/productThunks";
import {Link} from "react-router-dom";
import { createProductUrl } from "../utils/createProductUrl";

export default function ProductCards() {
    
    const dispatch = useDispatch();
    const bestSellers = useSelector((state) => state.product.bestSellers.products);
    const fetchState = useSelector((state) => state.product.fetchState);
    const categories = useSelector((state) => state.product.categories);

    useEffect(() => {
        if(!bestSellers || bestSellers.length === 0) {
            dispatch(getBestSellers());
        }
    }, [bestSellers, dispatch]);

    return (
        <section className="product-cards flex flex-col items-center mt-20">
            <div className="titles flex flex-col items-center gap-2.5">
                <h4 className="title-desktop hidden md:block text-xl font-normal leading-[1.875rem] text-[#737373]">Featured Products</h4>
                <h3 className="title text-2xl font-bold leading-8 text-[#252B42] w-[14.938rem] md:w-full text-center">BESTSELLER PRODUCTS</h3>
                <span className="subtitle text-sm font-normal leading-5 text-[#737373] w-[16.313rem] text-center md:hidden">Problems trying to resolve the<br/> conflict between</span>
                <span className="subtitle text-sm font-normal leading-5 text-[#737373] text-center hidden md:block">Problems trying to resolve the conflict between</span>
            </div>
            <div className="cards-container flex flex-col items-center mt-12 mb-5">
                {fetchState === "FETHING" ? (<div className="flex justify-center items-center py-10">
                        <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent"></div>
                    </div>) :(<div className="cards grid grid-cols-1 md:grid-cols-5 gap-[1.875rem] items-center">
                    {Array.isArray(bestSellers) && bestSellers.map((product, index) => (
                        <Link key={product.id} to={createProductUrl(product, categories)} className={`${index >= 5 ? "hidden md:block" : ""}`}>
                            <ProductCard product={product}/>
                        </Link>
                    ))}
                </div>)}
            </div>
            <Link className="text-[#23A6F0] text-sm font-bold leading-[1.375rem] border border-[#23A6F0] rounded-[0.313rem] w-[16rem] h-[3.25rem] hover:cursor-pointer flex items-center justify-center" to="/shop">LOAD MORE PRODUCTS</Link>
        </section>
    );
}