import TeamMember from "../components/TeamMember";

export default function Team() {
    return(
        <section className="team-main py-8 md:py-13">
            <div className="team-content flex flex-col items-center md:gap-6">
                <div className="team-title py-11 flex flex-col items-center w-[17rem] md:w-full md:gap-2.5">
                    <h2 className="text-[#252B42] text-[2.5rem] leading-[3.125rem] font-bold text-center">Meet Our Team</h2>
                    <p className="text-[#737373] text-sm leading-5 font-normal text-center md:w-[28rem]">
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
                    </p>
                </div>
                <div className="team-members flex flex-col gap-4 md:flex-row md:gap-12">
                    <div className="members-row flex flex-col gap-4 md:gap-8">
                        <TeamMember />
                        <TeamMember />
                        <TeamMember />
                    </div>
                    <div className="members-row flex flex-col gap-4 md:gap-8">
                        <TeamMember />
                        <TeamMember />
                        <TeamMember />
                    </div>
                    <div className="members-row flex flex-col gap-4 md:gap-8">
                        <TeamMember />
                        <TeamMember />
                        <TeamMember />
                    </div>
                </div>
            </div>
        </section>
    );
}