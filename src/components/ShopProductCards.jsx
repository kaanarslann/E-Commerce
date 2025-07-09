import {useHistory} from "react-router-dom";
import { Grip, SlidersHorizontal } from "lucide-react"
import ShopProductCard from "./ShopProductCard"

export default function ShopProductCards() {
    
    const history = useHistory();

    const handleClick = () => {
        history.push("/product");
    }
    
    return (
        <section>
            <div className="filters flex flex-col md:flex-row md:justify-between py-6 md:px-[14.5rem] gap-6 items-center">
                <div className="info">
                    <h6 className="text-[#737373] text-sm font-bold leading-6">Showing all 12 results</h6>
                </div>
                <div className="view-buttons flex gap-[0.938rem] px-[0.063rem] items-center">
                    <h6 className="text-sm leading-6 font-bold text-[#737373]">Views:</h6>
                    <div className="dots border rounded-[0.313rem] border-[#ECECEC] p-[0.938rem] w-[2.875rem] h-[2.875rem] flex items-center">
                        <Grip/>
                    </div>
                    <div className="horizontal border rounded-[0.313rem] border-[#ECECEC] p-[0.938rem] w-[2.875rem] h-[2.875rem] flex items-center">
                        <SlidersHorizontal />
                    </div>
                </div>
                <div className="filter-options flex gap-[0.938rem]">
                    <select className="h-[3.125rem] w-[8.813rem] bg-[#F9F9F9] text-[#737373] text-sm leading-7 rounded-[0.313rem] border border-[#DDDDDD] text-center">
                        <option>Popularity</option>
                        <option>Newest</option>
                    </select>
                    <button className="bg-[#23A6F0] text-white text-center py-2.5 px-5 rounded-[0.313rem]">Filter</button>
                </div>
            </div>
            <div className="shop-product-card-container flex flex-col md:gap-12 md:py-12 items-center">
                <div className="shop-product-cards flex flex-col gap-[1.875rem] md:flex-row md:gap-[1.875rem]">
                    <ShopProductCard onClick={handleClick}/>
                    <ShopProductCard onClick={handleClick}/>
                    <ShopProductCard onClick={handleClick}/>
                    <ShopProductCard onClick={handleClick}/>
                </div>
                <div className="shop-product-cards md:flex gap-[1.875rem] md:flex-row md:gap-[1.875rem] hidden">
                    <ShopProductCard onClick={handleClick}/>
                    <ShopProductCard onClick={handleClick}/>
                    <ShopProductCard onClick={handleClick}/>
                    <ShopProductCard onClick={handleClick}/>
                </div>
                <div className="shop-product-cards md:flex flex-col gap-[1.875rem] md:flex-row md:gap-[1.875rem] hidden">
                    <ShopProductCard onClick={handleClick}/>
                    <ShopProductCard onClick={handleClick}/>
                    <ShopProductCard onClick={handleClick}/>
                    <ShopProductCard onClick={handleClick}/>
                </div>
            </div>
            <div className="page-buttons flex justify-center mb-6">
                <div className="buttons rounded-[0.421rem] w-[19.563rem] h-[4.625rem] text-sm font-bold leading-6 flex items-center">
                    <button className="bg-[#F3F3F3] text-[#BDBDBD] p-[1.563rem] rounded-tl-[0.421rem] rounded-bl-[0.421rem] border border-y-[#BDBDBD] hover:cursor-pointer">First</button>
                    <span className="text-[#23A6F0] py-[1.563rem] px-5 border border-x-[#E9E9E9] border-y-[#BDBDBD] hover:cursor-pointer">1</span>
                    <span className="text-[#23A6F0] py-[1.563rem] px-5 border border-x-[#E9E9E9] border-y-[#BDBDBD] hover:cursor-pointer">2</span>
                    <span className="text-[#23A6F0] py-[1.563rem] px-5 border border-x-[#E9E9E9] border-y-[#BDBDBD] hover:cursor-pointer">3</span>
                    <button className="text-[#23A6F0] p-[1.563rem] rounded-tr-[0.421rem] rounded-br-[0.421rem] border border-y-[#BDBDBD] border-x-[#BDBDBD] hover:cursor-pointer">Next</button>
                </div>
            </div>
        </section>
    )
}