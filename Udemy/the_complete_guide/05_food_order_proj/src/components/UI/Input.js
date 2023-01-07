import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((p, ref) => {
	return (
		<div className={classes.input}>
			<label htmlFor={p.input.id}>{p.label}</label>
			<input ref={...p.input} />
		</div>
	);
});

export default Input;
