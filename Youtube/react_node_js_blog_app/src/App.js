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
	return (
		<BrowserRouter>
			<TopBar />
			<Routes>
				<Route path="/" element={<App />} />
				<Route index element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/login" element={<Login />} />
				<Route path="/write" element={<Write />} />
				<Route path="/post/:postId" element={<Single />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
