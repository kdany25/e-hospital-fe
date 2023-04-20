import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginButton = styled.div`
	width: "50%";
	border-radius: 50px;
	background: #6c63ff;
	padding: 10px;
	color: #ffffff;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	&:hover {
		transition: all 0.2s ease-in-out;
		background: #ffffff;
		color: #6c63ff;
	}
`;
