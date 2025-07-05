import Clients from "../components/Clients";
import FeaturedPosts from "../components/FeaturedPosts";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import ProductCards from "../components/ProductsCards";
import Services from "../components/Services";
import ShopCards from "../components/ShopCards";

export default function HomePage() {
    return (
        <>
            <Hero />
            <Clients />
            <ShopCards />
            <ProductCards />
            <FeaturedProducts />
            <Services />
            <FeaturedPosts />
        </>
    );
}