import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

function MealItem({ meal },props) {
	return (
		<li className={classes.meal}>
			<div>
				<h3>{meal.name}</h3>
				<div className={classes.description}>{meal.description}</div>
				<div className={classes.price}>${meal.price.toFixed(2)}</div>
			</div>
			<div>
				<MealItemForm id={props.id} />
			</div>
		</li>
	);
}

export default MealItem;
