import ShopProductImage from "../assets/shopproduct.jpg";

export default function ShopProductCard({onClick}) {
    return (
        <section className="shop-product-card flex flex-col w-[21.75rem] h-[38.438rem] md:w-[15rem] md:h-[30.5rem] hover:cursor-pointer" onClick={onClick}>
            <div className="shop-product-image flex justify-center">
                <img src={ShopProductImage}/>
            </div>
            <div className="shop-product-details flex flex-col items-center gap-2.5 py-[1.563rem]">
                <h5 className="shop-product-title text-base font-bold leading-6 text-[#252B42]">Graphic Design</h5>
                <span className="shop-product-link text-sm font-bold leading-6 text-[#737373]">English Department</span>
                <div className="shop-product-price flex gap-[0.313rem]">
                    <h5 className="old-price text-base font-bold leading-6 text-[#BDBDBD]">$16.48</h5>
                    <h5 className="new-price text-base font-bold leading-6 text-[#23856D]">$6.48</h5>
                </div>
                <div className="colors flex gap-[0.38rem]">
                        <span className="bg-[#23A6F0] rounded-full w-4 h-4"></span>
                        <span className="bg-[#23856D] rounded-full w-4 h-4"></span>
                        <span className="bg-[#E77C40] rounded-full w-4 h-4"></span>
                        <span className="bg-[#252B42] rounded-full w-4 h-4"></span>
                    </div>
            </div>
        </section>
    );
}