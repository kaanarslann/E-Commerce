import { useState, useEffect } from "react";
import AddressForm from "./AddressForm";
import { useDispatch, useSelector } from "react-redux";
import { getAddress } from "../store/thunks/clientThunks";
import {Link} from "react-router-dom"
import { Plus, User, Smartphone } from "lucide-react";


export default function AddressInfo() {

    const dispatch = useDispatch();

    const addressList = useSelector((state) => state.client.addressList);

    useEffect(() => {
        dispatch(getAddress());
    }, [])

    return (
        <section className="address-info-main">
            <div className="address-list">
                <div className="address-new">
                    <button><Plus /><span>Add New Address</span></button>
                </div>
                <div className="saved-address-list">
                    {addressList.length > 0 && addressList.map((address) => (
                        <div key={address.id}>
                            <div className="address-title">
                                <div className="title-radio">
                                    <input type="radio" name={address.title} id="address-title"/>
                                    <label htmlFor="address-title">{address.title}</label>
                                </div>
                                <Link>Edit</Link>
                            </div>
                            <div className="address-container">
                                <div className="fullname-phone">
                                    <div className="fullname">
                                        <User />
                                        <h4>{address.name}</h4>
                                        <h4>{address.surname}</h4>
                                    </div>
                                    <div className="phone">
                                        <Smartphone />
                                        <h4>{address.phone}</h4>
                                    </div>
                                </div>
                                <div className="address-info">
                                    <h4>{address.city}</h4>
                                    <h4>{address.district}</h4>
                                    <h4>{address.neighborhood}</h4>
                                    <h4>{address.address}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="address-new">
                <AddressForm />
            </div>
        </section>
    );
}