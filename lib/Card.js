"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames2 = _interopRequireDefault(require("classnames"));

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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames2["default"])(_defineProperty({
        "swf-card": true,
        "vertical": vertical
      }, "--".concat(size), true)),
      style: customStyles,
      children: "\u0412\u042B\u0424\u0412\u042B\u0424\u0412"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJwcm9wcyIsImNoaWxkcmVuIiwidmVydGljYWwiLCJsb2FkaW5nIiwiY3VzdG9tU3R5bGVzIiwic2l6ZSIsInByb3BUeXBlcyIsImJvb2wiLCJvYmplY3QiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLFNBQVNBLElBQVQsQ0FBZUMsS0FBZixFQUFzQkMsUUFBdEIsRUFBZ0M7QUFBQSxNQUN2QkMsUUFEdUIsR0FDbUJGLEtBRG5CLENBQ3ZCRSxRQUR1QjtBQUFBLE1BQ2JDLE9BRGEsR0FDbUJILEtBRG5CLENBQ2JHLE9BRGE7QUFBQSxNQUNKQyxZQURJLEdBQ21CSixLQURuQixDQUNKSSxZQURJO0FBQUEsTUFDVUMsSUFEVixHQUNtQkwsS0FEbkIsQ0FDVUssSUFEVjtBQUcvQixzQkFDQztBQUFBLDJCQUNDO0FBQUssTUFBQSxTQUFTLEVBQ2I7QUFDQyxvQkFBWSxJQURiO0FBRUMsb0JBQVlIO0FBRmIscUJBR09HLElBSFAsR0FHZ0IsSUFIaEIsRUFERDtBQU1FLE1BQUEsS0FBSyxFQUFFRCxZQU5UO0FBQUE7QUFBQTtBQURELElBREQ7QUFhQTs7QUFFREwsSUFBSSxDQUFDTyxTQUFMLEdBQWlCO0FBQ2hCSixFQUFBQSxRQUFRLEVBQUVJLHNCQUFVQyxJQURKO0FBRWhCSixFQUFBQSxPQUFPLEVBQUVHLHNCQUFVQyxJQUZIO0FBR2hCSCxFQUFBQSxZQUFZLEVBQUVFLHNCQUFVRSxNQUhSO0FBSWhCSCxFQUFBQSxJQUFJLEVBQUVDLHNCQUFVRyxLQUFWLENBQWdCLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBQWhCO0FBSlUsQ0FBakI7ZUFPZVYsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgXCIuL3N0eWxlcy5zY3NzXCI7XG5cbmZ1bmN0aW9uIENhcmQgKHByb3BzLCBjaGlsZHJlbikge1xuXHRjb25zdCB7IHZlcnRpY2FsLCBsb2FkaW5nLCBjdXN0b21TdHlsZXMsIHNpemUgfSA9IHByb3BzO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtcblx0XHRcdFx0Y2xhc3NuYW1lcyh7XG5cdFx0XHRcdFx0XCJzd2YtY2FyZFwiOiB0cnVlLFxuXHRcdFx0XHRcdFwidmVydGljYWxcIjogdmVydGljYWwsXG5cdFx0XHRcdFx0W2AtLSR7c2l6ZX1gXTogdHJ1ZVxuXHRcdFx0XHR9KVxuXHRcdFx0fSBzdHlsZT17Y3VzdG9tU3R5bGVzfT5cblx0XHRcdNCS0KvQpNCS0KvQpNCSXG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KVxufVxuXG5DYXJkLnByb3BUeXBlcyA9IHtcblx0dmVydGljYWw6IHByb3BUeXBlcy5ib29sLFxuXHRsb2FkaW5nOiBwcm9wVHlwZXMuYm9vbCxcblx0Y3VzdG9tU3R5bGVzOiBwcm9wVHlwZXMub2JqZWN0LFxuXHRzaXplOiBwcm9wVHlwZXMub25lT2YoW1wic1wiLCBcIm1cIiwgXCJsXCJdKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkXG4iXX0=