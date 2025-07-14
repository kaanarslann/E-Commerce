import AboutCompany from "../components/AboutCompany";
import AboutContent from "../components/AboutContent";
import AboutStats from "../components/AboutStats";

export default function About() {
    return (
        <section className="about-main">
            <AboutCompany />
            <AboutContent />
            <AboutStats />
        </section>
    );
    
}