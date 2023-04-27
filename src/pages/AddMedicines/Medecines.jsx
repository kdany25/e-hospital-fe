import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../utils/requestMethod";
import {
	ConsContainer,
	ConstHeader,
	InfosWrapper,
} from "../patientConsultationPage/consultationStyles";
import { FaSearch } from "react-icons/fa";
import DataTable from "react-data-table-component";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../utils/apiCalls";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Medecines() {
	const [data, setData] = useState();
	const [inputs, setInputs] = useState({});
	const states = useSelector((state) => state.user);
	const dispatch = useDispatch();
	async function fetchData() {
		try {
			const response = await axios.get(
				`${BASE_URL}/medical/allMedecines`
			);
			setData(response.data?.data);
		} catch (error) {
			console.error(error);
		}
	}
	useEffect(() => {
		fetchData();
	}, []);

	const handleChange = (key, e) => {
		setInputs((prev) => {
			return { ...prev, [key]: e };
		});
	};
	const handleClick = (e) => {
		logOutUser(states, dispatch);
	};

	const onSaveMedecine = async () => {
		await axios
			.post(`${BASE_URL}/medical/uploadMedecine`, inputs)
			.then((res) => {
				toast.success("Uploaded medecine");
				fetchData();
			})
			.catch((error) => {
				toast.error("Failed try again ");
				console.log(inputs);
			});
	};

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
			selector: (row) => row.medExpiration,
		},
	];
	return (
		<>
			<ToastContainer />
			<ConsContainer>
				<ConstHeader>
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
							<Link to="/">
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
							</Link>
						</div>
					</div>
				</ConstHeader>
				<InfosWrapper>
					<div style={{ padding: "2%", fontWeight: "bold" }}>
						List of Medecines
					</div>
					<div style={{ padding: "2%" }}>
						<DataTable
							columns={columns}
							data={data || []}
						></DataTable>
					</div>
					<div style={{ padding: "2%", fontWeight: "bold" }}>
						upload medecine
					</div>
					<div
						style={{
							padding: "3%",
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<div>
							<div>Name</div>
							<div>
								<input
									onChange={(e, v) =>
										handleChange("medName", e.target.value)
									}
									style={{
										padding: "12px",
										marginTop: "5px",
										border: "none",
										backgroundColor: "#d1d1d1",
										borderRadius: "10px",
										width: "200px",
										textAlign: "right",
									}}
								/>
							</div>
						</div>
						<div>
							<div>Price</div>
							<div>
								<input
									onChange={(e, v) =>
										handleChange("medPrice", e.target.value)
									}
									style={{
										padding: "12px",
										marginTop: "5px",
										border: "none",
										backgroundColor: "#d1d1d1",
										borderRadius: "10px",
										width: "200px",
										textAlign: "right",
									}}
								/>
							</div>
						</div>
						<div>
							<div>Expiration Date{" (YY-MM--DD)"}</div>
							<div>
								<input
									onChange={(e, v) =>
										handleChange(
											"medExpiration",
											e.target.value
										)
									}
									style={{
										padding: "12px",
										marginTop: "5px",
										border: "none",
										backgroundColor: "#d1d1d1",
										borderRadius: "10px",
										width: "200px",
										textAlign: "right",
									}}
								/>
							</div>
						</div>
					</div>
					<div style={{ padding: "2%" }}>
						<button
							onClick={() => onSaveMedecine()}
							style={{
								backgroundColor: "#ebeae8",
								color: "#9F76FC",
								border: "none",
								padding: "10px 20px",
								cursor: "pointer",
								borderRadius: "10px",
								fontWeight: "bold",
							}}
						>
							Add medecine
						</button>
					</div>
				</InfosWrapper>
			</ConsContainer>
		</>
	);
}

export default Medecines;
