"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames2 = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles.scss"));

var _dispatch = require("./utils/dispatch");

var _getParent = require("./utils/getParent");

var _reactProduction = require("react/cjs/react.production.min");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Card(props) {
  var _this = this;

  var vertical = props.vertical,
      loading = props.loading,
      customStyles = props.customStyles,
      size = props.size;
  (0, _reactProduction.useEffect)(function () {
    var node = (0, _getParent.getParentNode)(_this);
    console.log(node);
  });
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
var _default = Card;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJwcm9wcyIsInZlcnRpY2FsIiwibG9hZGluZyIsImN1c3RvbVN0eWxlcyIsInNpemUiLCJub2RlIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsIkxvZyIsInByb3BUeXBlcyIsImJvb2wiLCJvYmplY3QiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUdBLFNBQVNBLElBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUFBLE1BQ2JDLFFBRGEsR0FDNkJELEtBRDdCLENBQ2JDLFFBRGE7QUFBQSxNQUNIQyxPQURHLEdBQzZCRixLQUQ3QixDQUNIRSxPQURHO0FBQUEsTUFDTUMsWUFETixHQUM2QkgsS0FEN0IsQ0FDTUcsWUFETjtBQUFBLE1BQ29CQyxJQURwQixHQUM2QkosS0FEN0IsQ0FDb0JJLElBRHBCO0FBR3JCLGtDQUFVLFlBQU07QUFDZixRQUFNQyxJQUFJLEdBQUcsOEJBQWMsS0FBZCxDQUFiO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0EsR0FIRDtBQUtBLHNCQUNDO0FBQUEsNEJBQ0M7QUFBTyxNQUFBLElBQUksRUFBQyxVQUFaO0FBQUEsZ0JBQXdCRztBQUF4QixNQURELGVBRUM7QUFBSyxNQUFBLFNBQVMsRUFDYjtBQUNDLG9CQUFZLElBRGI7QUFFQyxvQkFBWVA7QUFGYixxQkFHT0csSUFIUCxHQUdnQixJQUhoQixFQUREO0FBTUUsTUFBQSxLQUFLLEVBQUVELFlBTlQ7QUFBQSw2QkFPQztBQUFRLFFBQUEsT0FBTyxFQUFFO0FBQUEsaUJBQU0sd0JBQVMsZUFBVCxFQUEwQjtBQUFDTSxZQUFBQSxHQUFHLEVBQUU7QUFBTixXQUExQixDQUFOO0FBQUEsU0FBakI7QUFBQTtBQUFBO0FBUEQsTUFGRDtBQUFBLElBREQ7QUFjQTs7QUFFRFYsSUFBSSxDQUFDVyxTQUFMLEdBQWlCO0FBQ2hCVCxFQUFBQSxRQUFRLEVBQUVTLHNCQUFVQyxJQURKO0FBRWhCVCxFQUFBQSxPQUFPLEVBQUVRLHNCQUFVQyxJQUZIO0FBR2hCUixFQUFBQSxZQUFZLEVBQUVPLHNCQUFVRSxNQUhSO0FBSWhCUixFQUFBQSxJQUFJLEVBQUVNLHNCQUFVRyxLQUFWLENBQWdCLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBQWhCO0FBSlUsQ0FBakI7ZUFPZWQsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XG5pbXBvcnQge2Rpc3BhdGNofSBmcm9tIFwiLi91dGlscy9kaXNwYXRjaFwiO1xuaW1wb3J0IHtnZXRQYXJlbnROb2RlfSBmcm9tIFwiLi91dGlscy9nZXRQYXJlbnRcIlxuaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdC9janMvcmVhY3QucHJvZHVjdGlvbi5taW5cIjtcblxuXG5mdW5jdGlvbiBDYXJkIChwcm9wcykge1xuXHRjb25zdCB7IHZlcnRpY2FsLCBsb2FkaW5nLCBjdXN0b21TdHlsZXMsIHNpemUgfSA9IHByb3BzO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Y29uc3Qgbm9kZSA9IGdldFBhcmVudE5vZGUodGhpcyk7XG5cdFx0Y29uc29sZS5sb2cobm9kZSlcblx0fSlcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8c3R5bGUgdHlwZT1cInRleHQvY3NzXCI+e3N0eWxlc308L3N0eWxlPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e1xuXHRcdFx0XHRjbGFzc25hbWVzKHtcblx0XHRcdFx0XHRcInN3Zi1jYXJkXCI6IHRydWUsXG5cdFx0XHRcdFx0XCJ2ZXJ0aWNhbFwiOiB2ZXJ0aWNhbCxcblx0XHRcdFx0XHRbYC0tJHtzaXplfWBdOiB0cnVlXG5cdFx0XHRcdH0pXG5cdFx0XHR9IHN0eWxlPXtjdXN0b21TdHlsZXN9PlxuXHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKFwiVEVTVF9ESVNQQVRDSFwiLCB7TG9nOiBcImFkYWRzZGFzZFwifSl9PkRpc3BhdGNoPC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KVxufVxuXG5DYXJkLnByb3BUeXBlcyA9IHtcblx0dmVydGljYWw6IHByb3BUeXBlcy5ib29sLFxuXHRsb2FkaW5nOiBwcm9wVHlwZXMuYm9vbCxcblx0Y3VzdG9tU3R5bGVzOiBwcm9wVHlwZXMub2JqZWN0LFxuXHRzaXplOiBwcm9wVHlwZXMub25lT2YoW1wic1wiLCBcIm1cIiwgXCJsXCJdKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkXG4iXX0=