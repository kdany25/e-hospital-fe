import React, { useEffect, useState } from "react";
import { RContainer, RHeader, RWrapper } from "./Result";
import { FaSearch, FaHome, FaCalendarAlt, FaUser } from "react-icons/fa";
import MedicinesTable from "../../component/MedicalResultTable/MedecineTable";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../utils/requestMethod";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../utils/apiCalls";
import FileSaver from "file-saver";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PatientResult() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();
	const today = new Date();
	let decoded;
	const states = useSelector((state) => state.user);
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
	const handleClick = (e) => {
		logOutUser(states, dispatch);
	};

	const handleDownload = async () => {
		try {
			const response = await fetch(
				`${BASE_URL}/medical/downLoadCSV?patientId=${decoded.user?.id}`
			);
			const data = await response.text();
			const url = window.URL.createObjectURL(new Blob([data]));
			const link = document.createElement("a");
			link.href = url;
			link.setAttribute("download", "subscriptions.csv");
			document.body.appendChild(link);
			link.click();
			toast.success("subscriptions downloaded");
		} catch (error) {
			toast.error("failed");
		}
	};

	return (
		<>
			<ToastContainer />
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
						<div style={{ padding: "15px" }}>
							<Link to="/">
								<button
									onClick={() => handleClick()}
									style={{
										padding: "8px",
										borderRadius: "10px",
										border: "2px solid #8a8998",
										color: "#9F76FC",
										fontWeight: "bold",
									}}
								>
									Logout
								</button>
							</Link>
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
						{data && (
							<div style={{ padding: "2%", fontWeight: "bold" }}>
								Record Id: {data[0]?.id}
							</div>
						)}

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
						<div
							style={{
								width: "90%",
								padding: "2%",
								border: "2px solid #ebeae8",
								marginLeft: "2%",
								borderRadius: "15px",
							}}
						>
							<MedicinesTable
								data={data ? data[0].medicines : []}
							/>
						</div>
						<div
							style={{
								display: "flex",
								padding: "2%",
								gap: "10px",
							}}
						>
							<button
								onClick={() => handleDownload()}
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
		</>
	);
}

export default PatientResult;
