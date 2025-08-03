import { useState } from "react";
import CreditCartForm from "../components/CreditCartForm";
import AddressInfo from "../components/AddressInfo";

export default function CreateOrder() {

    const [step, setStep] = useState(1);
    
    return (
        <section className="create-order-main">
            <div className="create-order-content">
                <div className="content-nav">
                    <div className="nav-address"></div>
                    <div className="nav-creditcard"></div>
                </div>
                <div className="create-order-container">
                    {step === 1 && <AddressInfo />}
                    {step === 2 && <CreditCartForm />}
                </div>
            </div>
            <div className="create-order-summary"></div>
        </section>
    ); 
}