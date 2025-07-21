import axiosInstance from "../../utils/axiosInstance";
import { setRoles } from "../actions/clientActions";

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