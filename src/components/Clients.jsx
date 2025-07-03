import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHooli, faLyft, faPiedPiperHat, faStripe, faAws, faRedditAlien } from "@fortawesome/free-brands-svg-icons";

export default function Clients() {
    return (
        <section className="clients text-[#737373] flex flex-col md:flex-row items-center py-[3.125rem] md:px-[3.125rem] md:justify-center gap-[3.75rem] text-9xl">
            <FontAwesomeIcon icon={faHooli}/>
            <FontAwesomeIcon icon={faLyft} />
            <FontAwesomeIcon icon={faPiedPiperHat} />
            <FontAwesomeIcon icon={faStripe} />
            <FontAwesomeIcon icon={faAws} />
            <FontAwesomeIcon icon={faRedditAlien} />
        </section>
    );
}