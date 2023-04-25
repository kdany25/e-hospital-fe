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

function SignUpForm() {
	const [showPassword, setShowPassword] = useState(false);
	const [inputs, setInputs] = useState({});
	const [shouldRedirect, setShouldRedirect] = useState(false);

	const handleTogglePassword = () => {
		setShowPassword((prevState) => !prevState);
	};
	const handleChange = (key, e) => {
		setInputs((prev) => {
			return { ...prev, [key]: e };
		});
	};

	const onSave = async () => {
		await axios
			.post(`${BASE_URL}/auth/register`, inputs)
			.then((res) => {
				if (res.status === 200 || res.status === 201) {
					setShouldRedirect(true);
				}
			})
			.catch((error) => {
				console.log(inputs);
			});
	};
	if (shouldRedirect) {
		return <Redirect to="/login" />;
	}
	return (
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
									handleChange("firstName", e.target.value)
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
									handleChange("username", e.target.value)
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
								type="Phone"
								id="Phone"
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
								<option value="MALE">Patient</option>
								<option value="FEMALE">Physian</option>
								<option value="MALE">Pharmacist</option>
							</Select>
						</Element>

						<Element>
							<Label>
								<label htmlFor="password">Password:</label>
							</Label>

							<div style={{ position: "relative" }}>
								<Inputs
									type={showPassword ? "text" : "password"}
									id="password"
									placeholder="Type your password"
									onChange={(e, v) =>
										handleChange("password", e.target.value)
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
	);
}

export default SignUpForm;
