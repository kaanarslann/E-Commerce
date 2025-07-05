import category from "../assets/category.jpg";

export default function ShopCategory() {
    return (
        <section className="shop-category flex flex-col items-center">
            <div className="category w-[20.75rem] h-[18.75rem] md:w-[12.813rem] md:h-[13.938rem] bg-center bg-cover flex flex-col items-center justify-center text-white" style={{backgroundImage: `url(${category})`}}>
                <h5 className="text-base leading-6 font-bold">CLOTHS</h5>
                <h6 className="text-sm leading-6 font-bold">5 Items</h6>
            </div>
        </section>
    );
}