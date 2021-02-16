"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames2 = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles.scss"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Card(props, children) {
  var vertical = props.vertical,
      loading = props.loading,
      customStyles = props.customStyles,
      size = props.size;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
      type: "text/css",
      children: _styles["default"]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _classnames2["default"])(_defineProperty({
        "swf-card": true,
        "vertical": vertical
      }, "--".concat(size), true)),
      style: customStyles,
      children: children
    })]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJwcm9wcyIsImNoaWxkcmVuIiwidmVydGljYWwiLCJsb2FkaW5nIiwiY3VzdG9tU3R5bGVzIiwic2l6ZSIsInN0eWxlcyIsInByb3BUeXBlcyIsImJvb2wiLCJvYmplY3QiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOzs7Ozs7OztBQUVBLFNBQVNBLElBQVQsQ0FBZUMsS0FBZixFQUFzQkMsUUFBdEIsRUFBZ0M7QUFBQSxNQUN2QkMsUUFEdUIsR0FDbUJGLEtBRG5CLENBQ3ZCRSxRQUR1QjtBQUFBLE1BQ2JDLE9BRGEsR0FDbUJILEtBRG5CLENBQ2JHLE9BRGE7QUFBQSxNQUNKQyxZQURJLEdBQ21CSixLQURuQixDQUNKSSxZQURJO0FBQUEsTUFDVUMsSUFEVixHQUNtQkwsS0FEbkIsQ0FDVUssSUFEVjtBQUcvQixzQkFDQztBQUFBLDRCQUNDO0FBQU8sTUFBQSxJQUFJLEVBQUMsVUFBWjtBQUFBLGdCQUF3QkM7QUFBeEIsTUFERCxlQUVDO0FBQUssTUFBQSxTQUFTLEVBQ2I7QUFDQyxvQkFBWSxJQURiO0FBRUMsb0JBQVlKO0FBRmIscUJBR09HLElBSFAsR0FHZ0IsSUFIaEIsRUFERDtBQU1FLE1BQUEsS0FBSyxFQUFFRCxZQU5UO0FBQUEsZ0JBT0VIO0FBUEYsTUFGRDtBQUFBLElBREQ7QUFjQTs7QUFFREYsSUFBSSxDQUFDUSxTQUFMLEdBQWlCO0FBQ2hCTCxFQUFBQSxRQUFRLEVBQUVLLHNCQUFVQyxJQURKO0FBRWhCTCxFQUFBQSxPQUFPLEVBQUVJLHNCQUFVQyxJQUZIO0FBR2hCSixFQUFBQSxZQUFZLEVBQUVHLHNCQUFVRSxNQUhSO0FBSWhCSixFQUFBQSxJQUFJLEVBQUVFLHNCQUFVRyxLQUFWLENBQWdCLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBQWhCO0FBSlUsQ0FBakI7ZUFPZVgsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XG5cbmZ1bmN0aW9uIENhcmQgKHByb3BzLCBjaGlsZHJlbikge1xuXHRjb25zdCB7IHZlcnRpY2FsLCBsb2FkaW5nLCBjdXN0b21TdHlsZXMsIHNpemUgfSA9IHByb3BzO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj57c3R5bGVzfTwvc3R5bGU+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17XG5cdFx0XHRcdGNsYXNzbmFtZXMoe1xuXHRcdFx0XHRcdFwic3dmLWNhcmRcIjogdHJ1ZSxcblx0XHRcdFx0XHRcInZlcnRpY2FsXCI6IHZlcnRpY2FsLFxuXHRcdFx0XHRcdFtgLS0ke3NpemV9YF06IHRydWVcblx0XHRcdFx0fSlcblx0XHRcdH0gc3R5bGU9e2N1c3RvbVN0eWxlc30+XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpXG59XG5cbkNhcmQucHJvcFR5cGVzID0ge1xuXHR2ZXJ0aWNhbDogcHJvcFR5cGVzLmJvb2wsXG5cdGxvYWRpbmc6IHByb3BUeXBlcy5ib29sLFxuXHRjdXN0b21TdHlsZXM6IHByb3BUeXBlcy5vYmplY3QsXG5cdHNpemU6IHByb3BUeXBlcy5vbmVPZihbXCJzXCIsIFwibVwiLCBcImxcIl0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRcbiJdfQ==