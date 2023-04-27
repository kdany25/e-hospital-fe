import React, { useState, useEffect } from "react";
import { ConsContainer, ConstHeader, InfosWrapper } from "./consultationStyles";
import { FaSearch, FaHome } from "react-icons/fa";
import { useParams } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../utils/requestMethod";
import { Editor } from "@tinymce/tinymce-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../utils/apiCalls";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ConsultationPage() {
	const { id } = useParams();
	const [data, setData] = useState(null);
	const [consultation, setConsultation] = useState(null);
	const dispatch = useDispatch();
	let decoded;
	const states = useSelector((state) => state.user);
	const user = useSelector((state) => state.user.currentUser);
	if (user) {
		decoded = jwtDecode(user?.payload);
	}

	let physicianId;
	if (decoded?.user?.role === "PHYSICIAN") {
		physicianId = decoded?.user?.id;
	}

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get(
					`${BASE_URL}/medical/medicalRecords?physicianId=${physicianId}`
				);
				setData(response.data?.data[0]);
			} catch (error) {
				console.error(error);
			}
		}

		fetchData();
	}, [id]);

	const handleEditorChange = (content, editor) => {
		setConsultation(editor.getContent());
	};

	const onSaveConsultation = async () => {
		try {
			await axios.post(`${BASE_URL}/medical/addConsultation`, {
				id: id,
				consultation: consultation.replace(/<\/?p>/g, ""),
				physicianId,
			});
			toast.success("consultation Saved");
		} catch (error) {
			toast.error("failed");
			console.error(error);
		}
	};
	const handleClick = (e) => {
		logOutUser(states, dispatch);
	};

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
						<div style={{ padding: "15px" }}>
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
					<div
						style={{
							padding: "2%",
							fontWeight: "bold",
							fontSize: 26,
						}}
					>
						Patient Info
					</div>
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
								color: "#8a8998",
							}}
						>
							Patients List
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
							Infos
						</div>
					</div>

					<div
						style={{
							height: "80%",
							backgroundColor: "#ffffff",
							margin: "2%",
							borderRadius: "20px",

							position: "relative",
						}}
					>
						<div style={{ display: "flex" }}>
							<div
								style={{
									width: "60%",
									padding: "1%",
								}}
							>
								<div>
									<div
										style={{
											padding: "2%",
											marginLeft: "2%",
											fontWeight: "bold",
											fontSize: 16,
											color: "#595958",
										}}
									>
										Record Id
									</div>
									<div>
										<input
											placeholder={id}
											style={{
												padding: "12px",
												marginLeft: "20px",
												border: "1px solid #e3e3e3",
												backgroundColor: "#ffffff",
												borderRadius: "10px",
												width: "80%",
											}}
										/>
									</div>
								</div>
								<div>
									<div
										style={{
											padding: "2%",
											marginLeft: "2%",
											fontWeight: "bold",
											fontSize: 16,
											color: "#595958",
										}}
									>
										Symptoms
									</div>
									<div>
										<input
											value={data?.symptoms}
											style={{
												padding: "12px",
												marginLeft: "20px",
												border: "1px solid #e3e3e3",
												backgroundColor: "#ffffff",
												borderRadius: "10px",
												width: "80%",
											}}
										/>
									</div>
								</div>
								<div>
									<div
										style={{
											padding: "2%",
											marginLeft: "2%",
											fontWeight: "bold",
											fontSize: 16,
											color: "#595958",
										}}
									>
										Consultation
									</div>
									<div
										style={{
											padding: "12px",
											marginLeft: "20px",
											border: "1px solid #e3e3e3",
											backgroundColor: "#ffffff",
											borderRadius: "10px",
											width: "80%",
										}}
									>
										<Editor
											apiKey="edqediiu06b35lfua2e3m1l7dcs0b6qs4x41ixzenbmbto3j"
											initialValue="<p>Type consultation here</p>"
											init={{
												height: 250,
												plugins:
													"advlist autolink lists link image charmap print preview",
												toolbar:
													"bold italic underline | alignleft aligncenter alignright | bullist numlist outdent indent | link image",
												menubar: false,
												content_css: "./custom.css",
											}}
											onEditorChange={handleEditorChange}
										/>
									</div>
								</div>
							</div>
						</div>
						<div
							style={{
								position: "absolute",
								right: "2%",
								bottom: "3%",
							}}
						>
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									gap: "10px",
								}}
							>
								<button
									onClick={() => {
										onSaveConsultation();
									}}
									style={{
										backgroundColor: "#9F76FC",
										color: "#fff",
										border: "none",
										padding: "10px 20px",
										cursor: "pointer",
										borderRadius: "10px",
									}}
								>
									Submit
								</button>
								<button
									style={{
										backgroundColor: "#fff",
										color: "#000",
										border: "1px solid #000",
										padding: "10px 20px",
										cursor: "pointer",
										borderRadius: "10px",
									}}
								>
									Cancel
								</button>
							</div>
						</div>
					</div>
				</InfosWrapper>
			</ConsContainer>
		</>
	);
}

export default ConsultationPage;
