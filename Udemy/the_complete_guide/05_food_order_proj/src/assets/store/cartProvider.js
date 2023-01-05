import CartContext from "./cart-context";

const CartProvider = (p) => {
	const addItemToCartHandler = (i) => {};
	const removeItemFromCartHandler = (i) => {};

	const cartContext = {
		items: [],
		totalAmout: 0,
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
