import axiosInstance from "../../utils/axiosInstance";
import { setRoles, setUser } from "../actions/clientActions";

export const getRoles = () => async (dispatch, getState) => {
    const {roles} = getState().client;

    if(roles.length > 0)
        return roles;

    try {
        const response = await axiosInstance.get("/roles");
        const fetchedRoles = response.data;
        dispatch(setRoles(fetchedRoles));
        return fetchedRoles;

    } catch (error) {
        console.error("Failed to get roles:", error);
    }
};

export const getAddress = () => async (dispatch, getState) => {
    const {user, addressList, creditCards} = getState().client;
    const token = localStorage.getItem("token");

    if(addressList.length > 0)
        return addressList;

    try {
        axiosInstance.defaults.headers.common["Authorization"] = token;
        const response = await axiosInstance.get("/user/address");
        const data = response.data;
        dispatch(setUser(user, data, creditCards));
    } catch (error) {
        console.error("Address fetch error: ", error);
    }
};