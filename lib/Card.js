"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames2 = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = _interopRequireDefault(require("./styles.scss"));

var _dispatchDecorator = require("./utils/dispatchDecorator");

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

var Card = (_dec = (0, _dispatchDecorator.dispatch)(), _dec(_class = /*#__PURE__*/function (_Component) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DYXJkLmpzIl0sIm5hbWVzIjpbIkNhcmQiLCJwcm9wcyIsInZlcnRpY2FsIiwibG9hZGluZyIsImN1c3RvbVN0eWxlcyIsInNpemUiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiZGlzcGF0Y2giLCJMb2ciLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJib29sIiwib2JqZWN0Iiwib25lT2YiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBR01BLEksV0FETCxrQzs7Ozs7QUFFQSxnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDZCQUNaQSxLQURZO0FBRWxCOzs7O1dBRUQsa0JBQVM7QUFBQTs7QUFBQSx3QkFDMEMsS0FBS0EsS0FEL0M7QUFBQSxVQUNBQyxRQURBLGVBQ0FBLFFBREE7QUFBQSxVQUNVQyxPQURWLGVBQ1VBLE9BRFY7QUFBQSxVQUNtQkMsWUFEbkIsZUFDbUJBLFlBRG5CO0FBQUEsVUFDaUNDLElBRGpDLGVBQ2lDQSxJQURqQztBQUdSQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLTixLQUFqQjtBQUVBLFVBQUlFLE9BQUosRUFBYSxvQkFBTyxxQkFBQyxxQkFBRCxLQUFQO0FBRWIsMEJBQ0M7QUFBQSxnQ0FDQztBQUFPLFVBQUEsSUFBSSxFQUFDLFVBQVo7QUFBQSxvQkFBd0JLO0FBQXhCLFVBREQsZUFFQztBQUFLLFVBQUEsU0FBUyxFQUNiO0FBQ0Msd0JBQVksSUFEYjtBQUVDLHdCQUFZTjtBQUZiLHlCQUdPRyxJQUhQLEdBR2dCLElBSGhCLEVBREQ7QUFNRSxVQUFBLEtBQUssRUFBRUQsWUFOVDtBQUFBLGlDQU9DO0FBQVEsWUFBQSxPQUFPLEVBQUU7QUFBQSxxQkFBTSxLQUFJLENBQUNILEtBQUwsQ0FBV1EsUUFBWCxDQUFvQixlQUFwQixFQUFxQztBQUFDQyxnQkFBQUEsR0FBRyxFQUFFO0FBQU4sZUFBckMsQ0FBTjtBQUFBLGFBQWpCO0FBQUE7QUFBQTtBQVBELFVBRkQ7QUFBQSxRQUREO0FBY0E7Ozs7RUExQmlCQyxnQjtBQTZCbkJYLElBQUksQ0FBQ1ksU0FBTCxHQUFpQjtBQUNoQlYsRUFBQUEsUUFBUSxFQUFFVSxzQkFBVUMsSUFESjtBQUVoQlYsRUFBQUEsT0FBTyxFQUFFUyxzQkFBVUMsSUFGSDtBQUdoQlQsRUFBQUEsWUFBWSxFQUFFUSxzQkFBVUUsTUFIUjtBQUloQlQsRUFBQUEsSUFBSSxFQUFFTyxzQkFBVUcsS0FBVixDQUFnQixDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFoQixDQUpVO0FBS2hCTixFQUFBQSxRQUFRLEVBQUVHLHNCQUFVSTtBQUxKLENBQWpCO2VBUWVoQixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBwcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLnNjc3NcIjtcbmltcG9ydCB7ZGlzcGF0Y2h9IGZyb20gXCIuL3V0aWxzL2Rpc3BhdGNoRGVjb3JhdG9yXCJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJkUHJlbG9hZGVyIGZyb20gXCIuL1ByZWxvYWRlclwiO1xuXG5AZGlzcGF0Y2goKVxuY2xhc3MgQ2FyZCBleHRlbmRzIENvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgdmVydGljYWwsIGxvYWRpbmcsIGN1c3RvbVN0eWxlcywgc2l6ZSB9ID0gdGhpcy5wcm9wcztcblxuXHRcdGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xuXG5cdFx0aWYgKGxvYWRpbmcpIHJldHVybiA8Q2FyZFByZWxvYWRlci8+XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PD5cblx0XHRcdFx0PHN0eWxlIHR5cGU9XCJ0ZXh0L2Nzc1wiPntzdHlsZXN9PC9zdHlsZT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1xuXHRcdFx0XHRcdGNsYXNzbmFtZXMoe1xuXHRcdFx0XHRcdFx0XCJzd2YtY2FyZFwiOiB0cnVlLFxuXHRcdFx0XHRcdFx0XCJ2ZXJ0aWNhbFwiOiB2ZXJ0aWNhbCxcblx0XHRcdFx0XHRcdFtgLS0ke3NpemV9YF06IHRydWVcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9IHN0eWxlPXtjdXN0b21TdHlsZXN9PlxuXHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5kaXNwYXRjaChcIlRFU1RfRElTUEFUQ0hcIiwge0xvZzogXCJhZGFkc2Rhc2RcIn0pfT5EaXNwYXRjaDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvPlxuXHRcdClcblx0fVxufVxuXG5DYXJkLnByb3BUeXBlcyA9IHtcblx0dmVydGljYWw6IHByb3BUeXBlcy5ib29sLFxuXHRsb2FkaW5nOiBwcm9wVHlwZXMuYm9vbCxcblx0Y3VzdG9tU3R5bGVzOiBwcm9wVHlwZXMub2JqZWN0LFxuXHRzaXplOiBwcm9wVHlwZXMub25lT2YoW1wic1wiLCBcIm1cIiwgXCJsXCJdKSxcblx0ZGlzcGF0Y2g6IHByb3BUeXBlcy5mdW5jXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRcbiJdfQ==