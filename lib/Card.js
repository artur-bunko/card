"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames2 = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles.scss"));

var _dispatch = require("./utils/dispatch");

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
        onClick: (0, _dispatch.dispatch)("TEST_DISPATCH", {
          Log: "adadsdasd"
        }),
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
var _default = Card;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJwcm9wcyIsInZlcnRpY2FsIiwibG9hZGluZyIsImN1c3RvbVN0eWxlcyIsInNpemUiLCJzdHlsZXMiLCJMb2ciLCJwcm9wVHlwZXMiLCJib29sIiwib2JqZWN0Iiwib25lT2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxTQUFTQSxJQUFULENBQWVDLEtBQWYsRUFBc0I7QUFBQSxNQUNiQyxRQURhLEdBQzZCRCxLQUQ3QixDQUNiQyxRQURhO0FBQUEsTUFDSEMsT0FERyxHQUM2QkYsS0FEN0IsQ0FDSEUsT0FERztBQUFBLE1BQ01DLFlBRE4sR0FDNkJILEtBRDdCLENBQ01HLFlBRE47QUFBQSxNQUNvQkMsSUFEcEIsR0FDNkJKLEtBRDdCLENBQ29CSSxJQURwQjtBQUdyQixzQkFDQztBQUFBLDRCQUNDO0FBQU8sTUFBQSxJQUFJLEVBQUMsVUFBWjtBQUFBLGdCQUF3QkM7QUFBeEIsTUFERCxlQUVDO0FBQUssTUFBQSxTQUFTLEVBQ2I7QUFDQyxvQkFBWSxJQURiO0FBRUMsb0JBQVlKO0FBRmIscUJBR09HLElBSFAsR0FHZ0IsSUFIaEIsRUFERDtBQU1FLE1BQUEsS0FBSyxFQUFFRCxZQU5UO0FBQUEsNkJBT0M7QUFBUSxRQUFBLE9BQU8sRUFBRSx3QkFBUyxlQUFULEVBQTBCO0FBQUNHLFVBQUFBLEdBQUcsRUFBRTtBQUFOLFNBQTFCLENBQWpCO0FBQUE7QUFBQTtBQVBELE1BRkQ7QUFBQSxJQUREO0FBY0E7O0FBRURQLElBQUksQ0FBQ1EsU0FBTCxHQUFpQjtBQUNoQk4sRUFBQUEsUUFBUSxFQUFFTSxzQkFBVUMsSUFESjtBQUVoQk4sRUFBQUEsT0FBTyxFQUFFSyxzQkFBVUMsSUFGSDtBQUdoQkwsRUFBQUEsWUFBWSxFQUFFSSxzQkFBVUUsTUFIUjtBQUloQkwsRUFBQUEsSUFBSSxFQUFFRyxzQkFBVUcsS0FBVixDQUFnQixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFoQjtBQUpVLENBQWpCO2VBT2VYLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IHByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMuc2Nzc1wiO1xuaW1wb3J0IHtkaXNwYXRjaH0gZnJvbSBcIi4vdXRpbHMvZGlzcGF0Y2hcIjtcblxuZnVuY3Rpb24gQ2FyZCAocHJvcHMpIHtcblx0Y29uc3QgeyB2ZXJ0aWNhbCwgbG9hZGluZywgY3VzdG9tU3R5bGVzLCBzaXplIH0gPSBwcm9wcztcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e3N0eWxlc308L3N0eWxlPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e1xuXHRcdFx0XHRjbGFzc25hbWVzKHtcblx0XHRcdFx0XHRcInN3Zi1jYXJkXCI6IHRydWUsXG5cdFx0XHRcdFx0XCJ2ZXJ0aWNhbFwiOiB2ZXJ0aWNhbCxcblx0XHRcdFx0XHRbYC0tJHtzaXplfWBdOiB0cnVlXG5cdFx0XHRcdH0pXG5cdFx0XHR9IHN0eWxlPXtjdXN0b21TdHlsZXN9PlxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e2Rpc3BhdGNoKFwiVEVTVF9ESVNQQVRDSFwiLCB7TG9nOiBcImFkYWRzZGFzZFwifSl9PkRpc3BhdGNoPC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KVxufVxuXG5DYXJkLnByb3BUeXBlcyA9IHtcblx0dmVydGljYWw6IHByb3BUeXBlcy5ib29sLFxuXHRsb2FkaW5nOiBwcm9wVHlwZXMuYm9vbCxcblx0Y3VzdG9tU3R5bGVzOiBwcm9wVHlwZXMub2JqZWN0LFxuXHRzaXplOiBwcm9wVHlwZXMub25lT2YoW1wic1wiLCBcIm1cIiwgXCJsXCJdKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkXG4iXX0=