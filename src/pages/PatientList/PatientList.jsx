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
		<div>
			<DataTable columns={columns} data={data}></DataTable>
		</div>
	);
}

export default PatientList;
