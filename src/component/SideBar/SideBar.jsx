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
	linkItemsClicked,
	HrefLinksClicked,
} from "./SideBarStyles";
import FloatingImages from "../FloatingImage/FloatingImage";
import Categories from "../Categories/Categories";

function SideBar() {
	const [open, setOpen] = useState(true);

	return (
		<SideBarContainer style={{ width: `${open ? "300px" : "50px"}` }}>
			<Logo to="/">
				<LogIcon />
				e-hospital
			</Logo>
			<BsArrowLeftShort style={BackIcon} onClick={() => setOpen(!open)} />
			<MenuHolder>
				<MenuList>
					<Link to="/patients" className="link">
						<li style={linkItemsClicked}>
							<HrefLinksClicked>
								<FaUser />
								<span
									style={{
										marginLeft: "8px",
									}}
								>
									Patients
								</span>
							</HrefLinksClicked>
						</li>
					</Link>
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
					<Link to="/result" className="link">
						<li style={linkItems}>
							<HrefLinks>
								<FaListAlt />

								<span
									style={{
										marginLeft: "8px",
									}}
								>
									List of Medicines
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

			<div style={{ fontWeight: "bold", padding: 10, color: "#363535" }}>
				Meet the team
			</div>
			<FloatingImages />
			<Categories />
		</SideBarContainer>
	);
}

export default SideBar;
