import React from "react";
import { ConsContainer, ConstHeader, InfosWrapper } from "./consultationStyles";
import { FaSearch, FaComment, FaHome } from "react-icons/fa";
import MyEditor from "../../component/TextEdior/MyEditor";

function ConsultationPage() {
	return (
		<ConsContainer>
			<ConstHeader>
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
					<div style={{ padding: "15px" }}>
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
			</ConstHeader>
			<InfosWrapper>
				<div
					style={{
						padding: "2%",
						fontWeight: "bold",
						fontSize: 26,
					}}
				>
					Patient Info
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
						Infos
					</div>
				</div>

				<div
					style={{
						height: "80%",
						backgroundColor: "#ffffff",
						margin: "2%",
						borderRadius: "20px",
					}}
				>
					<div style={{ display: "flex" }}>
						<div
							style={{
								width: "60%",
								// border: "2px solid red",
								padding: "1%",
							}}
						>
							<div
								style={{
									width: "100%",
									// border: "2px solid red",
								}}
							>
								<div
									style={{
										padding: "2%",
										marginLeft: "2%",
										fontWeight: "bold",
										fontSize: 16,
										color: "#595958",
									}}
								>
									Patient name
								</div>
								<div>
									<input
										placeholder="Kabalisa dany"
										style={{
											padding: "12px",
											marginLeft: "20px",
											border: "1px solid #e3e3e3",
											backgroundColor: "#ffffff",
											borderRadius: "10px",
											width: "60%",
										}}
									/>
								</div>
							</div>
							<div>
								<div
									style={{
										padding: "2%",
										marginLeft: "2%",
										fontWeight: "bold",
										fontSize: 16,
										color: "#595958",
									}}
								>
									Email
								</div>
								<div>
									<input
										placeholder="kabadany88@gmail.com"
										style={{
											padding: "12px",
											marginLeft: "20px",
											border: "1px solid #e3e3e3",
											backgroundColor: "#ffffff",
											borderRadius: "10px",
											width: "60%",
										}}
									/>
								</div>
							</div>
							<div>
								<div
									style={{
										padding: "2%",
										marginLeft: "2%",
										fontWeight: "bold",
										fontSize: 16,
										color: "#595958",
									}}
								>
									Age
								</div>
								<div>
									<input
										placeholder="34"
										style={{
											padding: "12px",
											marginLeft: "20px",
											border: "1px solid #e3e3e3",
											backgroundColor: "#ffffff",
											borderRadius: "10px",
											width: "60%",
										}}
									/>
								</div>
							</div>
							<div>
								<div
									style={{
										padding: "2%",
										marginLeft: "2%",
										fontWeight: "bold",
										fontSize: 16,
										color: "#595958",
									}}
								>
									Consultation
								</div>
								<div
									style={{
										padding: "12px",
										marginLeft: "20px",
										border: "1px solid #e3e3e3",
										backgroundColor: "#ffffff",
										borderRadius: "10px",
									}}
								>
									<MyEditor />
								</div>
							</div>
						</div>
						<div
							style={{
								width: "40%",
								margin: "2%",
								height: "40%",
								borderRadius: "20px",
								border: "2px solid #f2f2f2",
							}}
						>
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									padding: "2%",
								}}
							>
								<img
									src="https://i.ibb.co/jgg3hQR/random-Photo-Room-png-Photo-Room.png"
									style={{ height: "300px", width: "250px" }}
								/>
							</div>
						</div>
					</div>
				</div>
			</InfosWrapper>
		</ConsContainer>
	);
}

export default ConsultationPage;
