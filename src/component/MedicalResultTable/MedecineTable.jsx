import React, { useState } from "react";
import DataTable from "react-data-table-component";

const columns = [
	{
		name: "name",
		selector: (row) => row.medName,
	},
	{
		name: "Price",
		selector: (row) => row.medPrice,
	},
	{
		name: "Expiration",
		selector: (row) => row?.medExpiration?.substring(0, 10),
	},
];

const MedicinesTable = ({ data }) => {
	const [selectedRows, setSelectedRows] = useState([]);

	return (
		<div>
			<DataTable columns={columns} data={data || []} />
		</div>
	);
};
export default MedicinesTable;
