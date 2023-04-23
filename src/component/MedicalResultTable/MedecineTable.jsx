import React, { useState } from "react";
import DataTable from "react-data-table-component";

const columns = [
	{
		name: "Name",
		selector: "name",
		sortable: true,
	},
	{
		name: "Price",
		selector: "price",
		sortable: true,
	},
	{
		name: "Expiration",
		selector: "expiration",
		sortable: true,
	},
];

const MedicinesTable = ({ data }) => {
	const [selectedRows, setSelectedRows] = useState([]);
	const [medicines, setMedicines] = useState([
		{ name: "Ibuprofen", price: 10, expiration: "2023-06-01" },
		{ name: "Acetaminophen", price: 8, expiration: "2024-01-15" },
		{ name: "Aspirin", price: 5, expiration: "2022-11-30" },
	]);

	return (
		<div>
			<DataTable columns={columns} data={medicines} />
		</div>
	);
};
export default MedicinesTable;
