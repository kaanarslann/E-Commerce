import aboutVideo from "../assets/aboutvideo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function AboutVideo() {
    return (
        <section className="about-video-main mt-10">
            <div className="about-video-content flex justify-center relative">
                <div className="absolute top-[8.125rem] md:top-[15rem] text-[#23A6F0] text-6xl"><FontAwesomeIcon icon={faCirclePlay} /></div>
                <img src={aboutVideo} className="w-[19.188rem] h-[19.75rem] rounded-xl md:rounded-[1.25rem] object-cover object-center md:w-[61.813rem] md:h-[33.75rem]" />
            </div>
        </section>
    );
}