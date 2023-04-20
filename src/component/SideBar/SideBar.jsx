import React, { useState } from "react";
import {
	FaUser,
	FaUserMd,
	FaMedkit,
	FaFileMedical,
	FaListAlt,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BsArrowLeftShort } from "react-icons/bs";

function SideBar() {
	const [open, setOpen] = useState(true);

	const linkItems = {
		marginBottom: "50px",
	};
	return (
		<div
			style={{
				backgroundColor: "#070770",
				height: "100vh",
				padding: "5px 8px",
				width: `${open ? "300px" : "50px"}`,
				color: "white",
				position: "relative",
			}}
		>
			<BsArrowLeftShort
				style={{
					color: "#070770",
					backgroundColor: "white",
					fontSize: 25,
					borderRadius: "50%",
					position: "absolute",
					right: "-10px",
					top: "2%",
					border: "1px solid #070770 ",
					cursor: "pointer",
					transform: `rotate(${open ? "0" : "180deg"})`,
				}}
				onClick={() => setOpen(!open)}
			/>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<div style={{ padding: "16px" }}>
					<h3 style={{ marginBottom: "16px", textAlign: "center" }}>
						Dashoard
					</h3>
					<ul
						style={{
							listStyleType: "none",
							padding: 0,
						}}
					>
						{/* <li style={linkItems}>
							<a
								href="#"
								style={{
									display: "flex",
									alignItems: "center",
									color: "#444",
									textDecoration: "none",
								}}
							>
								<MdDashboard />

								<span
									style={{
										marginLeft: "8px",
									}}
								>
									Dashboard
								</span>
							</a>
						</li> */}
						<li style={linkItems}>
							<a
								href="#"
								style={{
									display: "flex",
									alignItems: "center",
									color: "#444",
									textDecoration: "none",
								}}
							>
								<FaUser />

								<span
									style={{
										marginLeft: "8px",
									}}
								>
									Patients
								</span>
							</a>
						</li>
						<li style={linkItems}>
							<a
								href="#"
								style={{
									display: "flex",
									alignItems: "center",
									color: "#444",
									textDecoration: "none",
								}}
							>
								<FaUserMd />

								<span
									style={{
										marginLeft: "8px",
									}}
								>
									Physicians
								</span>
							</a>
						</li>
						<li style={linkItems}>
							<a
								href="#"
								style={{
									display: "flex",
									alignItems: "center",
									color: "#444",
									textDecoration: "none",
								}}
							>
								<FaMedkit />

								<span
									style={{
										marginLeft: "8px",
									}}
								>
									Pharmacist
								</span>
							</a>
						</li>
						<li style={linkItems}>
							<a
								href="#"
								style={{
									display: "flex",
									alignItems: "center",
									color: "#444",
									textDecoration: "none",
								}}
							>
								<FaFileMedical />

								<span
									style={{
										marginLeft: "8px",
									}}
								>
									Results
								</span>
							</a>
						</li>
						<li style={linkItems}>
							<a
								href="#"
								style={{
									display: "flex",
									alignItems: "center",
									color: "#444",
									textDecoration: "none",
								}}
							>
								<FaListAlt />

								<span
									style={{
										marginLeft: "8px",
									}}
								>
									List of Medicines
								</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default SideBar;
