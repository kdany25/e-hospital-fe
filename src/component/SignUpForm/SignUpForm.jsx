import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
	Container,
	Wrapper,
	FormWrapper,
	SignUpTitle,
	Element,
	Label,
	Inputs,
	Select,
	Faeye,
	buttonStyle,
	buttonHolder,
} from "./SignUpFormStyles";
import axios from "axios";
import { BASE_URL } from "../../utils/requestMethod";
import { Redirect } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #8a8998",
	boxShadow: 24,
	p: 4,
	borderRadius: "20px",
};

function SignUpForm() {
	const [showPassword, setShowPassword] = useState(false);
	const [inputs, setInputs] = useState({});
	const [shouldRedirect, setShouldRedirect] = useState(false);
	const [errors, setErrors] = useState([]);
	const [open, setOpen] = useState(false);
	const handleClose = () => setOpen(false);

	const handleTogglePassword = () => {
		setShowPassword((prevState) => !prevState);
	};
	const handleChange = (key, e) => {
		setInputs((prev) => {
			return { ...prev, [key]: e };
		});
	};

	const onSave = async () => {
		const errors = [];
		if (!inputs.firstName) {
			errors.push("first Name is required");
		}
		if (!inputs.lastName) {
			errors.push("Last Name is required");
		}
		if (!inputs.userName) {
			errors.push("username is required");
		}
		if (!/^\S+@\S+\.\S+$/.test(inputs.email)) {
			errors.push("Email is invalid");
		}
		if (!/^\d+$/.test(inputs.age)) {
			errors.push("Age must be a number");
		}
		if (!/^\d{10}$/.test(inputs.phone)) {
			errors.push("Phone number must be a 10-digit number");
		}
		if (!inputs.gender) {
			errors.push("Gender is required");
		}
		if (!inputs.role) {
			errors.push("role is required");
		}
		if (
			(inputs.role === "PATIENT" &&
				(inputs.password?.length < 5 || inputs.password?.length > 6)) ||
			(inputs.role === "PATIENT" && !inputs.password)
		) {
			errors.push("Password must be between 4 and 6 characters");
		}
		if (
			(inputs.role === "PHYSICIAN" &&
				(inputs.password?.length < 7 || inputs.password?.length > 8)) ||
			(inputs.role === "PHYSICIAN" && !inputs.password)
		) {
			errors.push("Password must be between 7 and 8 characters");
		}
		if (
			(inputs.role === "PHARMACIST" &&
				(inputs.password?.length < 9 ||
					inputs.password?.length > 10)) ||
			(inputs.role === "PHARMACIST" && !inputs.password)
		) {
			errors.push("Password must be between 9 and 10 characters");
		}
		if (errors.length > 0) {
			setErrors(errors);
			setOpen(true);
		}

		await axios
			.post(`${BASE_URL}/auth/register`, inputs)
			.then((res) => {
				if (res.status === 200 || res.status === 201) {
					toast.success("Created Account successfully");
					setShouldRedirect(true);
				}
			})
			.catch((error) => {
				toast.error("failed");
				console.log(inputs);
			});
	};
	if (shouldRedirect) {
		return <Redirect to="/login" />;
	}
	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<div>
						{errors.map((error, index) => (
							<p key={index}>{error}</p>
						))}
					</div>
				</Box>
			</Modal>
			<ToastContainer />
			<Container>
				<Wrapper>
					<SignUpTitle>Sign Up</SignUpTitle>
					<FormWrapper>
						<div style={{ width: "50%" }}>
							<Element>
								<Label>
									<label htmlFor="email">First Name:</label>
								</Label>
								<Inputs
									type="text"
									placeholder="Type your Firstname"
									onChange={(e, v) =>
										handleChange(
											"firstName",
											e.target.value
										)
									}
								/>
							</Element>
							<Element>
								<Label>
									<label htmlFor="email">Last Name:</label>
								</Label>
								<Inputs
									type="text"
									placeholder="Type your Lastname"
									onChange={(e, v) =>
										handleChange("lastName", e.target.value)
									}
								/>
							</Element>
							<Element>
								<Label>
									<label htmlFor="email">Username:</label>
								</Label>

								<Inputs
									type="text"
									id="username"
									placeholder="Type your username"
									onChange={(e, v) =>
										handleChange("userName", e.target.value)
									}
								/>
							</Element>

							<Element>
								<Label>
									<label htmlFor="email">Email:</label>
								</Label>

								<Inputs
									type="email"
									id="email"
									placeholder="Type your email"
									onChange={(e, v) =>
										handleChange("email", e.target.value)
									}
								/>
							</Element>

							<Element>
								<Label>
									<label htmlFor="Phone">Phone:</label>
								</Label>

								<Inputs
									type="Phone"
									id="Phone"
									placeholder="Type your Phone"
									onChange={(e, v) =>
										handleChange("phone", e.target.value)
									}
								/>
							</Element>
						</div>
						<div style={{ width: "50%" }}>
							<Element>
								<Label>
									<label htmlFor="Phone">Age:</label>
								</Label>

								<Inputs
									type="age"
									id="age"
									placeholder="Type your Age"
									onChange={(e, v) =>
										handleChange("age", e.target.value)
									}
								/>
							</Element>
							<Element>
								<Label>
									<label htmlFor="Gender">Gender:</label>
								</Label>

								<Select
									onChange={(e, v) =>
										handleChange("gender", e.target.value)
									}
								>
									<option value="">Select gender</option>
									<option value="MALE">MALE</option>
									<option value="FEMALE">FEMALE</option>
								</Select>
							</Element>

							<Element>
								<Label>
									<label htmlFor="Gender">Role:</label>
								</Label>

								<Select
									onChange={(e, v) =>
										handleChange("role", e.target.value)
									}
								>
									<option value="">Select Role</option>
									<option value="PATIENT">Patient</option>
									<option value="PHYSICIAN">Physian</option>
									<option value="PHARMACIST">
										Pharmacist
									</option>
								</Select>
							</Element>

							<Element>
								<Label>
									<label htmlFor="password">Password:</label>
								</Label>

								<div style={{ position: "relative" }}>
									<Inputs
										type={
											showPassword ? "text" : "password"
										}
										id="password"
										placeholder="Type your password"
										onChange={(e, v) =>
											handleChange(
												"password",
												e.target.value
											)
										}
									/>
									{showPassword ? (
										<FaEyeSlash
											style={Faeye}
											onClick={handleTogglePassword}
										/>
									) : (
										<FaEye
											style={Faeye}
											onClick={handleTogglePassword}
										/>
									)}
								</div>
							</Element>
						</div>
					</FormWrapper>
					<div style={buttonHolder}>
						<button style={buttonStyle} onClick={() => onSave()}>
							SignUp
						</button>
					</div>
				</Wrapper>
			</Container>
		</>
	);
}

export default SignUpForm;
