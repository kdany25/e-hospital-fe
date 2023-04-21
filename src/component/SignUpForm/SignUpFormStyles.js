import styled from "styled-components";

export const Container = styled.div`
	position: relative;
	width: 100%;
`;
export const Wrapper = styled.div`
	position: absolute;
	width: 60%;
	border: 2px solid #e8e7e3;
	left: 20%;
	border-radius: 20px;
	margin-top: 5%;
`;
export const FormWrapper = styled.div`
	display: flex;
`;
export const SignUpTitle = styled.h1`
	text-align: center;
`;
export const Element = styled.div`
	padding: 10px;
`;
export const Label = styled.div`
	margin-bottom: 10px;
`;

export const Inputs = styled.input`
	border-radius: 5px;
	background-color: #f0f0f2;
	padding: 10px;
	width: 80%;
	border: 1px solid #e3e3e6;
`;

export const Select = styled.select`
	border-radius: 5px;
	background-color: #f0f0f2;
	padding: 10px;
	width: 85%;
	border: 1px solid #e3e3e6;
`;
export const Faeye = {
	position: "absolute",
	top: "50%",
	right: "20%",
	transform: "translateY(-50%)",
	cursor: "pointer",
};

export const buttonStyle = {
	backgroundColor: "#2596be",
	color: "white",
	padding: 15,
	borderRadius: "5px",
	border: "none",
	cursor: "pointer",
	width: "60%",
};

export const buttonHolder = {
	padding: 10,
	marginLeft: "20%",
	marginTop: "2%",
	marginBottom: "2%",
};
