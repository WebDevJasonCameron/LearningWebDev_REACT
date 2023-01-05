import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type == "ADD") {
		const updatedItems = state.items.concat(action.item);
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.amount;
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}

	return defaultCartState;
};

const CartProvider = (p) => {
	const [cartState, despatchCartAction] = useReducer(
		cartReducer,
		defaultCartState
	);

	const addItemToCartHandler = (item) => {
		despatchCartAction({ type: "ADD", item: item });
	};

	const removeItemFromCartHandler = (id) => {
		despatchCartAction({ type: "REMOVE", id: id });
	};

	const cartContext = {
		items: cartState.items,
		totalAmout: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};
	return (
		<CartContext.Provider value={cartContext}>
			{p.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
