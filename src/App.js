import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Navbar from "./component/Navbar/Navbar";
import SideBar from "./component/SideBar/SideBar";

//List
import PhysicianList from "./pages/PhyiscianList/PhysicianList";
import PatientList from "./pages/PatientList/PatientList";
import PharmacistList from "./pages/PharmacistList/PharmacistList";

//Result
import ResultList from "./pages/Result/ResultList";
//Profile
import PatientProfile from "./pages/PatientProfile/PatientProfile";

function App() {
	const user = null;
	return (
		<Router>
			<Switch>
				{user ? (
					<>
						<Navbar />
						<div className="container">
							<SideBar />
							<Route exact path="/patients">
								<PatientList />
							</Route>
							<Route exact path="/physicians">
								<PhysicianList />
							</Route>
							<Route exact path="/pharmacist">
								<PharmacistList />
							</Route>
							<Route exact path="/result">
								<ResultList />
							</Route>
							<Route exact path="/patientProfile">
								<PatientProfile />
							</Route>
						</div>
					</>
				) : (
					<>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/signup">
							<SignUp />
						</Route>
					</>
				)}
			</Switch>
		</Router>
	);
}

export default App;
