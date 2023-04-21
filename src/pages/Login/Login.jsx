import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import LoginForm from "../../component/LoginForm/LoginForm";
import Doc from "../../assets/doc.png";

const Login = () => {
	return (
		<div>
			<Navbar />
			<div style={{ display: "flex" }}>
				<div style={{ width: "60%" }}>
					<div
						style={{
							marginLeft: "10%",
							marginTop: "20%",
							fontSize: "24px",
						}}
					>
						<h1 style={{ fontFamily: "Montserrat, sans-serif" }}>
							Sign In to
							<br /> Recharge Direct
						</h1>
					</div>

					<div
						style={{
							marginLeft: "10%",
							marginTop: "5%",
							fontSize: "20px",
						}}
					>
						<h5 style={{ fontFamily: "Montserrat, sans-serif" }}>
							if you don't have an account
							<br />
							You can register here
						</h5>
					</div>

					{/* <img
						src={Doc}
						style={{
							height: "300px",
							width: "300px",
							marginLeft: "50%",
						}}
					/> */}
				</div>
				<LoginForm />
			</div>
		</div>
	);
};

export default Login;
