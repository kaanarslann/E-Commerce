import BestSellerProduct from "./BestSellerProduct";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { createProductUrl } from "../utils/createProductUrl";

export default function BestSellerProducts() {
    
    const bestSellers = useSelector((state) => state.product.bestSellers.products);
    const visibleProducts = bestSellers.slice(0,8);
    const categories = useSelector((state) => state.product.categories);

    
    return (
        <section className="bestseller-products-main bg-[#FAFAFA] flex flex-col py-12 gap-6 md:px-35 items-center">
            <h3 className="text-[#252B42] text-2xl font-bold leading-8 text-center md:text-start">BESTSELLER PRODUCTS</h3>
            <div className="bestseller-products">
                <div className="border border-t-[#ECECEC] border-r-0 border-l-0 border-b-0 w-96 mx-auto mb-6 md:w-[65rem] md:mx-0"></div>
                <div className="bestseller-products-row grid grid-cols-1 md:grid-cols-4 gap-7 items-center md:flex-row pb-6">
                    {Array.isArray(bestSellers) && visibleProducts.map((product, index) => (
                        <Link key={product.id} to={createProductUrl(product, categories)} className={`${index >= 4 ? "hidden md:block" : ""}`}>
                            <BestSellerProduct product={product}/>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}