import AboutCompany from "../components/AboutCompany";
import AboutContent from "../components/AboutContent";
import AboutStats from "../components/AboutStats";
import AboutTeam from "../components/AboutTeam";
import AboutVideo from "../components/AboutVideo";

export default function About() {
    return (
        <section className="about-main">
            <AboutCompany />
            <AboutContent />
            <AboutStats />
            <AboutVideo />
            <AboutTeam />
        </section>
    );
    
}