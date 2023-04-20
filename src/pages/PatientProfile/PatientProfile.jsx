import React from "react";


function PatientProfile() {
	return (
		<div
			style={{
				width: "40%",
				margin: 10,

				height: "90vh",
			}}
		>
			<div>
				<h1 style={{ textAlign: "center" }}>Patient's profile</h1>
				<div>
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

						<textarea
							id="w3review"
							name="w3review"
							rows="4"
							cols="50"
						></textarea>

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

export default PatientProfile;
