import bestsellerProductImg from "../assets/bestsellerproduct.jpg";

export default function BestSellerProduct() {
    return (
        <section className="bestseller-product-main flex flex-col">
            <div className="bestseller-product-image">
                <img src={bestsellerProductImg} className="w-[21.75rem] h-[26.688rem] md:w-[15rem] md:h-[17.5rem]"/>
            </div>
            <div className="bestseller-product-info flex flex-col px-[1.563rem] pt-[1.563rem] pb-[2.188rem] gap-2.5 bg-white">
                <h5 className="text-[#252B42] text-base font-bold leading-6">Graphic Design</h5>
                <span className="text-[#737373] text-sm font-bold leading-6">English Department</span>
                <div className="prices flex py-[0.313rem] px-[0.188rem] gap-[0.313rem] text-base leading-6 font-bold">
                    <span className="text-[#BDBDBD]">$16.48</span>
                    <span className="text-[#23856D]">$6.48</span>
                </div>
            </div>
        </section>
    );
}