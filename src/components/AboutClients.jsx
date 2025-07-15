import Clients from "../components/Clients";

export default function AboutClients() {
    return (
        <section className="about-clients-main bg-[#FAFAFA] py-20">
            <div className="about-clients-content flex flex-col gap-6">
                <div className="about-clients-texts flex flex-col gap-7 items-center">
                    <h2 className="text-[2.5rem] text-[#252B42] leading-[3.125rem] font-bold w-3xs text-center md:w-full">Big Companies Are Here</h2>
                    <p className="text-[#737373] text-sm leading-5 w-2xs text-center md:w-sm">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
                    </p>
                </div>
                <div className="about-logos">
                    <Clients />
                </div>
            </div>
        </section>
    );
}