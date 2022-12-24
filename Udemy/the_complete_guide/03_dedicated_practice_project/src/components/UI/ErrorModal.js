import React from "react";

import Card from "./Card";
import Button from "./Button";

const ErrorModal = (p) => {
	return (
		<Card>
			<header>
				<h2>{p.title}</h2>
			</header>
			<div>
				<p></p>
			</div>
			<footer>
				<Button>Okay</Button>
			</footer>
		</Card>
	);
};

export default ErrorModal;
