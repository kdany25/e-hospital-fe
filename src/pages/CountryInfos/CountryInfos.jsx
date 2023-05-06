import React, { useState } from "react";
import { getCountryInfo } from "../../utils/apiCalls";
import {
	ConsContainer,
	ConstHeader,
	InfosWrapper,
} from "../patientConsultationPage/consultationStyles";
import { Link } from "react-router-dom";

const CountryInfos = () => {
	const [country, setCountry] = useState("");
	const [data, setData] = useState();

	const handleSubmit = async (event) => {
		event.preventDefault();
		const { data } = await getCountryInfo(country.toUpperCase());
		setData(data.result[0]?.FullCountryInfoResult);
	};
	return (
		<ConsContainer>
			<ConstHeader>
				<div style={{ position: "relative" }}>
					{/* <input
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
					/> */}
					{/* <div
						style={{
							position: "absolute",
							top: "40%",
							left: "15%",
						}}
					>
						<FaSearch style={{ color: "#8a8998" }} />
					</div> */}
				</div>

				<div style={{ display: "flex" }}>
					<div style={{ padding: "20px" }}>
						<Link to="/">
							<button
								// onClick={() => handleClick()}
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
				<div style={{ padding: "5%" }}>
					<form onSubmit={handleSubmit}>
						<label>
							Country:
							<input
								type="text"
								value={country}
								onChange={(event) =>
									setCountry(event.target.value)
								}
								style={{
									padding: "12px",
									marginTop: "20px",
									marginLeft: "20px",
									border: "none",
									backgroundColor: "#fff",
									borderRadius: "10px",
									width: "200px",
									textAlign: "right",
								}}
							/>
						</label>
						<br />
						<button
							type="submit"
							style={{
								padding: "8px",
								borderRadius: "10px",
								border: "2px solid #8a8998",
								color: "#9F76FC",
								fontWeight: "bold",
								marginTop: "2%",
							}}
						>
							Get info
						</button>
					</form>
				</div>
				{data && (
					<div style={{ padding: "2%", fontWeight: "bold" }}>
						<div style={countryStyle}>Name : {data?.sName}</div>
						<div style={countryStyle}>
							Capital city : {data?.sCapitalCity}
						</div>
						<div style={countryStyle}>
							Continent code : {data?.sContinentCode}
						</div>
						<div style={countryStyle}>
							CurrencyISO code : {data?.sCurrencyISOCode}
						</div>
						<div style={countryStyle}>
							Phone code : {data?.sPhoneCode}
						</div>
						<div style={countryStyle}>COuntry flag</div>
						<img src={data.sCountryFlag} />
					</div>
				)}
			</InfosWrapper>
		</ConsContainer>
	);
};

export default CountryInfos;

const countryStyle = {
	margin: "1%",
};
