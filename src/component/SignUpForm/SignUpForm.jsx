import React from "react";
import { useState } from "react";
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

function SignUpForm() {
	const [showPassword, setShowPassword] = useState(false);

	const handleTogglePassword = () => {
		setShowPassword((prevState) => !prevState);
	};
	return (
		<Container>
			<Wrapper>
				<SignUpTitle>Sign Up</SignUpTitle>
				<FormWrapper>
					<div style={{ width: "50%" }}>
						<Element>
							<Label>
								<label htmlFor="email">Name:</label>
							</Label>
							<Inputs
								type="text"
								id="name"
								placeholder="Type your name"
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
								placeholder="Type your Phone"
							/>
						</Element>
						<Element>
							<Label>
								<label htmlFor="Gender">Gender:</label>
							</Label>

							<Select>
								<option value="MALE">MALE</option>
								<option value="FEMALE">FEMALE</option>
							</Select>
						</Element>
						<Element>
							<Label>
								<label htmlFor="Gender">Role:</label>
							</Label>

							<Select>
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
					<button style={buttonStyle}>SignUp</button>
				</div>
			</Wrapper>
		</Container>
	);
}

export default SignUpForm;
