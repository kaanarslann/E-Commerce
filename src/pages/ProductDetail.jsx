import BestSellerProducts from "../components/BestSellerProducts";
import Product from "../components/Product";
import ProductDescription from "../components/ProductDescription";
import Clients from "../components/Clients";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductDetail } from "../store/thunks/productThunks";

export default function ProductDetail() {
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const {productId} = useParams();
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product.productDetail);
    const fetching = useSelector((state) => state.product.fetchState == "FETCHING");

    useEffect(() => {
        if(!product || product.id !== Number(productId)) {
            dispatch(getProductDetail(productId));
        }
    }, [productId])
    
    return (
        <section className="product-detail">
            {fetching ? (
                <div className="flex justify-center items-center py-10">
                    <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent"></div>
                </div>
            ) : (
            <div>
                <Product product={product}/>
                <ProductDescription />
                <BestSellerProducts />
                <Clients />
            </div>
            )}
        </section>
    );
}