import { useState } from "react";
import AddressInfo from "../components/AddressInfo";
import CreditCardInfo from "../components/CreditCardInfo";

export default function CreateOrder() {

    const [step, setStep] = useState(1);
    
    return (
        <section className="create-order-main">
            <div className="create-order-content">
                <div className="content-nav flex justify-center gap-5">
                    <div className="nav-address">
                        <h2 className={step === 1 ? "text-orange-400" : "text-black"}>Address Information</h2>
                    </div>
                    <div className="nav-creditcard">
                        <h2 className={step === 2 ? "text-orange-400" : "text-black"}>Credit Card Information</h2>
                    </div>
                </div>
                <div className="create-order-container">
                    {step === 1 && <AddressInfo setStep={setStep} />}
                    {step === 2 && <CreditCardInfo setStep={setStep}/>}
                </div>
            </div>
            <div className="create-order-summary"></div>
        </section>
    ); 
}