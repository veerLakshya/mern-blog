import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/Signin";
import SignUp from "./pages/Signup";
import Projects from "./pages/Projects";
export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="dashboard" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	);
}
