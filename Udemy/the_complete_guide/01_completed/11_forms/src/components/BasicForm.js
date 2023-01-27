import useInput from "../hooks/use-input";

const BasicForm = (props) => {
	const {
		value: enterFirstName,
		isValid: enteredFirstNameIsValid,
		hasError: firstNameHasError,
		valueChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler,
		reset: resetFirstNameInput,
	} = useInput((v) => v.trim() !== "");

	const {
		value: enterLastName,
		isValid: enteredLastNameIsValid,
		hasError: lastNameHasError,
		valueChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler,
		reset: resetLastNameInput,
	} = useInput((v) => v.trim() !== "");

	const {
		value: enterEmail,
		isValid: enteredEmailIsValid,
		hasError: emailHasError,
		valueChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler,
		reset: resetEmailInput,
	} = useInput((v) => v.includes("@"));

	// LOGIC
	let formIsValid = false;

	if (
		enteredFirstNameIsValid &&
		enteredLastNameIsValid &&
		enteredEmailIsValid
	) {
		formIsValid = true;
	}

	const formSubmissionHandler = (e) => {
		e.preventDefault();

		if (
			!enteredFirstNameIsValid ||
			!enteredLastNameIsValid ||
			!enteredEmailIsValid
		) {
			return;
		}
	};

	// CSS LOGIC
	const firstNameInputClasses = firstNameHasError
		? "form-control invalid"
		: "form-control";

	const lastNameInputClasses = lastNameHasError
		? "form-control invalid"
		: "form-control";

	const emailInputClasses = emailHasError
		? "form-control invalid"
		: "form-control";

	return (
		<form>
			<div className="control-group">
				<div className={firstNameInputClasses}>
					<label htmlFor="name">First Name</label>
					<input
						type="text"
						id="name"
						onChange={firstNameChangeHandler}
						onBlur={firstNameBlurHandler}
						value={enterFirstName}
					/>
				</div>
				<div className={lastNameInputClasses}>
					<label htmlFor="name">Last Name</label>
					<input
						type="text"
						id="name"
						onChange={lastNameChangeHandler}
						onBlur={lastNameBlurHandler}
						value={enterLastName}
					/>
				</div>
			</div>
			<div className={emailInputClasses}>
				<label htmlFor="name">E-Mail Address</label>
				<input
					type="email"
					id="name"
					onChange={emailChangeHandler}
					onBlur={emailBlurHandler}
					value={enterEmail}
				/>
			</div>
			<div className="form-actions">
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	);
};

export default BasicForm;
