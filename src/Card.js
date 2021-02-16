import classnames from "classnames";
import propTypes from "prop-types";
import "./styles.scss";

function Card (props, children) {
	const { vertical, loading, customStyles, size } = props;

	return (
		<>
			<div className={
				classnames({
					"swf-card": true,
					"vertical": vertical,
					[`--${size}`]: true
				})
			} style={customStyles}>
			ВЫФВЫФВ
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
