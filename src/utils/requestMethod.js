import axios from "axios";

export const BASE_URL= "http://localhost:3001/api/v1";


export const apiRequest = axios.create({
	baseURL: BASE_URL,
});

