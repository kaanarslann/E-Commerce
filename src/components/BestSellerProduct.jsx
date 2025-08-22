import bestsellerProductImg from "../assets/bestsellerproduct.jpg";
import { getOptimizedProductImg } from "../utils/getOptimizedProductImg";

export default function BestSellerProduct({product}) {
    return (
        <section className="bestseller-product-main flex flex-col">
            <div className="bestseller-product-image flex">
                <img src={getOptimizedProductImg(product?.images[0].url, 400)} className="w-[21.75rem] aspect-[21.75/26.688] md:w-[15rem] md:aspect-[15/17.5] object-cover"/>
            </div>
            <div className="bestseller-product-info flex flex-col px-[1.563rem] pt-[1.563rem] pb-[2.188rem] gap-2.5 bg-white">
                <h5 className="text-[#252B42] text-base font-bold leading-6 h-8">{product?.name}</h5>
                <span className="text-[#737373] text-sm font-bold leading-5 h-8 w-45 my-3">{product?.description}</span>
                <div className="prices flex py-[0.313rem] px-[0.188rem] gap-[0.313rem] text-base leading-6 font-bold">
                    <span className="text-[#BDBDBD]">${product?.price}</span>
                    <span className="text-[#23856D]">${(product?.price / 2).toFixed(2)}</span>
                </div>
            </div>
        </section>
    );
}