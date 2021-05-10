import React from "react";
import classes from "./Header.module.css";

import foodImage from "../../assets/food.jpg";

function Header(props) {
	return (
		<React.Fragment>
			<header className={classes.header}>
				<h1>React Meals</h1>
				<button>Cart</button>
			</header>
			<div className={classes["main-image"]}>
				<img src={foodImage} alt='Food' />
			</div>
		</React.Fragment>
	);
}

export default Header;
