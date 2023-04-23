import React from "react";
import DataTable from "react-data-table-component";
import { FaSearch, FaHome } from "react-icons/fa";
import { columns, data } from "../../data";
import {
	PhysicianListContainer,
	PhysicianListHeader,
	PhysicianListCurrentnumber,
	PhysicianListOthernumbers,
} from "./PhysicianStyle";

function PhysicianList() {
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
				<div
					style={{
						padding: "2%",
						fontWeight: "bold",
						fontSize: 26,
					}}
				>
					Physicians List
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
						Physicians List
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
}

export default PhysicianList;
