import memberImg from "../assets/member.png";

export default function TeamMember() {
    return (
        <section className="teammember-main">
            <div className="teammember-content flex gap-5">
                <div className="teammember-img w-[4.375rem] h-[4.75rem]">
                    <img src={memberImg} className="rounded-full" />
                </div>
                <div className="teammember-name flex flex-col gap-[0.313rem]">
                    <h4 className="text-[#252B42] text-xl font-normal leading-[1.875rem]">Jacob Jones</h4>
                    <p className="text-[#737373] text-sm font-normal leading-5">Mitsubishi</p>
                </div>
            </div>
        </section>
    );
}