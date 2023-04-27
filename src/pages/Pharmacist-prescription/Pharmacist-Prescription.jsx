import React, { useState, useEffect } from "react";
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
import { useParams } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../utils/requestMethod";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Link, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../utils/apiCalls";

function PharmacistPrescription() {
	const { id } = useParams();
	const [data, setData] = useState(null);
	const [medecines, setMedecines] = useState(null);
	const [selectedValues, setSelectedValues] = React.useState([]);
	const dispatch = useDispatch();

	const states = useSelector((state) => state.user);
	let decoded;
	const user = useSelector((state) => state.user.currentUser);
	if (user) {
		decoded = jwtDecode(user?.payload);
	}

	let pharmacistId;
	if (decoded?.user?.role === "PHARMACIST") {
		pharmacistId = decoded?.user?.id;
	}

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(
					`${BASE_URL}/medical/medicalRecords?pharmacistId=${pharmacistId}`
				);
				setData(response.data?.data[0]);
			} catch (error) {
				console.error(error);
			}
		}

		async function fetchMedecine() {
			try {
				const response = await axios.get(
					`${BASE_URL}/medical/allMedecines`
				);
				setMedecines(response.data?.data);
			} catch (error) {
				console.error(error);
			}
		}

		fetchData();
		fetchMedecine();
	}, [id]);

	const assignMedecine = async (medName, medPrice, medExpiration) => {
		await axios
			.post(`${BASE_URL}/medical/prescribeMedecine`, {
				recordId: id,
				pharmacistId,
				medName,
				medPrice,
				medExpiration,
			})
			.then((res) => {})
			.catch((error) => {
				console.log(error);
			});
	};
	const today = new Date();
	const handleClick = (e) => {
		logOutUser(states, dispatch);
		<Redirect to="/login" />;
	};
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
						Record Id: {id}
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
										Patient Id: {data?.patientId}
									</div>
								</div>
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
									{data?.consultation}
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
						<Autocomplete
							multiple
							id="medicine-selection"
							options={medecines || []}
							getOptionLabel={(option) => option.medName}
							value={selectedValues}
							onChange={(event, newValue) => {
								setSelectedValues(newValue);
								assignMedecine(
									newValue[0].medName,
									newValue[0].medPrice,
									newValue[0].medExpiration
								);
							}}
							renderInput={(params) => (
								<TextField
									{...params}
									variant="outlined"
									label="Medicine"
									placeholder="Select"
								/>
							)}
							renderOption={(option) => (
								<div>
									<div>{option?.medName}</div>
								</div>
							)}
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
