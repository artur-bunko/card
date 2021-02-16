"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames2 = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _Preloader = _interopRequireDefault(require("./Preloader"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Card(props, children) {
  var vertical = props.vertical,
      loading = props.loading,
      customStyles = props.customStyles,
      size = props.size;
  if (loading) return /*#__PURE__*/_react["default"].createElement(_Preloader["default"], null);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames2["default"])(_defineProperty({
      "swf-card": true,
      "vertical": vertical
    }, "--".concat(size), true)),
    style: customStyles
  }, /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children)));
}

Card.propTypes = {
  vertical: _propTypes["default"].bool,
  loading: _propTypes["default"].bool,
  customStyles: _propTypes["default"].object,
  size: _propTypes["default"].oneOf(["s", "m", "l"])
};
var _default = Card;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJwcm9wcyIsImNoaWxkcmVuIiwidmVydGljYWwiLCJsb2FkaW5nIiwiY3VzdG9tU3R5bGVzIiwic2l6ZSIsInByb3BUeXBlcyIsImJvb2wiLCJvYmplY3QiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxTQUFTQSxJQUFULENBQWVDLEtBQWYsRUFBc0JDLFFBQXRCLEVBQWdDO0FBQUEsTUFDdkJDLFFBRHVCLEdBQ21CRixLQURuQixDQUN2QkUsUUFEdUI7QUFBQSxNQUNiQyxPQURhLEdBQ21CSCxLQURuQixDQUNiRyxPQURhO0FBQUEsTUFDSkMsWUFESSxHQUNtQkosS0FEbkIsQ0FDSkksWUFESTtBQUFBLE1BQ1VDLElBRFYsR0FDbUJMLEtBRG5CLENBQ1VLLElBRFY7QUFFL0IsTUFBSUYsT0FBSixFQUFhLG9CQUFPLGdDQUFDLHFCQUFELE9BQVA7QUFFYixzQkFDQywrRUFDQztBQUFLLElBQUEsU0FBUyxFQUNiO0FBQ0Msa0JBQVksSUFEYjtBQUVDLGtCQUFZRDtBQUZiLG1CQUdPRyxJQUhQLEdBR2dCLElBSGhCLEVBREQ7QUFNRSxJQUFBLEtBQUssRUFBRUQ7QUFOVCxrQkFPQyxrRUFBR0gsUUFBSCxDQVBELENBREQsQ0FERDtBQWFBOztBQUVERixJQUFJLENBQUNPLFNBQUwsR0FBaUI7QUFDaEJKLEVBQUFBLFFBQVEsRUFBRUksc0JBQVVDLElBREo7QUFFaEJKLEVBQUFBLE9BQU8sRUFBRUcsc0JBQVVDLElBRkg7QUFHaEJILEVBQUFBLFlBQVksRUFBRUUsc0JBQVVFLE1BSFI7QUFJaEJILEVBQUFBLElBQUksRUFBRUMsc0JBQVVHLEtBQVYsQ0FBZ0IsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FBaEI7QUFKVSxDQUFqQjtlQU9lVixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJkUHJlbG9hZGVyIGZyb20gXCIuL1ByZWxvYWRlclwiO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFwiLi9zdHlsZXMuc2Nzc1wiO1xuXG5mdW5jdGlvbiBDYXJkIChwcm9wcywgY2hpbGRyZW4pIHtcblx0Y29uc3QgeyB2ZXJ0aWNhbCwgbG9hZGluZywgY3VzdG9tU3R5bGVzLCBzaXplIH0gPSBwcm9wcztcblx0aWYgKGxvYWRpbmcpIHJldHVybiA8Q2FyZFByZWxvYWRlci8+XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e1xuXHRcdFx0XHRjbGFzc25hbWVzKHtcblx0XHRcdFx0XHRcInN3Zi1jYXJkXCI6IHRydWUsXG5cdFx0XHRcdFx0XCJ2ZXJ0aWNhbFwiOiB2ZXJ0aWNhbCxcblx0XHRcdFx0XHRbYC0tJHtzaXplfWBdOiB0cnVlXG5cdFx0XHRcdH0pXG5cdFx0XHR9IHN0eWxlPXtjdXN0b21TdHlsZXN9PlxuXHRcdFx0XHQ8PntjaGlsZHJlbn08Lz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpXG59XG5cbkNhcmQucHJvcFR5cGVzID0ge1xuXHR2ZXJ0aWNhbDogcHJvcFR5cGVzLmJvb2wsXG5cdGxvYWRpbmc6IHByb3BUeXBlcy5ib29sLFxuXHRjdXN0b21TdHlsZXM6IHByb3BUeXBlcy5vYmplY3QsXG5cdHNpemU6IHByb3BUeXBlcy5vbmVPZihbXCJzXCIsIFwibVwiLCBcImxcIl0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRcbiJdfQ==