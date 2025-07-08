import BestSellerProducts from "../components/BestSellerProducts";
import Product from "../components/Product";
import ProductDescription from "../components/ProductDescription";

export default function ProductDetail() {
    return (
        <section className="product-detail">
            <Product />
            <ProductDescription />
            <BestSellerProducts />
        </section>
    );
}