import classes from "./Input.module.css";

const Input = (p) => {
	return (
		<div className={classes.input}>
			<label htmlFor={p.input.id}>{p.label}</label>
			<input {...p.input} />
		</div>
	);
};

export default Input;
