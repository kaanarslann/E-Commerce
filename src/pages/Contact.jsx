import contact from "../assets/contact.jpg";

export default function Contact() {
    return (
        <section className="contact-main py-28 bg-cover bg-center w-[25.875rem] h-[29.25rem] mx-auto mt-8 md:w-full md:h-full md:pt-40 md:pb-28" style={{backgroundImage: `url(${contact})`}}>
            <div className="contact-content flex flex-col items-center gap-8 mx-16 md:mx-48 md:gap-9">
                <h2 className="text-[#252B42] text-[2.5rem] font-bold leading-[3.125rem] text-center">Questions & Answers</h2>
                <p className="text-[#737373] text-sm font-medium leading-5 text-center md:w-[23rem]">
                    Problems trying to resolve the conflict between the two major realms of Classical physics: 
                </p>
                <h6 className="text-[#23A6F0] text-sm font-bold leading-6 hover:cursor-pointer text-center">CONTACT US</h6>
            </div>
        </section>
    );
}