import classnames from "classnames";
import propTypes from "prop-types";
import styles from "./styles.scss";
import {attachDispatch} from "./utils/getParent"
import {Component} from "react";
import CardPreloader from "./Preloader";

@attachDispatch()
class Card extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { vertical, loading, customStyles, size } = this.props;

		console.log(this.props);

		if (loading) return <CardPreloader/>

		return (
			<>
				<style type="text/css">{styles}</style>
				<div className={
					classnames({
						"swf-card": true,
						"vertical": vertical,
						[`--${size}`]: true
					})
				} style={customStyles}>
					<button onClick={() => this.props.dispatch("TEST_DISPATCH", {Log: "adadsdasd"})}>Dispatch</button>
				</div>
			</>
		)
	}
}

Card.propTypes = {
	vertical: propTypes.bool,
	loading: propTypes.bool,
	customStyles: propTypes.object,
	size: propTypes.oneOf(["s", "m", "l"]),
	dispatch: propTypes.func
}

export default Card
