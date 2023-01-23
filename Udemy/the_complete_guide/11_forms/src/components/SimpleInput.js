import { useState } from "react";

const SimpleInput = (props) => {
	const [enteredName, setEnteredName] = useState("");
	const [enteredNameTouched, setEnteredNameTouch] = useState(false);

	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredEmailTouch, setEnteredEmailTouch] = useState("");

	const enteredNameIsValid = enteredName.trim() !== "";
	const nameInputIsInvlid = !enteredNameIsValid && enteredNameTouched;

	const enterEmailIsValid = enteredEmail.includes("@");
	const enteredEmailIsInvalid = !enterEmailIsValid && enteredEmailTouch;

	let formIsValid = false;

	if (enteredNameIsValid) {
		formIsValid(true);
	}

	const nameInputChangeHandler = (e) => {
		setEnteredName(e.target.value);
	};

	const emailInputChangeHandler = (e) => {
		setEnteredEmail(e.target.value);
	};

	const nameInputBlurHandler = (e) => {
		setEnteredNameTouch(true);
	};

	const emailInputBlurHandler = (e) => {
		setEnteredEmailTouch(true);
	};

	const formSubmissionHandler = (e) => {
		e.preventDefault();

		setEnteredNameTouch(true);

		if (!enteredNameIsValid && enterEmailIsValid) {
			return;
		}

		console.log(enteredName);

		// nameInputRef.current.value = "";         // NOT IDEAL, DON'T MANIPULATE THE DOM
		setEnteredName("");
		setEnteredNameTouch(false);

		setEnteredEmail("");
		setEnteredEmailTouch(false);
	};

	const nameInputClasses = !nameInputIsInvlid
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
					onChange={nameInputChangeHandler}
					onBlur={nameInputBlurHandler}
					value={enteredName}
				/>
				{nameInputIsInvlid && (
					<p className="error-text">Name must not be empty</p>
				)}
			</div>
			<div className={nameInputClasses}>
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
