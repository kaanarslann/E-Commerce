import {Link} from "react-router-dom"
import { ChevronRight } from "lucide-react";
import ShopCategory from "./ShopCategory";

export default function ShopCategories() {
    return (
        <section className="bg-[#FAFAFA] py-6">
            <div className="title-links flex flex-col items-center gap-7 mb-5 md:mb-2 md:flex-row md:justify-between md:py-6 md:px-[12rem]">
                <h3 className="text-2xl leading-8 font-bold text-[#252B42]">Shop</h3>
                <div className="links flex gap-[0.938rem] py-2.5 text-sm font-bold leading-6">
                    <Link to="/" className="text-[#252B42]">Home</Link>
                    <ChevronRight color="#BDBDBD"/>
                    <Link to="/shop" className="text-[#737373]">Shop</Link>
                </div>
            </div>
            <div className="categories flex flex-col md:flex-row gap-3.5 md:gap-[0.938rem] md:pb-12 md:px-44 md:justify-center">
                <ShopCategory />
                <ShopCategory />
                <ShopCategory />
                <ShopCategory />
                <ShopCategory />
            </div>
        </section>
    );
}