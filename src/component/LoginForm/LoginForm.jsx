import React from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { login } from "../../utils/apiCalls";

function LoginForm() {
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const dispatch = useDispatch();

	const handleLogin = () => {
		login(dispatch, { email, password });
	};

	const handleTogglePassword = () => {
		setShowPassword((prevState) => !prevState);
	};
	return (
		<div
			style={{
				width: "35%",
				margin: 10,
				marginTop: "5%",
				height: "90vh",
			}}
		>
			<div>
				<h1
					style={{
						textAlign: "center",
						fontFamily: "Montserrat, sans-serif",
					}}
				>
					Log in
				</h1>
				<div style={{ marginLeft: "5%" }}>
					<div>
						<div style={{ padding: "10px" }}>
							<div style={{ marginBottom: 10 }}>
								<label htmlFor="email">Email:</label>
							</div>
							<input
								type="email"
								id="email"
								placeholder="Type your email"
								onChange={(e, v) => setEmail(e.target.value)}
								style={{
									borderRadius: "5px",
									backgroundColor: "#f0f0f2",
									padding: 15,
									width: "80%",
									border: "1px solid #e3e3e6",
								}}
							/>
						</div>
						<div style={{ padding: "10px" }}>
							<div style={{ marginBottom: 10 }}>
								<label htmlFor="password">Password:</label>
							</div>

							<div style={{ position: "relative" }}>
								<input
									type={showPassword ? "text" : "password"}
									id="password"
									placeholder="Type your password"
									onChange={(e, v) =>
										setPassword(e.target.value)
									}
									style={{
										borderRadius: "5px",
										backgroundColor: "#f0f0f2",
										padding: 15,
										width: "80%",
										border: "1px solid #e3e3e6",
									}}
								/>
								{showPassword ? (
									<FaEyeSlash
										style={{
											position: "absolute",
											top: "50%",
											right: "20%",
											transform: "translateY(-50%)",
											cursor: "pointer",
										}}
										onClick={handleTogglePassword}
									/>
								) : (
									<FaEye
										style={{
											position: "absolute",
											top: "50%",
											right: "20%",
											transform: "translateY(-50%)",
											cursor: "pointer",
										}}
										onClick={handleTogglePassword}
									/>
								)}
							</div>
						</div>

						<div style={{ padding: 10 }}>
							<button
								style={{
									backgroundColor: "#2596be",
									color: "white",
									padding: 18,
									borderRadius: "5px",
									border: "none",
									cursor: "pointer",
									width: "86%",
									marginTop: "5%",
								}}
								onClick={() => handleLogin()}
							>
								Log in
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LoginForm;
