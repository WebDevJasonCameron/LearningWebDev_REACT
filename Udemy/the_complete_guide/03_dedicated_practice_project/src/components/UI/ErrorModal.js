import React from "react";

import Card from "./Card";
import Button from "./Button";

import classes from "./ErrorModal.module.css";

const ErrorModal = (p) => {
	return (
		<div>
			<div className={classes.backdrop} />
			<Card className={classes.modal}>
				<header className={classes.header}>
					<h2>{p.title}</h2>
				</header>
				<div className={classes.content}>
					<p>{p.message}</p>
				</div>
				<footer className={classes.actions}>
					<Button>Okay</Button>
				</footer>
			</Card>
		</div>
	);
};

export default ErrorModal;
