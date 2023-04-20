import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

function App() {
	return (
		<BrowserRouter>
			<SignUp />
		</BrowserRouter>
	);
}

export default App;
