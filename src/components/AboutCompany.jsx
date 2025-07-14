import aboutCompany from "../assets/aboutcompany.png";

export default function AboutCompany() {
    
    return(
        <section className="about-company-main mt-5">
            <div className="about-company-content flex flex-col items-center gap-5 md:flex-row md:gap-20 md:justify-center">
                <div className="about-company-text flex flex-col gap-10 items-center py-20 md:items-start">
                    <h5 className="hidden md:block text-[#252B42] text-base font-bold leading-6">ABOUT COMPANY</h5>
                    <h2 className="text-[#252B42] text-[2.5rem] leading-[3.125rem] font-bold">ABOUT US</h2>
                    <h4 className="text-[#737373] text-xl leading-[1.875rem] w-2xs text-center md:text-start md:w-130">We know how large objects will act, but things on a small scale just do not act that way.</h4>
                    <button className="bg-[#23A6F0] text-white text-sm leading-[1.375rem] font-bold py-[0.938rem] px-10 rounded-[0.313rem] w-48 h-[3.25rem] hover:cursor-pointer">Get Quote Now</button>
                </div>
                <div className="about-company-img w-[24.188rem] h-[27.5rem] md:w-[39.5rem] md:h-[38.25rem]">
                    <img src={aboutCompany} />
                </div>
            </div>
        </section>
    );
}