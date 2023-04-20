import React from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function SignUpForm() {
	const [showPassword, setShowPassword] = useState(false);

	const handleTogglePassword = () => {
		setShowPassword((prevState) => !prevState);
	};
	return (
		<div
			style={{
				width: "40%",
				margin: 10,

				height: "90vh",
			}}
		>
			<div>
				<h1 style={{ textAlign: "center" }}>Sign Up</h1>
				<div
					style={
						{
							// display: 'flex',
							// justifyContent: 'center',
							// alignItems: 'center',
							// border: "2px solid green",
						}
					}
				>
					<div>
						<div style={{ padding: "10px" }}>
							<div style={{ marginBottom: 10 }}>
								<label htmlFor="email">Name:</label>
							</div>
							<input
								type="text"
								id="name"
								placeholder="Type your name"
								style={{
									borderRadius: "5px",
									backgroundColor: "#f0f0f2",
									padding: 10,
									width: "60%",
									border: "1px solid #e3e3e6",
								}}
							/>
						</div>
						<div style={{ padding: "10px" }}>
							<div style={{ marginBottom: 10 }}>
								<label htmlFor="email">Username:</label>
							</div>
							<input
								type="text"
								id="username"
								placeholder="Type your username"
								style={{
									borderRadius: "5px",
									backgroundColor: "#f0f0f2",
									padding: 10,
									width: "60%",
									border: "1px solid #e3e3e6",
								}}
							/>
						</div>

						<div style={{ padding: "10px" }}>
							<div style={{ marginBottom: 10 }}>
								<label htmlFor="email">Email:</label>
							</div>
							<input
								type="email"
								id="email"
								placeholder="Type your email"
								style={{
									borderRadius: "5px",
									backgroundColor: "#f0f0f2",
									padding: 10,
									width: "60%",
									border: "1px solid #e3e3e6",
								}}
							/>
						</div>

						<div style={{ padding: "10px" }}>
							<div style={{ marginBottom: 10 }}>
								<label htmlFor="Phone">Phone:</label>
							</div>
							<input
								type="Phone"
								id="Phone"
								placeholder="Type your Phone"
								style={{
									borderRadius: "5px",
									backgroundColor: "#f0f0f2",
									padding: 10,
									width: "60%",
									border: "1px solid #e3e3e6",
								}}
							/>
						</div>
						<div style={{ padding: "10px" }}>
							<div style={{ marginBottom: 10 }}>
								<label htmlFor="Gender">Gender:</label>
							</div>
							<input
								type="Gender"
								id="Gender"
								placeholder="Type your Gender"
								style={{
									borderRadius: "5px",
									backgroundColor: "#f0f0f2",
									padding: 10,
									width: "60%",
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
									style={{
										borderRadius: "5px",
										backgroundColor: "#f0f0f2",
										padding: 10,
										width: "60%",
										border: "1px solid #e3e3e6",
									}}
								/>
								{showPassword ? (
									<FaEyeSlash
										style={{
											position: "absolute",
											top: "50%",
											right: "40%",
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
											right: "40%",
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
									backgroundColor: "#6c63ff",
									color: "white",
									padding: 15,
									borderRadius: "5px",
									border: "none",
									cursor: "pointer",
									width: "64%",
								}}
							>
								SignUp
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignUpForm;
