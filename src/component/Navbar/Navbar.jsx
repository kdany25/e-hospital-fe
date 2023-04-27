import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	NavBtn,
	NavBtnLink,
} from "./navbarStyles";
import { useLocation } from "react-router-dom";

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	const location = useLocation();
	console.log(location.pathname);

	return (
		<Nav>
			<NavbarContainer>
				<NavLogo to="/" onClick={closeMobileMenu}>
					<NavIcon />
					e-hospital
				</NavLogo>
				<NavBtn>
					<NavBtnLink
						style={
							location.pathname == "/signup"
								? {
										backgroundColor: "#fff",
										color: "#000",
										border: "1px solid #8a8998",
								  }
								: {}
						}
						to="/login"
						onClick={closeMobileMenu}
					>
						Login
					</NavBtnLink>
					<NavBtnLink
						style={
							location.pathname == "/login" ||
							location.pathname == "/"
								? {
										backgroundColor: "#fff",
										color: "#000",
										border: "1px solid #8a8998",
								  }
								: {}
						}
						sty
						to="/signup"
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
