import "./App.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";

//auth
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

//Sidebar
import SideBar from "./component/SideBar/SideBar";

//List
import PhysicianList from "./pages/PhyiscianList/PhysicianList";
import PatientList from "./pages/PatientList/PatientList";
import PharmacistList from "./pages/PharmacistList/PharmacistList";

//Profiles
import ConsultationPage from "./pages/patientConsultationPage/ConsultationPage";
import PharmacistPrescription from "./pages/Pharmacist-prescription/Pharmacist-Prescription";
import PatientResult from "./pages/PatientResult/PatientResult";
import Medecines from "./pages/AddMedicines/Medecines";
import CountryInfos from "./pages/CountryInfos/CountryInfos";

function App() {
	let decoded;
	const user = useSelector((state) => state.user.currentUser);
	if (user) {
		decoded = jwtDecode(user?.payload);
	}
	return (
		<Router>
			<Switch>
				{user ? (
					<>
						<div className="container">
							<SideBar />
							{decoded?.user.role === "PATIENT" && (
								<>
									<Route exact path="/">
										<PhysicianList />
									</Route>
									<Route exact path="/physicians">
										<PhysicianList />
									</Route>
									<Route exact path="/pharmacists">
										<PharmacistList />
									</Route>
									<Route exact path="/results">
										<PatientResult />
									</Route>
								</>
							)}
							{decoded?.user.role === "PHARMACIST" && (
								<>
									<Route exact path="/">
										<PatientList />
									</Route>
									<Route exact path="/patients">
										<PatientList />
									</Route>
									<Route exact path="/prescription/:id">
										<PharmacistPrescription />
									</Route>
									<Route exact path="/medecines">
										<Medecines />
									</Route>
								</>
							)}
							{decoded?.user.role === "PHYSICIAN" && (
								<>
									<Route exact path="/">
										<PatientList />
									</Route>
									<Route exact path="/patients">
										<PatientList />
									</Route>
									<Route exact path="/consultation/:id">
										<ConsultationPage />
									</Route>
								</>
							)}
							<Route exact path="/info">
								<CountryInfos />
							</Route>
						</div>
					</>
				) : (
					<>
						<Route exact path="/">
							<Login />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/signUp">
							<SignUp />
						</Route>
					</>
				)}
			</Switch>
		</Router>
	);
}

export default App;
