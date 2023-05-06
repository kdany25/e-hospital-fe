import React, { useState } from "react";
import {
	FaUser,
	FaUserMd,
	FaMedkit,
	FaFileMedical,
	FaListAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import {
	SideBarContainer,
	BackIcon,
	MenuHolder,
	MenuList,
	HrefLinks,
	linkItems,
	Logo,
	LogIcon,
} from "./SideBarStyles";
import FloatingImages from "../FloatingImage/FloatingImage";
import Categories from "../Categories/Categories";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";

function SideBar() {
	const [open, setOpen] = useState(true);
	let decoded;
	const user = useSelector((state) => state.user.currentUser);
	if (user) {
		decoded = jwtDecode(user?.payload);
	}

	return (
		<SideBarContainer style={{ width: `${open ? "300px" : "50px"}` }}>
			<BsArrowLeftShort style={BackIcon} onClick={() => setOpen(!open)} />
			{open && (
				<>
					<Logo to="/">
						<LogIcon />
						e-hospital
					</Logo>

					<MenuHolder>
						<MenuList>
							{(decoded?.user?.role === "PHARMACIST" ||
								decoded?.user?.role === "PHYSICIAN") && (
								<Link to="/patients" className="link">
									<li style={linkItems}>
										<HrefLinks>
											<FaUser />
											<span
												style={{
													marginLeft: "8px",
												}}
											>
												Patients
											</span>
										</HrefLinks>
									</li>
								</Link>
							)}
							{decoded?.user?.role === "PATIENT" && (
								<Link to="/physicians" className="link">
									<li style={linkItems}>
										<HrefLinks>
											<FaUserMd />

											<span
												style={{
													marginLeft: "8px",
												}}
											>
												Physicians
											</span>
										</HrefLinks>
									</li>
								</Link>
							)}
							{decoded?.user?.role === "PATIENT" && (
								<Link to="/pharmacists" className="link">
									<li style={linkItems}>
										<HrefLinks>
											<FaMedkit />

											<span
												style={{
													marginLeft: "8px",
												}}
											>
												Pharmacist
											</span>
										</HrefLinks>
									</li>
								</Link>
							)}
							{decoded?.user?.role === "PATIENT" && (
								<Link to="/results" className="link">
									<li style={linkItems}>
										<HrefLinks>
											<FaFileMedical />

											<span
												style={{
													marginLeft: "8px",
												}}
											>
												Results
											</span>
										</HrefLinks>
									</li>
								</Link>
							)}

							{decoded?.user?.role === "PHARMACIST" && (
								<Link to="/medecines" className="link">
									<li style={linkItems}>
										<HrefLinks>
											<FaListAlt />

											<span
												style={{
													marginLeft: "8px",
												}}
											>
												Upload Medicines
											</span>
										</HrefLinks>
									</li>
								</Link>
							)}

							<Link to="/info" className="link">
								<li style={linkItems}>
									<HrefLinks>
										<FaListAlt />

										<span
											style={{
												marginLeft: "8px",
											}}
										>
											Get Country info
										</span>
									</HrefLinks>
								</li>
							</Link>
						</MenuList>
					</MenuHolder>
					<hr
						style={{
							borderTop: "1px solid #ebeae8",
							width: "80%",
						}}
					/>

					<div
						style={{
							fontWeight: "bold",
							padding: 10,
							color: "#363535",
						}}
					>
						Meet the team
					</div>
					<FloatingImages />
					<Categories />
				</>
			)}
		</SideBarContainer>
	);
}

export default SideBar;
