import memberImg from "../assets/memberimg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function AboutTeamMember() {
    return (
        <section className="about-team-member-main">
            <div className="member-content">
                <div className="member-img">
                    <img src={memberImg} className="w-[19.75rem] h-[14.438rem]"/>
                </div>
                <div className="member-details flex flex-col p-8 gap-2.5 items-center">
                    <h5 className="text-[#252B42] text-base font-bold leading-6">Username</h5>
                    <h6 className="text-[#737373] text-sm font-bold leading-6">Profession</h6>
                    <div className="member-socials flex py-2.5 gap-5 text-2xl">
                        <FontAwesomeIcon icon={faSquareFacebook} className="text-[#335BF5]"/>
                        <FontAwesomeIcon icon={faInstagram} className="text-[#E51F5A]"/>
                        <FontAwesomeIcon icon={faTwitter} className="text-[#21A6DF]"/>
                    </div>
                </div>
            </div>
        </section>
    );
}