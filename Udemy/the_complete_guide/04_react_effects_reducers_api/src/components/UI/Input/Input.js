import React from "react";

import classes from "./Input.module.css";

const Input = (p) => {
	return (
		<div
			className={`${classes.control} ${
				p.isValid === false ? classes.invalid : ""
			}`}
		>
			<label htmlFor={p.id}>{p.label}</label>
			<input
				type={p.type}
				id={p.id}
				value={p.value}
				onChange={p.onChange}
				onBlur={p.onBlur}
			/>
		</div>
	);
};

export default Input;
