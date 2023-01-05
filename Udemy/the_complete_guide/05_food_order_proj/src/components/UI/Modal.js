import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (p) => {
	return <div className={classes.backdrop} onClick={p.onClose} />;
};

const ModalOverlay = (p) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{p.children}</div>
		</div>
	);
};

const portalElement = document.getElementById("overlays");

const Modal = (p) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop onClose={p.onClose} />, portalElement)}
			{ReactDOM.createPortal(
				<ModalOverlay>{p.children}</ModalOverlay>,
				portalElement
			)}
		</Fragment>
	);
};

export default Modal;
