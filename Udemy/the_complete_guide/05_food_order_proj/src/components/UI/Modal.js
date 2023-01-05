import { Fragment } from "react";
import { ReactDOM } from "react";

import classes from "./Modal.module.css";

const Backdrop = (p) => {
	return <div className={classes.backdrop} />;
};

const ModalOverlay = (p) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{p.children}</div>
		</div>
	);
};

const Modal = (p) => {
	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop />)}
			{ReactDOM.createPortal(<ModalOverlay>{p.children}</ModalOverlay>)}
		</Fragment>
	);
};

export default Modal;
