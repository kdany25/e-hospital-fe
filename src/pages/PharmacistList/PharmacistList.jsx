import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaSearch, FaHome } from "react-icons/fa";
// import { columns, data } from "../../data";
import {
	PharmacistListContainer,
	PharmacistListHeader,
	PharmacistListCurrentnumber,
	PharmacistListOthernumbers,
} from "./PharmacistStyles";
import { BASE_URL } from "../../utils/requestMethod";
import axios from "axios";
import { Switch } from "@mui/material";

function PharmacistList() {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(
					`${BASE_URL}/medical/pharmacists`
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
			cell: (row) => <Switch {...label} color="secondary" />,
		},
	];
	return (
		<PharmacistListContainer>
			{/* Header */}
			<PharmacistListHeader>
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
			</PharmacistListHeader>

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
					Pharmacist List
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
						Pharmacist List
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
						Pharmacist List
					</div>
					<DataTable columns={columns} data={data}></DataTable>
				</div>
				<div style={{ display: "flex" }}>
					<PharmacistListCurrentnumber>1</PharmacistListCurrentnumber>
					<PharmacistListOthernumbers>2</PharmacistListOthernumbers>
					<PharmacistListOthernumbers>3</PharmacistListOthernumbers>
					<PharmacistListOthernumbers>4</PharmacistListOthernumbers>
					<PharmacistListOthernumbers>5</PharmacistListOthernumbers>
				</div>
			</div>
		</PharmacistListContainer>
	);
}

export default PharmacistList;
