"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames2 = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles.scss"));

var _dispatch = require("./utils/dispatch");

var _react = require("react");

var _getParent = require("./utils/getParent");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Card(props) {
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
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        onClick: function onClick() {
          return (0, _dispatch.dispatch)("TEST_DISPATCH", {
            Log: "adadsdasd"
          });
        },
        children: "Dispatch"
      })
    })]
  });
}

Card.propTypes = {
  vertical: _propTypes["default"].bool,
  loading: _propTypes["default"].bool,
  customStyles: _propTypes["default"].object,
  size: _propTypes["default"].oneOf(["s", "m", "l"])
};
Card = (0, _getParent.getParentNode)()(Card);
var _default = Card;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJwcm9wcyIsInZlcnRpY2FsIiwibG9hZGluZyIsImN1c3RvbVN0eWxlcyIsInNpemUiLCJzdHlsZXMiLCJMb2ciLCJwcm9wVHlwZXMiLCJib29sIiwib2JqZWN0Iiwib25lT2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFHQSxTQUFTQSxJQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQSxNQUNiQyxRQURhLEdBQzZCRCxLQUQ3QixDQUNiQyxRQURhO0FBQUEsTUFDSEMsT0FERyxHQUM2QkYsS0FEN0IsQ0FDSEUsT0FERztBQUFBLE1BQ01DLFlBRE4sR0FDNkJILEtBRDdCLENBQ01HLFlBRE47QUFBQSxNQUNvQkMsSUFEcEIsR0FDNkJKLEtBRDdCLENBQ29CSSxJQURwQjtBQUdyQixzQkFDQztBQUFBLDRCQUNDO0FBQU8sTUFBQSxJQUFJLEVBQUMsVUFBWjtBQUFBLGdCQUF3QkM7QUFBeEIsTUFERCxlQUVDO0FBQUssTUFBQSxTQUFTLEVBQ2I7QUFDQyxvQkFBWSxJQURiO0FBRUMsb0JBQVlKO0FBRmIscUJBR09HLElBSFAsR0FHZ0IsSUFIaEIsRUFERDtBQU1FLE1BQUEsS0FBSyxFQUFFRCxZQU5UO0FBQUEsNkJBT0M7QUFBUSxRQUFBLE9BQU8sRUFBRTtBQUFBLGlCQUFNLHdCQUFTLGVBQVQsRUFBMEI7QUFBQ0csWUFBQUEsR0FBRyxFQUFFO0FBQU4sV0FBMUIsQ0FBTjtBQUFBLFNBQWpCO0FBQUE7QUFBQTtBQVBELE1BRkQ7QUFBQSxJQUREO0FBY0E7O0FBRURQLElBQUksQ0FBQ1EsU0FBTCxHQUFpQjtBQUNoQk4sRUFBQUEsUUFBUSxFQUFFTSxzQkFBVUMsSUFESjtBQUVoQk4sRUFBQUEsT0FBTyxFQUFFSyxzQkFBVUMsSUFGSDtBQUdoQkwsRUFBQUEsWUFBWSxFQUFFSSxzQkFBVUUsTUFIUjtBQUloQkwsRUFBQUEsSUFBSSxFQUFFRyxzQkFBVUcsS0FBVixDQUFnQixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFoQjtBQUpVLENBQWpCO0FBT0FYLElBQUksR0FBRyxnQ0FBZ0JBLElBQWhCLENBQVA7ZUFFZUEsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XG5pbXBvcnQge2Rpc3BhdGNofSBmcm9tIFwiLi91dGlscy9kaXNwYXRjaFwiO1xuaW1wb3J0IHt1c2VSZWZ9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtnZXRQYXJlbnROb2RlfSBmcm9tIFwiLi91dGlscy9nZXRQYXJlbnRcIlxuXG5cbmZ1bmN0aW9uIENhcmQgKHByb3BzKSB7XG5cdGNvbnN0IHsgdmVydGljYWwsIGxvYWRpbmcsIGN1c3RvbVN0eWxlcywgc2l6ZSB9ID0gcHJvcHM7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntzdHlsZXN9PC9zdHlsZT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtcblx0XHRcdFx0Y2xhc3NuYW1lcyh7XG5cdFx0XHRcdFx0XCJzd2YtY2FyZFwiOiB0cnVlLFxuXHRcdFx0XHRcdFwidmVydGljYWxcIjogdmVydGljYWwsXG5cdFx0XHRcdFx0W2AtLSR7c2l6ZX1gXTogdHJ1ZVxuXHRcdFx0XHR9KVxuXHRcdFx0fSBzdHlsZT17Y3VzdG9tU3R5bGVzfT5cblx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChcIlRFU1RfRElTUEFUQ0hcIiwge0xvZzogXCJhZGFkc2Rhc2RcIn0pfT5EaXNwYXRjaDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdClcbn1cblxuQ2FyZC5wcm9wVHlwZXMgPSB7XG5cdHZlcnRpY2FsOiBwcm9wVHlwZXMuYm9vbCxcblx0bG9hZGluZzogcHJvcFR5cGVzLmJvb2wsXG5cdGN1c3RvbVN0eWxlczogcHJvcFR5cGVzLm9iamVjdCxcblx0c2l6ZTogcHJvcFR5cGVzLm9uZU9mKFtcInNcIiwgXCJtXCIsIFwibFwiXSlcbn1cblxuQ2FyZCA9IGdldFBhcmVudE5vZGUoKShDYXJkKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFxuIl19