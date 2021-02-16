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

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Card(props, children) {
  var vertical = props.vertical,
      loading = props.loading,
      customStyles = props.customStyles,
      size = props.size;
  if (loading) return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Preloader["default"], {});
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames2["default"])(_defineProperty({
        "swf-card": true,
        "vertical": vertical
      }, "--".concat(size), true)),
      style: customStyles,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: children
      })
    })
  });
}

Card.propTypes = {
  vertical: _propTypes["default"].bool,
  loading: _propTypes["default"].bool,
  customStyles: _propTypes["default"].object,
  size: _propTypes["default"].oneOf(["s", "m", "l"])
};
var _default = Card;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJwcm9wcyIsImNoaWxkcmVuIiwidmVydGljYWwiLCJsb2FkaW5nIiwiY3VzdG9tU3R5bGVzIiwic2l6ZSIsInByb3BUeXBlcyIsImJvb2wiLCJvYmplY3QiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLFNBQVNBLElBQVQsQ0FBZUMsS0FBZixFQUFzQkMsUUFBdEIsRUFBZ0M7QUFBQSxNQUN2QkMsUUFEdUIsR0FDbUJGLEtBRG5CLENBQ3ZCRSxRQUR1QjtBQUFBLE1BQ2JDLE9BRGEsR0FDbUJILEtBRG5CLENBQ2JHLE9BRGE7QUFBQSxNQUNKQyxZQURJLEdBQ21CSixLQURuQixDQUNKSSxZQURJO0FBQUEsTUFDVUMsSUFEVixHQUNtQkwsS0FEbkIsQ0FDVUssSUFEVjtBQUUvQixNQUFJRixPQUFKLEVBQWEsb0JBQU8scUJBQUMscUJBQUQsS0FBUDtBQUViLHNCQUNDO0FBQUEsMkJBQ0M7QUFBSyxNQUFBLFNBQVMsRUFDYjtBQUNDLG9CQUFZLElBRGI7QUFFQyxvQkFBWUQ7QUFGYixxQkFHT0csSUFIUCxHQUdnQixJQUhoQixFQUREO0FBTUUsTUFBQSxLQUFLLEVBQUVELFlBTlQ7QUFBQSw2QkFPQztBQUFBLGtCQUFHSDtBQUFIO0FBUEQ7QUFERCxJQUREO0FBYUE7O0FBRURGLElBQUksQ0FBQ08sU0FBTCxHQUFpQjtBQUNoQkosRUFBQUEsUUFBUSxFQUFFSSxzQkFBVUMsSUFESjtBQUVoQkosRUFBQUEsT0FBTyxFQUFFRyxzQkFBVUMsSUFGSDtBQUdoQkgsRUFBQUEsWUFBWSxFQUFFRSxzQkFBVUUsTUFIUjtBQUloQkgsRUFBQUEsSUFBSSxFQUFFQyxzQkFBVUcsS0FBVixDQUFnQixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFoQjtBQUpVLENBQWpCO2VBT2VWLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IENhcmRQcmVsb2FkZXIgZnJvbSBcIi4vUHJlbG9hZGVyXCI7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5zY3NzXCI7XG5cbmZ1bmN0aW9uIENhcmQgKHByb3BzLCBjaGlsZHJlbikge1xuXHRjb25zdCB7IHZlcnRpY2FsLCBsb2FkaW5nLCBjdXN0b21TdHlsZXMsIHNpemUgfSA9IHByb3BzO1xuXHRpZiAobG9hZGluZykgcmV0dXJuIDxDYXJkUHJlbG9hZGVyLz5cblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17XG5cdFx0XHRcdGNsYXNzbmFtZXMoe1xuXHRcdFx0XHRcdFwic3dmLWNhcmRcIjogdHJ1ZSxcblx0XHRcdFx0XHRcInZlcnRpY2FsXCI6IHZlcnRpY2FsLFxuXHRcdFx0XHRcdFtgLS0ke3NpemV9YF06IHRydWVcblx0XHRcdFx0fSlcblx0XHRcdH0gc3R5bGU9e2N1c3RvbVN0eWxlc30+XG5cdFx0XHRcdDw+e2NoaWxkcmVufTwvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdClcbn1cblxuQ2FyZC5wcm9wVHlwZXMgPSB7XG5cdHZlcnRpY2FsOiBwcm9wVHlwZXMuYm9vbCxcblx0bG9hZGluZzogcHJvcFR5cGVzLmJvb2wsXG5cdGN1c3RvbVN0eWxlczogcHJvcFR5cGVzLm9iamVjdCxcblx0c2l6ZTogcHJvcFR5cGVzLm9uZU9mKFtcInNcIiwgXCJtXCIsIFwibFwiXSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxuIl19