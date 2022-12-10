import "./ExpenseItem.css";

function ExpenseItem() {
	return (
		<div className="expense-item">
			<div>March 28th 2001</div>
			<div className="expense-item__description">
				<h2>Car Insurance</h2>
			</div>
			<div className="expense-item__price">$297.53</div>
		</div>
	);
}

export default ExpenseItem;
