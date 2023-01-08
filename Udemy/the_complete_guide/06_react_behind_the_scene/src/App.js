import React, { useState } from "react";

import Button from "./components/UI/Button/Button";

import "./App.css";

function App() {
	const [showPar, setShowPar] = useState(false);

	const toggleParHandler = () => {
		setShowPar((prevShowPar) => !prevShowPar);
	};

	return (
		<div className="app">
			<h1>Hi there!</h1>
			<Button onClick={toggleParHandler}>Toggle Paragraph!</Button>
			{showPar && <p>This is new!</p>}
		</div>
	);
}

export default App;
