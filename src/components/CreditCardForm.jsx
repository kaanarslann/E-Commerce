import { addCard, editCard } from "../store/thunks/clientThunks";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function CreditCardForm({card}) {
    
    const {register, handleSubmit, reset, formState: {isValid}} = useForm({defaultValues: {
            card_no: "",
            expire_month: "",
            expire_year: "",
            name_on_card: "",
        }, mode: "onChange", reValidateMode: "onChange", shouldUnregister: true});

        const dispatch = useDispatch();

    const onSubmit = (data) => {
        if(card) {
            const payload = {...data, id: card.id};
            dispatch(editCard(payload));
        } else {
            dispatch(addCard(data));
        }
    }

    useEffect(() => {
        if(card) {
            reset(card);
        } else {
            reset();
        }
    }, [card, reset]);
    
    return(
        <section className="address-form-main flex flex-col items-center gap-5 mt-10">
            <div className="form-title flex items-start">
                <h2 className="text-[#252B42] text-2xl font-bold leading-[3.125rem] text-center">Create New Credit Card</h2>
            </div>
            <div className="credit-card-form">
                <form className="flex flex-col gap-2 md:gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-no flex flex-col">
                        <label htmlFor="card_no" className="text-lg leading-6">Credit Card No</label>
                        <input {...register("card_no", {required: "Please enter card number"})} id="card_no" name="card_no" type="text" placeholder="1234123412341234" className=" bg-gray-50 border rounded-[5px] w-[20rem] h-[2.5rem] md:w-[25rem]"/>
                    </div>
                    <div className="card-month flex flex-col">
                        <label htmlFor="expire_month" className="text-lg leading-6">Expire Month</label>
                        <input {...register("expire_month", {required: "Please enter expire month"})} id="expire_month" name="expire_month" type="text" placeholder="XX" className=" bg-gray-50 border rounded-[5px] w-[20rem] h-[2.5rem] md:w-[25rem]"/>
                    </div>
                    <div className="card-year flex flex-col">
                        <label htmlFor="expire_year" className="text-lg leading-6">Expire Year</label>
                        <input {...register("expire_year", {required: "Please enter expire year"})} id="expire_year" name="expire_year" type="text" placeholder="XXXX" className=" bg-gray-50 border rounded-[5px] w-[20rem] h-[2.5rem] md:w-[25rem]"/>
                    </div>
                    <div className="card-name flex flex-col">
                        <label htmlFor="name_on_card" className="text-lg leading-6">Name On The Card</label>
                        <input {...register("name_on_card", {required: "Please enter name on the card"})} id="name_on_card" name="name_on_card" type="text" placeholder="John Doe" className=" bg-gray-50 border rounded-[5px] w-[20rem] h-[2.5rem] md:w-[25rem]"/>
                    </div>
                    <div className="card-button">
                        <button className="bg-[#23A6F0] disabled:bg-blue-300 disabled:hover:cursor-not-allowed text-white p-1.5 rounded w-[7rem] h-[3rem] hover:cursor-pointer text-center flex items-center justify-center md:w-[9rem] md:h-[4rem]" disabled={!isValid}>{card ? "Edit Card" : "Create Card"}</button>
                    </div>
                </form>
            </div>
        </section>
    );
}