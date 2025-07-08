import BestSellerProduct from "./BestSellerProduct";

export default function BestSellerProducts() {
    return (
        <section className="bestseller-products-main bg-[#FAFAFA] flex flex-col py-12 gap-6 md:pl-50">
            <h3 className="text-[#252B42] text-2xl font-bold leading-8 text-center md:text-start">BESTSELLER PRODUCTS</h3>
            <div className="bestseller-products">
                <div className="border border-t-[#ECECEC] border-r-0 border-l-0 border-b-0 w-96 mx-auto mb-6 md:w-[65rem] md:mx-0"></div>
                <div className="bestseller-products-row flex flex-col gap-7 items-center md:flex-row pb-6">
                    <BestSellerProduct />
                    <BestSellerProduct />
                    <BestSellerProduct />
                    <BestSellerProduct />
                </div>
                <div className="bestseller-products-row hidden md:flex gap-7 items-center">
                    <BestSellerProduct />
                    <BestSellerProduct />
                    <BestSellerProduct />
                    <BestSellerProduct />
                </div>
            </div>
        </section>
    );
}