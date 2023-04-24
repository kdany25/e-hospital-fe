import { loginFailure, loginStart, loginSuccess } from "../slice/AuthSlice";
import { apiRequest } from "./requestMethod";

//
export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const res = await apiRequest.post("/login", user);
		dispatch(loginSuccess(res.data?.data));
	} catch (err) {
		dispatch(loginFailure());
	}
};
