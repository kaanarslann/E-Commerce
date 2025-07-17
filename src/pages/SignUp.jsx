import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {useHistory} from "react-router-dom";
import { toast } from "react-toastify";

export default function SignUp() {
    
    const [roles, setRoles] = useState([]);
    const {register, handleSubmit, watch, formState: {errors, isValid}} = useForm({mode: "all"});
    const selectedRole = watch("role_id");
    const history = useHistory();
    
    const axiosInstance = axios.create({
        baseURL: "https://workintech-fe-ecommerce.onrender.com",
    });

    useEffect(() => {
        axiosInstance.get("/roles")
        .then((response) => {
            setRoles(response.data);
        }).catch((error) => {
            console.error(error);
        })
    }, [])

    const onSubmit = (data) => {
        const roleId = Number(data.role_id);
        let payload;
        
        if(roleId == 2) {
            payload = {
                name: data.name,
                email: data.email,
                password: data.password,
                role_id: roleId,
                store: {
                    name: data.store_name,
                    phone: data.store_phone,
                    tax_no: data.store_tax_no,
                    bank_account: data.store_bank_account
                }
            };
        } else {
            payload = {
                name: data.name,
                email: data.email,
                password: data.password,
                role_id: roleId
            };
        }

        axiosInstance.post("/signup", payload)
        .then((response) => {
            toast.success("You need to click link in email to activate your account!");
            console.log(response);

            setTimeout(() => {
                history.goBack();
            }, 3000);
        }).catch((error) => {
            console.error("Error: ", error);
            console.log(payload);
            toast.error("An error has occured!");
        })
    };
    
    return (
        <section className="signup-main py-10">
            <div className="signup-title py-5">
                <h2 className="text-[#252B42] text-[2.5rem] font-bold leading-[3.125rem] text-center">Sign Up</h2>
            </div>
            <div className="signup-form flex flex-col items-center">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                    <div className="form-name flex flex-col">
                        <label htmlFor="name" className="text-lg leading-6">First Name</label>
                        <input {...register("name", {required: "Please enter a name", minLength: 3})} id="name" type="text" placeholder="John" className=" bg-gray-50 border rounded-[5px] w-[20rem] h-[2.5rem]"/>
                    </div>
                    <div className="form-email flex flex-col">
                        <label htmlFor="email" className="text-lg leading-6">Email</label>
                        <input {...register("email", {required: "Please enter an email", pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address!"
                        }})} id="email" type="email" placeholder="text@example.com" className=" bg-gray-50 border rounded-[5px] w-[20rem] h-[2.5rem]"/>
                        {errors.email && (
                            <p>{errors.email.message}</p>
                        )}
                    </div>
                    <div className="form-password flex flex-col">
                        <label htmlFor="password" className="text-lg leading-6">Password</label>
                        <input {...register("password", {required: "Please enter a password", pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                            message: "Upper/lower case and special characters are required."
                        }})} id="password" type="password" placeholder="Password" className=" bg-gray-50 border rounded-[5px] w-[20rem] h-[2.5rem]"/>
                        {errors.password && (
                            <p>{errors.password.message}</p>
                        )}
                    </div>
                    <div className="form-password flex flex-col">
                        <label htmlFor="passValid" className="text-lg leading-6">Password Validation</label>
                        <input {...register("validatePass", {
                            required: "Please enter your password again",
                            validate: value => value == watch("password") || "Password does not match!"
                        })} id="passValid" type="password" placeholder="Password again" className=" bg-gray-50 border rounded-[5px] w-[20rem] h-[2.5rem]"/>
                    </div>
                    <div className="form-roles flex flex-col">
                        <label htmlFor="roles" className="text-lg leading-6">Role</label>
                        <select {...register("role_id", {required: "Please select a role"})} id="roles" className=" bg-gray-50 border rounded-[5px] w-[20rem] h-[2.5rem]">
                            {roles.map(role => (
                                <option key={role.id} value={role.id}>{role.name}</option>
                            ))}
                        </select>
                    </div>
                    {selectedRole == 2 && (
                        <div className="form-store-info flex flex-col gap-5">
                            <div className="store-name flex flex-col">
                                <label htmlFor="storeName" className="text-lg leading-6">Store Name</label>
                                <input {...register("store_name", {required: "Please enter a store name", minLength: 3})} id="storeName" type="text" placeholder="ABC Store" className=" bg-gray-50 border rounded-[5px] w-[20rem] h-[2.5rem]"/>
                            </div>
                            <div className="store-phone flex flex-col">
                                <label htmlFor="storePhone" className="text-lg leading-6">Store Phone</label>
                                <input {...register("store_phone", {required: "Please enter your phone number",
                                    pattern: {
                                        value: /^(\+90|0)?5\d{2}\s?\d{3}\s?\d{2}\s?\d{2}$/,
                                        message: "Enter a valid Turkey phone number",
                                    }
                                })} id="storePhone" type="text" placeholder="+901234567890" className=" bg-gray-50 border rounded-[5px] w-[20rem] h-[2.5rem]"/>
                                {errors.storePhone && (
                            <p>{errors.storePhone.message}</p>
                        )}
                            </div>
                            <div className="store-tax flex flex-col">
                                <label htmlFor="storeTax" className="text-lg leading-6">Store Tax ID</label>
                                <input {...register("store_tax_no", {required: "Please enter your tax number",
                                    pattern: {
                                        value: /^T\d{4}V\d{6}$/,
                                        message: "Valid tax number format: TXXXXVXXXXXX",
                                    }
                                })} id="storeTax" type="text" placeholder="TXXXXVXXXXXX" className=" bg-gray-50 border rounded-[5px] w-[20rem] h-[2.5rem]"/>
                                {errors.storeTax && (
                            <p>{errors.storeTax.message}</p>
                        )}
                            </div>
                            <div className="store-bank flex flex-col">
                                <label htmlFor="storeBank" className="text-lg leading-6">Store Bank Account</label>
                                <input {...register("store_bank_account", {required: "Please enter your bank account",
                                    pattern: {
                                        value: /^TR\d{2}[0-9A-Z]{5}\d{1,16}$/,
                                        message: "Enter a valid IBAN",
                                    }
                                })} id="storeBank" type="text" placeholder="IBAN" className=" bg-gray-50 border rounded-[5px] w-[20rem] h-[2.5rem]"/>
                                {errors.storeBank && (
                            <p>{errors.storeBank.message}</p>
                        )}
                            </div>
                        </div>
                    )}
                    <div className="form-button flex justify-center pt-2">
                        <button disabled={!isValid} type="submit" className="bg-[#23A6F0] text-white p-1.5 rounded w-[7rem] h-[3rem] hover:cursor-pointer">Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
}