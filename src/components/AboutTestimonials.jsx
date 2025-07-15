import aboutTestimonials from "../assets/abouttestimonials.jpg";

export default function AboutTestimonails() {
    return (
        <section className="about-testimonails-main">
            <div className="about-testimonails-content md:flex">
                <div className="testimonails-texts text-white flex flex-col gap-6 items-center bg-[#2A7CC7] py-20 md:w-[70%] md:items-start md:pl-[12.188rem] md:py-28 md:justify-center">
                    <h5 className="text-base leading-6 font-bold">WORK WITH US</h5>
                    <h2 className="text-[2.5rem] leading-[3.125rem] font-bold w-3xs text-center md:w-full md:text-start">Now Let's Grow Yours</h2>
                    <p className="text-sm leading-5 w-3xs text-center md:w-[25rem] md:text-start">
                        The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th 
                    </p>
                    <button className="text-sm font-bold leading-[1.375rem] py-[0.938rem] px-10 border border-white rounded-[0.313rem]">Button</button>
                </div>
                <div className="testimonails-img hidden md:block object-contain object-center">
                    <img src={aboutTestimonials} className="w-[36.875rem] h-[35rem]"/>
                </div>
            </div>
        </section>
    );
}