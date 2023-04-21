import React from "react";

function Categories() {
	return (
		<div style={{ marginTop: "32%" }}>
			<hr
				style={{
					borderTop: "1px solid  #ebeae8",
					width: "80%",
				}}
			/>
			<div style={{ fontWeight: "bold", padding: 10, color: "#363535" }}>
				Services
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					padding: "10px",
          color: '#999999',
          fontWeight: "bold"

				}}
			>
				<div>Radiology</div>
				<div
					style={{
						backgroundColor: "#f2ea7c",
						width: "30px",
						height: "25px",
						textAlign: "center",
						borderRadius: "10px",
					}}
				>
					8
				</div>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					padding: "10px",
          color: '#999999',
          fontWeight: "bold"
				}}
			>
				<div>Cardiology</div>
				<div
					style={{
						backgroundColor: "#f5d7a4",
						width: "30px",
						height: "25px",
						textAlign: "center",
						borderRadius: "10px",
					}}
				>
					3
				</div>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					padding: "10px",
          color: '#999999',
          fontWeight: "bold"
				}}
			>
				<div>Obstetrics</div>
				<div
					style={{
						backgroundColor: "#f5cafa",
						width: "30px",
						height: "25px",
						textAlign: "center",
						borderRadius: "10px",
					}}
				>
					4
				</div>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-between",
					padding: "10px",
          color: '#999999',
          fontWeight: "bold"
				}}
			>
				<div>Dermatology</div>
				<div
					style={{
						backgroundColor: "#aae6ab",
						width: "30px",
						height: "25px",
						textAlign: "center",
						borderRadius: "10px",
					}}
				>
					6
				</div>
			</div>
		</div>
	);
}

export default Categories;
