import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import Doc from "../../assets/doc.png";
import SignUpForm from "../../component/SignUpForm/SignUpForm";

const SignUp = () => {
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
						<h1>
							Sign In to
							<br /> Recharge Direct
						</h1>
					</div>

					<div
						style={{
							marginLeft: "10%",
							marginTop: "5%",
							fontSize: "16px",
						}}
					>
						<h5>
							if you don't have an account
							<br />
							you can register here
						</h5>
					</div>

					<img
						src={Doc}
						style={{
							height: "300px",
							width: "300px",
							marginLeft: "50%",
						}}
					/>
				</div>
				<SignUpForm />
			</div>
		</div>
	);
};

export default SignUp;
