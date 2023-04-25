import React from "react";
import {
	PPContainer,
	PPHeader,
	PPWrapper,
} from "./Pharmacist-prescriptionStyles";
import {
	FaSearch,
	FaHome,
	FaCalendarAlt,
	FaUser,
	FaNotesMedical,
} from "react-icons/fa";
import AutocompleteMui from "../../component/AutoComplete/AutoCompleteMeds";

function PharmacistPrescription() {
	const today = new Date();
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
							{today.toDateString()}
						</div>
					</div>
					<hr
						style={{
							borderTop: "1px solid #ebeae8",
							width: "96%",
							marginTop: "1%",
						}}
					/>

					{/* infos */}
					<div
						style={{
							display: "flex",
							paddingLeft: "2%",
							paddingRight: "2%",
							justifyContent: "space-between",
						}}
					>
						<div
							style={{
								display: "flex",
								paddingLeft: "2%",
								width: "45%",
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
							<div
								style={{
									width: "50%",
									marginTop: "1%",
									marginLeft: "1%",
								}}
							>
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
						<div
							style={{
								display: "flex",
								paddingLeft: "2%",
								width: "45%",
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
								<FaNotesMedical />
							</div>
							<div
								style={{
									width: "90%",
									marginTop: "1%",
									marginLeft: "1%",
								}}
							>
								<div
									style={{
										fontWeight: "bold",
										marginLeft: "1%",
									}}
								>
									Consultation
								</div>
								<div
									style={{ padding: "1%", color: "#8a8998" }}
								>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Integer tempus sem at mi
									lacinia ultricies. In elementum sapien
									mattis justo luctus
								</div>
							</div>
						</div>
					</div>
					<hr
						style={{
							borderTop: "1px solid #ebeae8",
							width: "96%",
							marginTop: "2%",
						}}
					/>
					<div style={{ width: "30%", padding: "2%" }}>
						<AutocompleteMui />
					</div>
					<div
						style={{
							display: "flex",
							padding: "2%",
							gap: "10px",
						}}
					>
						<button
							style={{
								backgroundColor: "#9F76FC",
								color: "#fff",
								border: "none",
								padding: "10px 20px",
								cursor: "pointer",
								borderRadius: "10px",
							}}
						>
							Submit
						</button>
						<button
							style={{
								backgroundColor: "#fff",
								color: "#000",
								border: "1px solid #8a8998",
								padding: "10px 20px",
								cursor: "pointer",
								borderRadius: "10px",
							}}
						>
							Cancel
						</button>
					</div>
				</div>
			</PPWrapper>
		</PPContainer>
	);
}

export default PharmacistPrescription;
