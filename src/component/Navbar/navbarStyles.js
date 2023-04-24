import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { FaMoon } from "react-icons/fa";

export const Nav = styled.nav`
	background: #fff;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: sticky;
	top: 0;
	z-index: 10;
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	z-index: 1;
	width: 100%;
	max-width: 1350px;
`;

export const NavLogo = styled(LinkR)`
	color: #8a8998;
	justify-self: flex-start;
	cursor: pointer;
	display: flex;
	align-items: center;
	font-size: 2rem;
	margin-left: 24px;
	font-weight: bold;
	text-decoration: none;
`;

export const NavIcon = styled(FaMoon)`
	margin-right: 0.5rem;
	color: #9f76fc;
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	margin-right: -22px;

	@media screen and (max-width: 960px) {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 90vh;
		position: absolute;
		top: 80px;
		left: ${({ click }) => (click ? 0 : "-100%")};
		opacity: 1;
		transition: all 0.2s ease;
		background: #6c63ff;
	}
`;

export const NavItem = styled.li`
	height: 80px;
	border-bottom: 2px solid transparent;

	&:hover {
		border-bottom: 2px solid #01bf71;
	}

	@media screen and (max-width: 960px) {
		width: 100%;

		&:hover {
			border: none;
		}
	}
`;

export const NavLink = styled(LinkR)`
	color: #000000;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0.5rem 1rem;
	height: 100%;

	@media screen and (max-width: 960px) {
		text-align: center;
		padding: 2rem;
		width: 100%;
		display: table;

		&:hover {
			color: #ffffff;
			transition: all 0.3s ease;
		}
	}
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;

	@media screen and (max-width: 960px) {
		display: none;
	}
`;

export const NavBtnLink = styled(LinkR)`
	border-radius: 50px;
	background: #9f76fc;
	white-space: nowrap;
	padding: 10px 22px;
	color: #ffffff;
	font-size: 16px;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	margin-left: 24px;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #ffffff;
		color: #6c63ff;
	}
`;
