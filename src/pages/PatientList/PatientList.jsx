import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaSearch, FaHome } from "react-icons/fa";
import { PListContainer, PatientHeader } from "./patientListStyles";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../utils/requestMethod";
import { Link, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../utils/apiCalls";

function PatientList() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();

	let decoded;
	const states = useSelector((state) => state.user);
	const user = useSelector((state) => state.user.currentUser);
	if (user) {
		decoded = jwtDecode(user?.payload);
	}
	let pharmacistId;
	let physicianId;
	if (decoded?.user?.role === "PHYSICIAN") {
		physicianId = decoded?.user?.id;
	} else if (decoded?.user?.role === "PHARMACIST") {
		pharmacistId = decoded?.user?.id;
	}
	useEffect(() => {
		async function fetchData() {
			try {
				if (pharmacistId) {
					const response = await axios.get(
						`${BASE_URL}/medical/medicalRecords?pharmacistId=${pharmacistId}`
					);
					setData(response.data?.data);
				}
				if (physicianId) {
					const response = await axios.get(
						`${BASE_URL}/medical/medicalRecords?physicianId=${physicianId}`
					);
					setData(response.data?.data);
				}
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
		<Redirect to="/login" />;
	};

	if (loading) {
		return <p>Loading...</p>;
	}
	const columns = [
		{
			name: "Record Id",
			selector: (row) => row.id,
		},
		{
			name: "Patient Id",
			selector: (row) => row.patientId,
		},
		{
			name: "symptoms",
			selector: (row) => row.symptoms,
		},
		{
			name: "View",
			cell: (row) => (
				<>
					{pharmacistId && (
						<Link to={"/prescription/" + row.id}>
							<button className="userListEdit">Prescribe</button>
						</Link>
					)}
					{physicianId && (
						<Link to={"/consultation/" + row.id}>
							<button className="userListEdit">Consultate</button>
						</Link>
					)}
				</>
			),
		},
	];
	return (
		<PListContainer>
			{/* Header */}
			<PatientHeader>
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
			</PatientHeader>

			<div
				style={{
					height: "92%",
					width: "100%",
					backgroundColor: "#f8f4fc",
				}}
			>
				{/* title */}
				<div
					style={{
						padding: "2%",
						fontWeight: "bold",
						fontSize: 26,
					}}
				>
					Patients List
				</div>

				{/* navigation */}
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
						Patients List
					</div>
				</div>

				{/* Sorting */}

				<div
					style={{
						height: "60%",
						backgroundColor: "#ffffff",
						margin: "2%",
						borderRadius: "20px",
					}}
				>
					<div
						style={{
							padding: "1%",
							fontWeight: "bold",
							fontSize: 18,
						}}
					>
						Patients List
					</div>
					<DataTable columns={columns} data={data || []}></DataTable>
				</div>
			</div>
		</PListContainer>
	);
}

export default PatientList;
