import AboutTeamMember from "./AboutTeamMember";

export default function AboutTeam() {
    return (
        <section className="about-team-main mt-10">
            <div className="about-team-content flex flex-col items-center">
                <div className="about-team-text py-[2.813rem] flex flex-col items-center gap-2.5">
                    <h2 className="text-[2.5rem] text-[#252B42] leading-[3.125rem] font-bold w-3xs text-center md:w-full">Meet Our Team</h2>
                    <p className="text-[#737373] text-sm leading-5 w-2xs text-center md:w-[25rem]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className="about-team-members flex flex-col md:flex-row gap-7">
                    <AboutTeamMember />
                    <AboutTeamMember />
                    <AboutTeamMember />
                </div>
            </div>
        </section>
    );
}