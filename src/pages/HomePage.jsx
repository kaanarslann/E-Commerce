import Clients from "../components/Clients";
import FeaturedProducts from "../components/FeaturedProducts";
import ProductCards from "../components/ProductsCards";
import Services from "../components/Services";
import ShopCards from "../components/ShopCards";

export default function HomePage() {
    return (
        <>
            <Clients />
            <ShopCards />
            <ProductCards />
            <FeaturedProducts />
            <Services />
        </>
    );
}