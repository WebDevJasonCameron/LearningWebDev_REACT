import React, { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

import classes from "./Header.module.css";

const Header = (p) => {
	return (
		<React.Fragment>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				<HeaderCartButton onClick={p.onShowCart} />
			</header>
			<div className={classes["main-image"]}>
				<img src={mealsImage} alt="A table full of delicious food!" />
			</div>
		</React.Fragment>
	);
};

export default Header;
