import BestSellerProducts from "../components/BestSellerProducts";
import Product from "../components/Product";
import ProductDescription from "../components/ProductDescription";
import Clients from "../components/Clients";

export default function ProductDetail() {
    return (
        <section className="product-detail">
            <Product />
            <ProductDescription />
            <BestSellerProducts />
            <Clients />
        </section>
    );
}