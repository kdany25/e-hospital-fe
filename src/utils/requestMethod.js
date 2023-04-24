import axios from "axios";

export const BASE_URL= "http://localhost:3000/api/v1/auth";


export const apiRequest = axios.create({
	baseURL: BASE_URL,
});

