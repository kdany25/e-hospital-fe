import React, { useEffect, useState } from "react";
import { RContainer, RHeader, RWrapper } from "./Result";
import { FaSearch, FaHome, FaCalendarAlt, FaUser } from "react-icons/fa";
import MedicinesTable from "../../component/MedicalResultTable/MedecineTable";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../utils/requestMethod";
import axios from "axios";

function PatientResult() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const today = new Date();
	let decoded;
	const user = useSelector((state) => state.user.currentUser);
	if (user) {
		decoded = jwtDecode(user?.payload);
	}
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(
					`${BASE_URL}/medical/medicalRecords?patientId=${decoded.user?.id}`
				);
				setData(response.data?.data);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		}

		fetchData();
	}, []);
	console.log(data)
	return (
		<RContainer>
			<RHeader>
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
			</RHeader>
			<RWrapper>
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
							color: "#9F76FC",
							fontWeight: "bold",
						}}
					>
						Result
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
						Record Id: {data[0]?.id}
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
										Full name:{" "}
										{decoded?.user?.firstName +
											" " +
											decoded?.user?.lastName}
									</div>
									<div style={{ padding: "1%" }}>
										Email: {decoded?.user?.email}
									</div>
									<div style={{ padding: "1%" }}>
										Phone: {decoded?.user?.phone}
									</div>
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
						<MedicinesTable />
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
								backgroundColor: "#ebeae8",
								color: "#9F76FC",
								border: "none",
								padding: "10px 20px",
								cursor: "pointer",
								borderRadius: "10px",
								fontWeight: "bold",
							}}
						>
							DownLoad Prescription
						</button>
					</div>
				</div>
			</RWrapper>
		</RContainer>
	);
}

export default PatientResult;
