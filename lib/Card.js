"use strict";

exports.__esModule = true;

var _classnames2 = require("classnames");

var _classnames3 = _interopRequireDefault(_classnames2);

var _react = require("react");

var React = _interopRequireWildcard(_react);

var _Preloader = require("./Preloader");

var _Preloader2 = _interopRequireDefault(_Preloader);

var _styles = require("./styles.scss");

var _styles2 = _interopRequireDefault(_styles);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Card = function (_React$Component) {
	_inherits(Card, _React$Component);

	function Card(props) {
		_classCallCheck(this, Card);

		return _possibleConstructorReturn(this, _React$Component.call(this, props));
	}

	Card.prototype.render = function render() {
		var _classnames;

		var _props = this.props,
		    vertical = _props.vertical,
		    loading = _props.loading,
		    customStyles = _props.customStyles,
		    size = _props.size;

		if (loading) return React.createElement(_Preloader2.default, null);

		return React.createElement(
			React.Fragment,
			null,
			React.createElement(
				"style",
				{ type: "text/css" },
				_styles2.default
			),
			React.createElement(
				"div",
				{ className: (0, _classnames3.default)((_classnames = {
						"swf-card": true,
						"vertical": vertical
					}, _classnames["--" + size] = true, _classnames)), style: customStyles },
				React.createElement(
					React.Fragment,
					null,
					this.props.children
				)
			)
		);
	};

	return Card;
}(React.Component);

Card.propTypes = {
	vertical: _propTypes2.default.bool,
	loading: _propTypes2.default.bool,
	customStyles: _propTypes2.default.object,
	size: _propTypes2.default.oneOf(["s", "m", "l"])
};

exports.default = Card;