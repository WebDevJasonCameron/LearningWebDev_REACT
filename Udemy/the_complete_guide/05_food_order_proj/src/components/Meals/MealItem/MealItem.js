import MealItemForm from "./MealItemForm";

import classes from "./MealItem.module.css";

const MealItem = (p) => {
	const price = `$${p.price.toFixed(2)}`;

	return (
		<li className={classes.meal}>
			<div>
				<h3>{p.name}</h3>
				<div className={classes.description}>{p.description}</div>
				<div className={classes.price}>{price}</div>
			</div>
			<div>
				<MealItemForm />
			</div>
		</li>
	);
};

export default MealItem;
