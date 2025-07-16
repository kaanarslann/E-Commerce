import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function SignUp() {
    
    const [roles, setRoles] = useState([]);
    const {register, handleSubmit, watch, formState: {errors, isValid}} = useForm({mode: "all"});
    const selectedRole = watch("role_id");
    
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
    
    return (
        <section className="signup-main">
            <div className="signup-title"></div>
            <div className="signup-form">
                <form>
                    <div className="form-name">
                        <label htmlFor="name">First Name</label>
                        <input {...register("name", {required: true, minLength: 3})} id="name" type="text" placeholder="John"/>
                    </div>
                    <div className="form-email">
                        <label htmlFor="email">Email</label>
                        <input {...register("email", {required: true, pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address!"
                        }})} id="email" type="email" placeholder="text@example.com"/>
                    </div>
                    <div className="form-password">
                        <label htmlFor="password">Password</label>
                        <input {...register("password", {required: true, pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                            message: "Password should be minimum 8 characters including numbers, upper case and special characters!"
                        }})} id="password" type="password" placeholder="Password"/>
                    </div>
                    <div className="form-password">
                        <label htmlFor="passValid">Password Validation</label>
                        <input {...register("validatePass", {
                            required: true,
                            validate: value => value == watch("password") || "Passwords does not match!"
                        })} id="passValid" type="password" placeholder="Password again"/>
                    </div>
                    <div className="form-roles">
                        <label htmlFor="roles">Role</label>
                        <select id="roles" defaultValue="customer">
                            <option value="">Select A Role</option>
                            {roles.map(role => (
                                <option key={role.id} value={role.id}>{role.name}</option>
                            ))}
                        </select>
                    </div>
                    {selectedRole == "store" && (
                        <div className="form-store-info">
                            <div className="store-name">
                                <label htmlFor="storeName">Store Name</label>
                                <input id="storeName" type="text" />
                            </div>
                            <div className="store-phone">
                                <label htmlFor="storePhone">Store Phone</label>
                                <input id="storePhone" type="text" />
                            </div>
                            <div className="store-tax">
                                <label htmlFor="storeTax">Store Tax ID</label>
                                <input id="storeTax" type="text" />
                            </div>
                            <div className="store-bank">
                                <label htmlFor="storeBank">Store Bank Account</label>
                                <input id="storeBank" type="text" />
                            </div>
                        </div>
                    )}
                    <div className="form-button">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
}