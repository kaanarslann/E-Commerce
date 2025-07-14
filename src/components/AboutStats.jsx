export default function AboutStats() {
    return (
        <section className="about-stats-main">
            <div className="abaout-stats-content flex flex-col gap-[6.25rem] py-[6.25rem] items-center md:flex-row md:justify-center md:gap-[11rem] md:py-20">
                <div className="stat flex flex-col items-center">
                    <h1 className="text-[#252B42] text-[3.625rem] font-bold leading-20">15K</h1>
                    <h5 className="text-[#737373] text-base font-bold leading-6">Happy Customers</h5>
                </div>
                <div className="stat flex flex-col items-center">
                    <h1 className="text-[#252B42] text-[3.625rem] font-bold leading-20">150K</h1>
                    <h5 className="text-[#737373] text-base font-bold leading-6">Monthly Visitors</h5>
                </div>
                <div className="stat flex flex-col items-center">
                    <h1 className="text-[#252B42] text-[3.625rem] font-bold leading-20">15</h1>
                    <h5 className="text-[#737373] text-base font-bold leading-6">Countries Worldwide</h5>
                </div>
                <div className="stat flex flex-col items-center">
                    <h1 className="text-[#252B42] text-[3.625rem] font-bold leading-20">100+</h1>
                    <h5 className="text-[#737373] text-base font-bold leading-6">Top Partners</h5>
                </div>
            </div>
        </section>
    );
}