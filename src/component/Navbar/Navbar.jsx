import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	NavMenu,
	NavItem,
	NavLink,
	NavBtn,
	NavBtnLink,
} from "./navbarStyles";

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	return (
		<Nav>
			<NavbarContainer>
				<NavLogo to="/" onClick={closeMobileMenu}>
					<NavIcon />
					e-hospital
				</NavLogo>
				<NavBtn>
					<NavBtnLink to="/login" onClick={closeMobileMenu}>
						Login
					</NavBtnLink>
					<NavBtnLink
						style={{ backgroundColor: "#fff", color: "#000" }}
						sty
						to="/register"
						onClick={closeMobileMenu}
					>
						Register
					</NavBtnLink>
				</NavBtn>
			</NavbarContainer>
		</Nav>
	);
};

export default Navbar;
