import { useRef } from 'react'

import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (p) => {

	const amountInputRef = useRef();


	const submitHandler = (e) => {
		e.preventDefault();


	}

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					id: "amount",
					type: "number",
					min: "1",
					max: "5",blank
					step: "1",
					defaultValue: "1",
				}}
			/>
			<button>+ Add</button>
		</form>
	);
};

export default MealItemForm;
