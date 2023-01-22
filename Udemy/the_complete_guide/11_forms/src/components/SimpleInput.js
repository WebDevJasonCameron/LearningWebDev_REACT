import { useEffect, useState } from "react";

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState("");
	const [enteredNameTouched, setEnteredNameTouch] = useState(false);
	const [formIsValid, setFormIsValid] = useState(false);

	const enteredNameIsValid = enteredName.trim() !== "";
	const nameInputIsInvlid = !enteredNameIsValid && enteredNameTouched;

	useEffect(() => {
		if (enteredNameIsValid) {
			setFormIsValid(true);
		} else {
			setFormIsValid(false);
		}
	}, [enteredNameIsValid]);

	const nameInputChangeHandler = (e) => {
		setEnteredName(e.target.value);
	};

	const nameInputBlurHandler = (e) => {
		setEnteredNameTouch(true);
	};

	const formSubmissionHandler = (e) => {
		e.preventDefault();

		setEnteredNameTouch(true);

		if (!enteredNameIsValid) {
			return;
		}

		console.log(enteredName);

		// nameInputRef.current.value = "";         // NOT IDEAL, DON'T MANIPULATE THE DOM
		setEnteredName("");
		setEnteredNameTouch(false);
	};

	const nameInputClasses = !nameInputIsInvlid
		? "form-control"
		: "form-control invalid";

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onChange={nameInputChangeHandler}
					onBlur={nameInputBlurHandler}
					value={enteredName}
				/>
				{nameInputIsInvlid && (
					<p className="error-text">Name must not be empty</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
