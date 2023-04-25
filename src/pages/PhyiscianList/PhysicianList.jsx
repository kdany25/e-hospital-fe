import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaSearch, FaHome } from "react-icons/fa";
import {
	PhysicianListContainer,
	PhysicianListHeader,
	PhysicianListCurrentnumber,
	PhysicianListOthernumbers,
} from "./PhysicianStyle";
import { BASE_URL } from "../../utils/requestMethod";
import axios from "axios";
import { Switch } from "@mui/material";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";

const PhysicianList = () => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [symptoms, setSymptoms] = useState(null);
	const [recordId, setRecordId] = useState();

	let decoded;
	const user = useSelector((state) => state.user.currentUser);
	if (user) {
		decoded = jwtDecode(user?.payload);
	}
	const patientId = decoded?.user?.id;

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(
					`${BASE_URL}/medical/physicians`
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

	const onSave = async () => {
		try {
			const { data } = await axios.post(
				`${BASE_URL}/medical/createRecord`,
				{
					patientId,
					symptoms,
				}
			);
			setRecordId(data.data);
		} catch (error) {
			console.error(error);
		}
	};

	const grantAccessToDoctor = async (physicianId) => {
		try {
			await axios.post(
				`${BASE_URL}/medical/medicalRecords/assignDoctor`,
				{ id: recordId, patientId, physicianId }
			);
		} catch (error) {
			console.error(error);
		}
	};

	if (loading) {
		return <p>Loading...</p>;
	}
	const label = { inputProps: { "aria-label": "Color switch demo" } };

	const columns = [
		{
			name: "First name",
			selector: (row) => row.firstName,
		},
		{
			name: "Last name",
			selector: (row) => row.lastName,
		},
		{
			name: "Email",
			selector: (row) => row.email,
		},
		{
			name: "Gender",
			selector: (row) => row.gender,
		},
		{
			name: "Grant Access",
			cell: (row) => (
				<Switch
					{...label}
					color="secondary"
					onChange={() => grantAccessToDoctor(row.id)}
				/>
			),
		},
	];

	return (
		<PhysicianListContainer>
			{/* Header */}
			<PhysicianListHeader>
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
			</PhysicianListHeader>

			<div
				style={{
					height: "92%",
					width: "100%",
					backgroundColor: "#f8f4fc",
				}}
			>
				{/* title */}
				{/* <div
					style={{
						padding: "2%",
						fontWeight: "bold",
						fontSize: 26,
					}}
				>
					Physicians List
				</div> */}

				{/* navigation */}
				<div style={{ display: "flex", padding: "2%" }}>
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
						Physicians List
					</div>
				</div>

				<div>
					<div style={{ paddingLeft: "2%", fontWeight: "bold" }}>
						Symptoms
					</div>
					<textarea
						value={symptoms}
						onChange={(e) => {
							setSymptoms(e.target.value);
						}}
						style={{
							padding: "30px",
							marginTop: "10px",
							marginLeft: "20px",
							border: "none",
							backgroundColor: "#fff",
							borderRadius: "10px",
							width: "200px",
						}}
					/>
					<div
						style={{
							display: "flex",
							paddingLeft: "2%",
						}}
					>
						<button
							onClick={() => {
								onSave();
								setSymptoms("");
							}}
							style={{
								backgroundColor: "#ebeae8",
								color: "#9F76FC",
								border: "none",
								padding: "10px 20px",
								cursor: "pointer",
								borderRadius: "10px",
								fontWeight: "bold",
								marginTop: "1%",
							}}
						>
							Submit
						</button>
					</div>
				</div>

				{/* Sorting */}
				<div
					style={{ display: "flex", justifyContent: "space-between" }}
				>
					<div>
						<select
							placeholder="Search"
							style={{
								padding: "12px",
								marginTop: "20px",
								marginLeft: "20px",
								border: "none",
								backgroundColor: "#ffffff",
								borderRadius: "10px",
								width: "200px",
								color: "#8a8998",
							}}
						>
							<option value="MALE">All</option>
							<option value="FEMALE">Allowed</option>
						</select>
					</div>
					<div>
						<select
							placeholder="Search"
							style={{
								padding: "12px",
								marginTop: "20px",
								marginLeft: "20px",
								border: "none",
								backgroundColor: "#ffffff",
								borderRadius: "10px",
								width: "200px",
								marginRight: "20px",
								color: "#8a8998",
							}}
						>
							<option value="MALE">Sorting (A-Z)</option>
							<option value="FEMALE">Sorting (Z-A)</option>
						</select>
					</div>
				</div>

				<div
					style={{
						height: "40%",
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
						Physicians List
					</div>
					<DataTable columns={columns} data={data}></DataTable>
				</div>
				<div style={{ display: "flex" }}>
					<PhysicianListCurrentnumber>1</PhysicianListCurrentnumber>
					<PhysicianListOthernumbers>2</PhysicianListOthernumbers>
					<PhysicianListOthernumbers>3</PhysicianListOthernumbers>
					<PhysicianListOthernumbers>4</PhysicianListOthernumbers>
					<PhysicianListOthernumbers>5</PhysicianListOthernumbers>
				</div>
			</div>
		</PhysicianListContainer>
	);
};

export default PhysicianList;
