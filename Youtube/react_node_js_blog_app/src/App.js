import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";

// From ReactRouter.com
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
	// VARs
	const user = false;

	// OUT
	return (
		<BrowserRouter>
			<TopBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={user ? <Home /> : <Register />} />
				<Route path="/login" element={user ? <Home /> : <Login />} />
				<Route path="/write" element={user ? <Write /> : <Login />} />
				<Route path="/settings" element={user ? <Settings /> : <Login />} />
				<Route path="/post/:postId" element={<Single />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
