import React from "react";
import {
	PPContainer,
	PPHeader,
	PPWrapper,
} from "./Pharmacist-prescriptionStyles";
import {
	FaSearch,
	FaComment,
	FaHome,
	FaCalendarAlt,
	FaUser,
} from "react-icons/fa";

function PharmacistPrescription() {
	return (
		<PPContainer>
			<PPHeader>
				<div style={{ position: "relative" }}>
					<input
						placeholder="Search"
						style={{
							padding: "12px",
							marginTop: "20px",
							marginLeft: "20px",
							border: "none",
							backgroundColor: "#f5f5f5",
							borderRadius: "10px",
							width: "200px",
							textAlign: "right",
						}}
					/>
					<div
						style={{
							position: "absolute",
							top: "40%",
							left: "15%",
						}}
					>
						<FaSearch style={{ color: "#8a8998" }} />
					</div>
				</div>

				<div style={{ display: "flex" }}>
					<div style={{ padding: "20px" }}>
						<img
							src="https://i.ibb.co/HPxf0vW/pic-Photo-Room.png"
							style={{
								height: "40px",
								width: "40px",
								borderRadius: "50%",
							}}
						/>
					</div>
				</div>
			</PPHeader>
			<PPWrapper>
				<div
					style={{
						padding: "2%",
						fontWeight: "bold",
						fontSize: 26,
					}}
				>
					prescription
				</div>
				<div style={{ display: "flex", marginLeft: "2%" }}>
					<FaHome style={{ color: "#8a8998" }} />
					<div style={{ marginLeft: "5px", color: "#8a8998" }}>
						Home
					</div>
					<div style={{ marginLeft: "10px", color: "#8a8998" }}>
						{">"}
					</div>
					<div
						style={{
							marginLeft: "10px",
							color: "#8a8998",
						}}
					>
						Patients List
					</div>
					<div style={{ marginLeft: "10px", color: "#8a8998" }}>
						{">"}
					</div>
					<div
						style={{
							marginLeft: "10px",
							color: "#9F76FC",
							fontWeight: "bold",
						}}
					>
						prescription
					</div>
				</div>
				<div
					style={{
						height: "80%",
						backgroundColor: "#ffffff",
						margin: "2%",
						borderRadius: "20px",

						position: "relative",
					}}
				>
					<div style={{ padding: "2%", fontWeight: "bold" }}>
						Patient Id: #2345
					</div>
					<div
						style={{
							display: "flex",
							fontWeight: "bold",
							marginLeft: "2%",
						}}
					>
						<FaCalendarAlt color="#8a8998" fontSize={18} />
						<div
							style={{
								marginLeft: "5px",
							}}
						>
							Sat, Apr 22,2023, 8:40AM
						</div>
					</div>

					{/* infos */}
					<div style={{display:'flex'}}>
						<div
							style={{
								display: "flex",
								marginTop: "3%",
								paddingLeft: "2%",
								width: "50%",
								border: "2px solid red",
							}}
						>
							<div
								style={{
									backgroundColor: "#ebeae8",
									height: "50px",
									width: "50px",
									display: "flex",
									justifyContent: "center",
									alignContent: "center",
									alignItems: "center",
									borderRadius: "50%",
									marginTop: "5px",
								}}
							>
								<FaUser />
							</div>
							<div style={{ width: "50%" }}>
								<div
									style={{
										fontWeight: "bold",
										padding: "1%",
									}}
								>
									Patient
								</div>
								<div style={{ color: "#8a8998" }}>
									<div style={{ padding: "1%" }}>
										Full name: Kabalisa dany
									</div>
									<div style={{ padding: "1%" }}>
										Email: kabadany88@gmail.com
									</div>
									<div style={{ padding: "1%" }}>
										Phone: +250 788 730 199
									</div>
								</div>
								<button
									style={{
										backgroundColor: "#ebeae8",
										color: "#9F76FC",
										border: "none",
										padding: "10px 20px",
										cursor: "pointer",
										borderRadius: "10px",
									}}
								>
									View Profile
								</button>
							</div>
						</div>
						<div style={{ border: "1px solid red" }}>
							<p>edfdafdsvdsfvdasvffdsvfdsvdfsvdfsv</p>
						</div>
					</div>
				</div>
			</PPWrapper>
		</PPContainer>
	);
}

export default PharmacistPrescription;
