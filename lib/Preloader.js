"use strict";

exports.__esModule = true;

var _constants = require("./constants");

var _react = require("react");

var React = _interopRequireWildcard(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var CardPreloader = function (_React$Component) {
	_inherits(CardPreloader, _React$Component);

	function CardPreloader(props) {
		_classCallCheck(this, CardPreloader);

		return _possibleConstructorReturn(this, _React$Component.call(this, props));
	}

	CardPreloader.prototype.render = function render() {
		return React.createElement("swf-preloader", {
			count: 1,
			items: [{
				width: "100%", height: "0.8rem", repeat: 3, styles: [{ width: "3.75rem", height: "1.2rem" }, { width: "7.5rem", height: "1.2rem", marginLeft: "auto" }, { width: "1.2rem", height: "1.2rem", minWidth: "1.2rem", borderRadius: "0.3rem" }]
			}, {
				width: "70%", height: "1.7rem", repeat: 1
			}, {
				width: "90%", height: "0.8rem", repeat: 2, styles: [{ width: "1.1rem", height: "1.1rem", borderRadius: "50%" }, { width: "3rem", margin: "6px 0 0 0" }]
			}, {
				width: "4rem", height: "0.8rem", repeat: 2, styles: [{ margin: "2px" }, { margin: "2px" }]
			}, {
				width: "100%", height: "2rem", repeat: 2, styles: [{ width: "2rem", height: "2rem", borderRadius: "50%" }, { width: "7rem", height: "1.2rem", marginTop: "10px" }]
			}],
			height: "11rem",
			width: _constants.GLOBAL_CONSTANTS.IS_MOBILE ? "280px" : "400px",
			flexDirectionGeneral: "row",
			blur: "3rem"
		});
	};

	return CardPreloader;
}(React.Component);

exports.default = CardPreloader;