import productImage from "../assets/productImage.jpg";

export default function ProductCard({product}) {
    return (
        <section className="product-card flex flex-col md:w-[11.438rem] md:h-[25rem]">
            <div className="product-image flex justify-center">
                <img src={product?.images[0].url} className="object-center object-cover w-[183px] h-60"/>
            </div>
            <div className="product-details flex flex-col items-center gap-2.5 py-[1.563rem]">
                <h5 className="product-title text-base font-bold leading-6 text-[#252B42] h-8 text-center">{product?.name}</h5>
                <span className="product-link text-sm font-medium leading-5 text-[#737373] h-8 w-45 my-3 text-center">{product?.description}</span>
                <div className="product-price flex gap-1.5">
                    <h5 className="old-price text-base font-bold leading-6 text-[#BDBDBD]">${product?.price}</h5>
                    <h5 className="new-price text-base font-bold leading-6 text-[#23856D]">${(product?.price / 2).toFixed(2)}</h5>
                </div>
            </div>
        </section>
    );
}