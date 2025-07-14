export default function AboutContent() {
    return (
        <section className="about-content-main">
            <div className="about-content flex flex-col py-20 gap-[3.75rem] items-center md:flex-row md:justify-center md:gap-[15rem]">
                <div className="about-content-text-bold flex flex-col items-center gap-6 md:items-start">
                    <p className="text-[#E74040] text-sm leading-5">Problems trying</p>
                    <h3 className="text-[#252B42] text-2xl leading-8 font-bold w-64 text-center md:w-96 md:text-start">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h3>
                </div>
                <div className="about-content-text-thin">
                    <p className="text-[#737373] text-sm leading-5 w-72 md:w-[31rem]">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
                    </p>
                </div>
            </div>
        </section>
    );
}