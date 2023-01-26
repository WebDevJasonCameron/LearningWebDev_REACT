import { useState } from "react";

import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
	const {
		value: enteredName,
		isValid: enteredNameIsValid,
		hasError: nameInputHasError,
		valueChangeHandler: nameChangedHandler,
		inputBlurHandler: nameBlurHandler,
		reset: resetNameInput,
	} = useInput((value) => value.trim() !== "");

	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredEmailTouch, setEnteredEmailTouch] = useState("");

	const enterEmailIsValid = enteredEmail.includes("@");
	const enteredEmailIsInvalid = !enterEmailIsValid && enteredEmailTouch;

	let formIsValid = false;

	if (enteredNameIsValid && enterEmailIsValid) {
		formIsValid = true;
	}

	const emailInputChangeHandler = (e) => {
		setEnteredEmail(e.target.value);
	};

	const emailInputBlurHandler = (e) => {
		setEnteredEmailTouch(true);
	};

	const formSubmissionHandler = (e) => {
		e.preventDefault();

		if (!enteredNameIsValid) {
			return;
		}

		console.log(enteredName);

		// nameInputRef.current.value = "";         // NOT IDEAL, DON'T MANIPULATE THE DOM
		resetNameInput();

		setEnteredEmail("");
		setEnteredEmailTouch(false);
	};

	const nameInputClasses = nameInputHasError
		? "form-control"
		: "form-control invalid";

	const emailInputClasses = enteredEmailIsInvalid
		? "form-control invalid"
		: "form-control";

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					type="text"
					id="name"
					onChange={nameChangedHandler}
					onBlur={nameBlurHandler}
					value={enteredName}
				/>
				{nameInputHasError && (
					<p className="error-text">Name must not be empty</p>
				)}
			</div>
			<div className={emailInputClasses}>
				<label htmlFor="email">Your Email</label>
				<input
					type="email"
					id="email"
					onChange={emailInputChangeHandler}
					onBlur={emailInputBlurHandler}
					value={enteredEmail}
				/>
				{enteredEmailIsInvalid && (
					<p className="error-text">Please enter a valid email</p>
				)}
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
