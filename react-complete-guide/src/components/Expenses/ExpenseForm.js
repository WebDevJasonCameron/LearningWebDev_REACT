import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
	const [enterTitle, setEnterTitle] = useState("");
	const [enterAmount, SetEnterAmount] = useState("");
	const [enterDate, setEnterDate] = useState("");

	const titleChangeHandler = (e) => {
		setEnterTitle(e.target.value);
	};

	const amountChangeHandler = (e) => {
		SetEnterAmount(e.target.value);
	};

	const dateChangeHandler = (e) => {
		setEnterDate(e.target.value);
	};

	return (
		<form>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" onChange={titleChangeHandler} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2020-01-01"
						max="2022-12-31"
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Ad Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
