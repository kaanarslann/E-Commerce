import Clients from "../components/Clients";
import ProductCards from "../components/ProductsCards";
import ShopCards from "../components/ShopCards";

export default function HomePage() {
    return (
        <>
            <Clients />
            <ShopCards />
            <ProductCards />
        </>
    );
}