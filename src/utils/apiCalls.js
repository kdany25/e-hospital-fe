import {
	loginFailure,
	loginStart,
	loginSuccess,
	logOutStart,
	logOutSuccess,
	logOutFailure,
} from "../slice/AuthSlice";
import { apiRequest } from "./requestMethod";
import axios from "axios";
const baseURL = "http://localhost:3001";

//
export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const res = await apiRequest.post("auth/login", user);
		dispatch(loginSuccess(res.data?.data));
	} catch (err) {
		dispatch(loginFailure());
	}
};

//logout
export const logOutUser = async (id, dispatch) => {
	dispatch(logOutStart());
	try {
		dispatch(logOutSuccess("user logout "));
	} catch (err) {
		dispatch(logOutFailure());
	}
};

export const getCountryInfo = async (country) => {
	const response = await axios.get(`${baseURL}/soap?country=${country}`);
	return response;
};
