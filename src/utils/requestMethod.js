import axios from "axios";

export const BASE_URL = "http://localhost:8080/user-auth-service-1.0-SNAPSHOT";

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});
