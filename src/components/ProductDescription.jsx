import {Link} from "react-router-dom";

import descriptionImg from "../assets/descriptionimg.jpg";
import { ChevronRight } from "lucide-react";

export default function ProductDescription() {
    return (
        <section className="product-description-main flex flex-col items-center">
            <div className="description-navbar my-5">
                <nav className="text-[#737373] text-sm font-bold leading-6 flex justify-between gap-10">
                    <Link>Description</Link>
                    <Link>Additional Information</Link>
                    <Link>Reviews <span className="text-[#23856D]">(0)</span></Link>
                </nav>
            </div>
            <div className="product-description flex flex-col md:flex-row md:items-center pt-6 pb-20 border border-t-[#ECECEC] border-l-0 border-r-0 border-b-0 md:gap-25">
                <div className="image ml-10 shadow w-[20.313rem] h-[17.625rem] md:w-[20.313rem] md:h-[23.875rem] bg-[#C4C4C433] rounded-[0.351rem]">
                    <img src={descriptionImg} className="rounded-[0.337rem] w-[20rem] md:w-[19.75] h-[17rem] md:h-[23.25rem] object-cover object-center"/>
                </div>
                <div className="description-texts flex flex-col py-6 gap-[1.875rem] mx-10 w-[20.75rem] h-[28.25rem] md:h-[26.688rem] md:py-5">
                    <h3 className="text-[#252B42] text-2xl font-bold leading-8">the quick fox jumps over</h3>
                    <p className="text-[#737373] text-sm leading-5">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.<br/><br/>
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.<br/><br/>
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                    </p>
                </div>
                <div className="description-lists flex flex-col mx-10 w-[20.75rem] h-[28.25rem] md:py-8 md:ml-[-2rem]">
                    <div className="list flex flex-col gap-7">
                        <h3 className="text-[#252B42] text-2xl font-bold leading-8">the quick fox jumps over</h3>
                        <ul className="text-[#737373] text-sm font-bold leading-6 list-none] flex flex-col gap-2.5 mb-7">
                            <li className="flex gap-2.5"><ChevronRight />the quick fox jumps over the lazy dog</li>
                            <li className="flex gap-2.5"><ChevronRight />the quick fox jumps over the lazy dog</li>
                            <li className="flex gap-2.5"><ChevronRight />the quick fox jumps over the lazy dog</li>
                            <li className="flex gap-2.5"><ChevronRight />the quick fox jumps over the lazy dog</li>
                        </ul>
                    </div>
                    <div className="list flex flex-col gap-7">
                        <h3 className="text-[#252B42] text-2xl font-bold leading-8">the quick fox jumps over</h3>
                        <ul className="text-[#737373] text-sm font-bold leading-6 list-none] flex flex-col gap-2.5">
                            <li className="flex gap-2.5"><ChevronRight />the quick fox jumps over the lazy dog</li>
                            <li className="flex gap-2.5"><ChevronRight />the quick fox jumps over the lazy dog</li>
                            <li className="flex gap-2.5"><ChevronRight />the quick fox jumps over the lazy dog</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}