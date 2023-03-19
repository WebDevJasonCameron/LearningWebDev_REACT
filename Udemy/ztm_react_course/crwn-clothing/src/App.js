// Libs
import { Routes, Route } from "react-router-dom";

// Comp
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";

// App
const Shop = () => {
	return <h1>I amd the Shop page</h1>;
};

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="/shop" element={<Shop />} />
			</Route>
		</Routes>
	);
};

export default App;
