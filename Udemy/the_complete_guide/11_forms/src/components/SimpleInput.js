import { useEffect, useRef, useState } from "react";

const SimpleInput = (props) => {
	const nameInputRef = useRef();
	const [enteredName, setEnteredName] = useState("");
	const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
	const [enteredNameTouched, setEnteredNameTouch] = useState(false);

	useEffect(() => {
		if (enteredNameIsValid) {
			console.log("name Input is Valid!");
		}
	}, [enteredNameIsValid]);

	const nameInputChangeHandler = (e) => {
		setEnteredName(e.target.value);
	};

	const formSubmissionHandler = (e) => {
		e.preventDefault();

		setEnteredNameTouch(true);

		if (enteredName.trim() === "") {
			setEnteredNameIsValid(false);
			return;
		}

		setEnteredNameIsValid(true);

		console.log(enteredName);
		const enteredValue = nameInputRef.current.value;
		console.log(enteredValue);

		// nameInputRef.current.value = "";         // NOT IDEAL, DON'T MANIPULATE THE DOM
		setEnteredName("");
	};

	const nameInputIsInvlid = !enteredNameIsValid && enteredNameTouched;

	const nameInputClasses = !nameInputIsInvlid
		? "form-control"
		: "form-control invalid";

	return (
		<form onSubmit={formSubmissionHandler}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Your Name</label>
				<input
					ref={nameInputRef}
					type="text"
					id="name"
					onChange={nameInputChangeHandler}
					value={enteredName}
				/>
				{nameInputIsInvlid && (
					<p className="error-text">Name must not be empty</p>
				)}
			</div>
			<div className="form-actions">
				<button>Submit</button>
			</div>
		</form>
	);
};

export default SimpleInput;
