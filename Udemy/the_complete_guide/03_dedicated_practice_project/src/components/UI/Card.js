import React from "react";

import classes from "./Card.module.css";

const Card = (p) => {
	return <div className={`${classes.card} ${p.className}`}>{p.children}</div>;
};

export default Card;
