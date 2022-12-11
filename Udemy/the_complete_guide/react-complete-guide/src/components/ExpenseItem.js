import "./ExpenseItem.css";

function ExpenseItem() {
	const expenseDate = new Date();
	const expenseTitle = "Car Insurance";
	const expenseAmount = "294.53";
	return (
		<div className="expense-item">
			<div>{expenseDate}</div>
			<div className="expense-item__description">
				<h2>{expenseTitle}</h2>
			</div>
			<div className="expense-item__price">$297.53</div>
		</div>
	);
}

export default ExpenseItem;
