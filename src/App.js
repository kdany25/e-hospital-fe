import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import SideBar from "./component/SideBar/SideBar";

function App() {
	return (
		<BrowserRouter>
			<>
				<Navbar />
        <SideBar/>
				<div style={{ display: "flex" }}>
					<div
						style={{
							padding: 7,
						}}
					></div>
				</div>
			</>
		</BrowserRouter>
	);
}

export default App;
