import React from "react";
import DataTable from "react-data-table-component";

function PatientList() {
	const columns = [
		{
			name: "Name",
			selector: (row) => row.name,
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
			name: "Action",
			selector: (row) => row.action,
		},
	];
	const data = [
		{
			name: "John Doe",
			email: "johndoe@example.com",
			gender: "Male",
			action: <button>Edit</button>,
		},
		{
			name: "Jane Doe",
			email: "janedoe@example.com",
			gender: "Female",
			action: <button>Edit</button>,
		},
		{
			name: "Bob Smith",
			email: "bobsmith@example.com",
			gender: "Male",
			action: <button>Edit</button>,
		},
		{
			name: "Alice Johnson",
			email: "alicejohnson@example.com",
			gender: "Female",
			action: <button>Edit</button>,
		},
	];

	return (
		<div style={{ width: '100%'}}>
		{/* Header */}
			<div style={{height: '8%',width: '100%',backgroundColor: '#ffffff'}}>
			</div>
			<div style={{height: '92%',width: '100%',backgroundColor: '#f8f4fc'}}>

			</div>
			<DataTable columns={columns} data={data}></DataTable>
		</div>
	);
}

export default PatientList;
