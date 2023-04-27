import React from "react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { login } from "../../utils/apiCalls";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

function LoginForm() {
	const [showPassword, setShowPassword] = useState(false);
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [open, setOpen] = useState(true);
	const [role, setRole] = useState();
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);
	const dispatch = useDispatch();

	const handleLogin = () => {
		login(dispatch, { email, password });
	};

	const handleTogglePassword = () => {
		setShowPassword((prevState) => !prevState);
	};
	const handleRoleChange = (e) => {
		setRole(e.target.value);
		handleClose();
	};

	return (
		<>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography
						id="modal-modal-title"
						variant="h6"
						component="h2"
					>
						Choose role
					</Typography>

					<select
						id="role-dropdown"
						onChange={handleRoleChange}
						value={role}
						style={{ padding: "10px 30px" }}
					>
						<option value="">Select role</option>
						<option value="patient">Patient</option>
						<option value="pharmacist">Pharmacist</option>
						<option value="physician">Physician</option>
					</select>
				</Box>
			</Modal>
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
									<label htmlFor="email">
										{role === "patient"
											? "UserName"
											: role === "pharmacist"
											? "Phone"
											: "email"}
									</label>
								</div>
								<input
									type="email"
									placeholder="Type your here"
									onChange={(e, v) =>
										setEmail(e.target.value)
									}
									required
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
										type={
											showPassword ? "text" : "password"
										}
										id="password"
										placeholder="Type your password"
										onChange={(e, v) =>
											setPassword(e.target.value)
										}
										required
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
										backgroundColor: "#9f76fc",
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
		</>
	);
}

export default LoginForm;
