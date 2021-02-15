import classnames from "classnames";
import * as React from "react";
import CardPreloader from "./Preloader";
import styles from "./styles.scss";
import propTypes from "prop-types";

class Card extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { vertical, loading, customStyles, size } = this.props;
		if (loading) return <CardPreloader/>

		return (
			<React.Fragment>
				<style type="text/css">{styles}</style>
				<div className={
					classnames({
						"swf-card": true,
						"vertical": vertical,
						[`--${size}`]: true
					})
				} style={customStyles}>
					<React.Fragment>{this.props.children}</React.Fragment>
				</div>
			</React.Fragment>
		)
	}
}

Card.propTypes = {
	vertical: propTypes.bool,
	loading: propTypes.bool,
	customStyles: propTypes.object,
	size: propTypes.oneOf(["s", "m", "l"])
}

export default Card
