import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
	const [showPar, setShowPar] = useState(false);
	console.log("APP RUNNING");

	const toggleParHandler = (e) => {
		e.preventDefault(); // must add this or you never see the con log
		setShowPar((prevShowPar) => !prevShowPar);
	};

	return (
		<div className="app">
			<h1>Hi there!</h1>
			<Button onClick={toggleParHandler}>Toggle Paragraph!</Button>
			<DemoOutput show={showPar} />
		</div>
	);
}

export default App;
