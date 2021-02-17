"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames2 = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles.scss"));

var _getParent = require("./utils/getParent");

var _react = require("react");

var _Preloader = _interopRequireDefault(require("./Preloader"));

var _jsxRuntime = require("react/jsx-runtime");

var _dec, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Card = (_dec = (0, _getParent.attachDispatch)(), _dec(_class = /*#__PURE__*/function (_Component) {
  _inherits(Card, _Component);

  var _super = _createSuper(Card);

  function Card(props) {
    _classCallCheck(this, Card);

    return _super.call(this, props);
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          vertical = _this$props.vertical,
          loading = _this$props.loading,
          customStyles = _this$props.customStyles,
          size = _this$props.size;
      console.log(this.props);
      if (loading) return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Preloader["default"], {});
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
              return _this.props.dispatch("TEST_DISPATCH", {
                Log: "adadsdasd"
              });
            },
            children: "Dispatch"
          })
        })]
      });
    }
  }]);

  return Card;
}(_react.Component)) || _class);
Card.propTypes = {
  vertical: _propTypes["default"].bool,
  loading: _propTypes["default"].bool,
  customStyles: _propTypes["default"].object,
  size: _propTypes["default"].oneOf(["s", "m", "l"]),
  dispatch: _propTypes["default"].func
};
var _default = Card;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJwcm9wcyIsInZlcnRpY2FsIiwibG9hZGluZyIsImN1c3RvbVN0eWxlcyIsInNpemUiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiZGlzcGF0Y2giLCJMb2ciLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJib29sIiwib2JqZWN0Iiwib25lT2YiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR01BLEksV0FETCxnQzs7Ozs7QUFFQSxnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZCQUNaQSxLQURZO0FBRWxCOzs7O1dBRUQsa0JBQVM7QUFBQTs7QUFBQSx3QkFDMEMsS0FBS0EsS0FEL0M7QUFBQSxVQUNBQyxRQURBLGVBQ0FBLFFBREE7QUFBQSxVQUNVQyxPQURWLGVBQ1VBLE9BRFY7QUFBQSxVQUNtQkMsWUFEbkIsZUFDbUJBLFlBRG5CO0FBQUEsVUFDaUNDLElBRGpDLGVBQ2lDQSxJQURqQztBQUdSQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLTixLQUFqQjtBQUVBLFVBQUlFLE9BQUosRUFBYSxvQkFBTyxxQkFBQyxxQkFBRCxLQUFQO0FBRWIsMEJBQ0M7QUFBQSxnQ0FDQztBQUFPLFVBQUEsSUFBSSxFQUFDLFVBQVo7QUFBQSxvQkFBd0JLO0FBQXhCLFVBREQsZUFFQztBQUFLLFVBQUEsU0FBUyxFQUNiO0FBQ0Msd0JBQVksSUFEYjtBQUVDLHdCQUFZTjtBQUZiLHlCQUdPRyxJQUhQLEdBR2dCLElBSGhCLEVBREQ7QUFNRSxVQUFBLEtBQUssRUFBRUQsWUFOVDtBQUFBLGlDQU9DO0FBQVEsWUFBQSxPQUFPLEVBQUU7QUFBQSxxQkFBTSxLQUFJLENBQUNILEtBQUwsQ0FBV1EsUUFBWCxDQUFvQixlQUFwQixFQUFxQztBQUFDQyxnQkFBQUEsR0FBRyxFQUFFO0FBQU4sZUFBckMsQ0FBTjtBQUFBLGFBQWpCO0FBQUE7QUFBQTtBQVBELFVBRkQ7QUFBQSxRQUREO0FBY0E7Ozs7RUExQmlCQyxnQjtBQTZCbkJYLElBQUksQ0FBQ1ksU0FBTCxHQUFpQjtBQUNoQlYsRUFBQUEsUUFBUSxFQUFFVSxzQkFBVUMsSUFESjtBQUVoQlYsRUFBQUEsT0FBTyxFQUFFUyxzQkFBVUMsSUFGSDtBQUdoQlQsRUFBQUEsWUFBWSxFQUFFUSxzQkFBVUUsTUFIUjtBQUloQlQsRUFBQUEsSUFBSSxFQUFFTyxzQkFBVUcsS0FBVixDQUFnQixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFoQixDQUpVO0FBS2hCTixFQUFBQSxRQUFRLEVBQUVHLHNCQUFVSTtBQUxKLENBQWpCO2VBUWVoQixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLnNjc3NcIjtcbmltcG9ydCB7YXR0YWNoRGlzcGF0Y2h9IGZyb20gXCIuL3V0aWxzL2dldFBhcmVudFwiXG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ2FyZFByZWxvYWRlciBmcm9tIFwiLi9QcmVsb2FkZXJcIjtcblxuQGF0dGFjaERpc3BhdGNoKClcbmNsYXNzIENhcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IHZlcnRpY2FsLCBsb2FkaW5nLCBjdXN0b21TdHlsZXMsIHNpemUgfSA9IHRoaXMucHJvcHM7XG5cblx0XHRjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcblxuXHRcdGlmIChsb2FkaW5nKSByZXR1cm4gPENhcmRQcmVsb2FkZXIvPlxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDw+XG5cdFx0XHRcdDxzdHlsZSB0eXBlPVwidGV4dC9jc3NcIj57c3R5bGVzfTwvc3R5bGU+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtcblx0XHRcdFx0XHRjbGFzc25hbWVzKHtcblx0XHRcdFx0XHRcdFwic3dmLWNhcmRcIjogdHJ1ZSxcblx0XHRcdFx0XHRcdFwidmVydGljYWxcIjogdmVydGljYWwsXG5cdFx0XHRcdFx0XHRbYC0tJHtzaXplfWBdOiB0cnVlXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fSBzdHlsZT17Y3VzdG9tU3R5bGVzfT5cblx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuZGlzcGF0Y2goXCJURVNUX0RJU1BBVENIXCIsIHtMb2c6IFwiYWRhZHNkYXNkXCJ9KX0+RGlzcGF0Y2g8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8Lz5cblx0XHQpXG5cdH1cbn1cblxuQ2FyZC5wcm9wVHlwZXMgPSB7XG5cdHZlcnRpY2FsOiBwcm9wVHlwZXMuYm9vbCxcblx0bG9hZGluZzogcHJvcFR5cGVzLmJvb2wsXG5cdGN1c3RvbVN0eWxlczogcHJvcFR5cGVzLm9iamVjdCxcblx0c2l6ZTogcHJvcFR5cGVzLm9uZU9mKFtcInNcIiwgXCJtXCIsIFwibFwiXSksXG5cdGRpc3BhdGNoOiBwcm9wVHlwZXMuZnVuY1xufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkXG4iXX0=