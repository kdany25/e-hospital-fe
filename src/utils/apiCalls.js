import { loginFailure, loginStart, loginSuccess } from "../slice/AuthSlice";
import { publicRequest } from "./requestMethod";

//
export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const res = await publicRequest.post("/login", user);
		dispatch(loginSuccess(res.data));
	} catch (err) {
		dispatch(loginFailure());
	}
};
