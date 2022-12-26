import React from "react";
import { ReactDOM } from "react";

import Card from "./Card";
import Button from "./Button";

import classes from "./ErrorModal.module.css";

const Backdrop = (p) => {
	return <div className={classes.backdrop} onClick={p.onConfirm} />;
};

const ModalOverlay = (p) => {
	return (
		<Card className={classes.modal}>
			<header className={classes.header}>
				<h2>{p.title}</h2>
			</header>
			<div className={classes.content}>
				<p>{p.message}</p>
			</div>
			<footer className={classes.actions}>
				<Button onClick={p.onConfirm}>Okay</Button>
			</footer>
		</Card>
	);
};

const ErrorModal = (p) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Backdrop onConfirm={p.onConfirm} />,
				document.getElementById("backdrop-root")
			)}
		</React.Fragment>
	);
};

export default ErrorModal;
