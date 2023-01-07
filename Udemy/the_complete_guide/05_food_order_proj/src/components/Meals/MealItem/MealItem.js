import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

import classes from "./MealItem.module.css";

const MealItem = (p) => {
	const cartCtx = useContext(CartContext);
	const price = `$${p.price.toFixed(2)}`;

	const addToCartHandler = (amount) => {
		cartCtx.addItem({
			id: p.id,
			name: p.name,
			amount: amount,
			price: p.price,
		});
	};

	return (
		<li className={classes.meal}>
			<div>
				<h3>{p.name}</h3>
				<div className={classes.description}>{p.description}</div>
				<div className={classes.price}>{price}</div>
			</div>
			<div>
				<MealItemForm ondAddToCart={addToCartHandler} />
			</div>
		</li>
	);
};

export default MealItem;
