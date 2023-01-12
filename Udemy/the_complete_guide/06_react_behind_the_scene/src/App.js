import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";

import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
	const [showPar, setShowPar] = useState(false);
	const [allowToggle, setAllowToggle] = useState(false);
	console.log("APP RUNNING");

	const toggleParHandler = useCallback(
		(e) => {
			e.preventDefault(); // must add this or you never see the con log
			if (allowToggle) {
				setShowPar((prevShowPar) => !prevShowPar);
			}
		},
		[allowToggle]
	);

	const allowToggleHandler = (e) => {
		e.preventDefault();
		setAllowToggle(true);
	};

	return (
		<div className="app">
			<h1>Hi there!</h1>
			<Button onClick={allowToggleHandler}>Allow Toggling</Button>
			<Button onClick={toggleParHandler}>Toggle Paragraph!</Button>
			<DemoOutput show={showPar} />
		</div>
	);
}

export default App;
