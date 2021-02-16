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

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Card(props) {
  var _this = this;

  var vertical = props.vertical,
      loading = props.loading,
      customStyles = props.customStyles,
      size = props.size;
  (0, _react.useEffect)(function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJwcm9wcyIsInZlcnRpY2FsIiwibG9hZGluZyIsImN1c3RvbVN0eWxlcyIsInNpemUiLCJub2RlIiwiY29uc29sZSIsImxvZyIsInN0eWxlcyIsIkxvZyIsInByb3BUeXBlcyIsImJvb2wiLCJvYmplY3QiLCJvbmVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7OztBQUdBLFNBQVNBLElBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUFBOztBQUFBLE1BQ2JDLFFBRGEsR0FDNkJELEtBRDdCLENBQ2JDLFFBRGE7QUFBQSxNQUNIQyxPQURHLEdBQzZCRixLQUQ3QixDQUNIRSxPQURHO0FBQUEsTUFDTUMsWUFETixHQUM2QkgsS0FEN0IsQ0FDTUcsWUFETjtBQUFBLE1BQ29CQyxJQURwQixHQUM2QkosS0FEN0IsQ0FDb0JJLElBRHBCO0FBR3JCLHdCQUFVLFlBQU07QUFDZixRQUFNQyxJQUFJLEdBQUcsOEJBQWMsS0FBZCxDQUFiO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0EsR0FIRDtBQUtBLHNCQUNDO0FBQUEsNEJBQ0M7QUFBTyxNQUFBLElBQUksRUFBQyxVQUFaO0FBQUEsZ0JBQXdCRztBQUF4QixNQURELGVBRUM7QUFBSyxNQUFBLFNBQVMsRUFDYjtBQUNDLG9CQUFZLElBRGI7QUFFQyxvQkFBWVA7QUFGYixxQkFHT0csSUFIUCxHQUdnQixJQUhoQixFQUREO0FBTUUsTUFBQSxLQUFLLEVBQUVELFlBTlQ7QUFBQSw2QkFPQztBQUFRLFFBQUEsT0FBTyxFQUFFO0FBQUEsaUJBQU0sd0JBQVMsZUFBVCxFQUEwQjtBQUFDTSxZQUFBQSxHQUFHLEVBQUU7QUFBTixXQUExQixDQUFOO0FBQUEsU0FBakI7QUFBQTtBQUFBO0FBUEQsTUFGRDtBQUFBLElBREQ7QUFjQTs7QUFFRFYsSUFBSSxDQUFDVyxTQUFMLEdBQWlCO0FBQ2hCVCxFQUFBQSxRQUFRLEVBQUVTLHNCQUFVQyxJQURKO0FBRWhCVCxFQUFBQSxPQUFPLEVBQUVRLHNCQUFVQyxJQUZIO0FBR2hCUixFQUFBQSxZQUFZLEVBQUVPLHNCQUFVRSxNQUhSO0FBSWhCUixFQUFBQSxJQUFJLEVBQUVNLHNCQUFVRyxLQUFWLENBQWdCLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBQWhCO0FBSlUsQ0FBakI7ZUFPZWQsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgcHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5zY3NzXCI7XG5pbXBvcnQge2Rpc3BhdGNofSBmcm9tIFwiLi91dGlscy9kaXNwYXRjaFwiO1xuaW1wb3J0IHtnZXRQYXJlbnROb2RlfSBmcm9tIFwiLi91dGlscy9nZXRQYXJlbnRcIlxuaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmZ1bmN0aW9uIENhcmQgKHByb3BzKSB7XG5cdGNvbnN0IHsgdmVydGljYWwsIGxvYWRpbmcsIGN1c3RvbVN0eWxlcywgc2l6ZSB9ID0gcHJvcHM7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBub2RlID0gZ2V0UGFyZW50Tm9kZSh0aGlzKTtcblx0XHRjb25zb2xlLmxvZyhub2RlKVxuXHR9KVxuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj57c3R5bGVzfTwvc3R5bGU+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17XG5cdFx0XHRcdGNsYXNzbmFtZXMoe1xuXHRcdFx0XHRcdFwic3dmLWNhcmRcIjogdHJ1ZSxcblx0XHRcdFx0XHRcInZlcnRpY2FsXCI6IHZlcnRpY2FsLFxuXHRcdFx0XHRcdFtgLS0ke3NpemV9YF06IHRydWVcblx0XHRcdFx0fSlcblx0XHRcdH0gc3R5bGU9e2N1c3RvbVN0eWxlc30+XG5cdFx0XHRcdDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goXCJURVNUX0RJU1BBVENIXCIsIHtMb2c6IFwiYWRhZHNkYXNkXCJ9KX0+RGlzcGF0Y2g8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpXG59XG5cbkNhcmQucHJvcFR5cGVzID0ge1xuXHR2ZXJ0aWNhbDogcHJvcFR5cGVzLmJvb2wsXG5cdGxvYWRpbmc6IHByb3BUeXBlcy5ib29sLFxuXHRjdXN0b21TdHlsZXM6IHByb3BUeXBlcy5vYmplY3QsXG5cdHNpemU6IHByb3BUeXBlcy5vbmVPZihbXCJzXCIsIFwibVwiLCBcImxcIl0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRcbiJdfQ==