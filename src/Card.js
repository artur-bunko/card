import classnames from "classnames";
import React from "react";
import CardPreloader from "./Preloader";
import propTypes from "prop-types";
import "./styles.scss";

function Card (props, children) {
	const { vertical, loading, customStyles, size } = props;
	if (loading) return <CardPreloader/>

	return (
		<>
			<div className={
				classnames({
					"swf-card": true,
					"vertical": vertical,
					[`--${size}`]: true
				})
			} style={customStyles}>
				<>{children}</>
			</div>
		</>
	)
}

Card.propTypes = {
	vertical: propTypes.bool,
	loading: propTypes.bool,
	customStyles: propTypes.object,
	size: propTypes.oneOf(["s", "m", "l"])
}

export default Card
