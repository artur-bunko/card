"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getParentNode = getParentNode;

var React = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

var ContainerIdDetector = /*#__PURE__*/function (_React$Component) {
  _inherits(ContainerIdDetector, _React$Component);

  var _super = _createSuper(ContainerIdDetector);

  function ContainerIdDetector() {
    var _this;

    _classCallCheck(this, ContainerIdDetector);

    _this = _super.call(this);
    _this.state = {
      containerId: ""
    };
    return _this;
  }

  _createClass(ContainerIdDetector, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(_reactDom["default"].findDOMNode(this));
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.state.containerId) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {});
      } else {
        return /*#__PURE__*/React.cloneElement(React.Children.only(this.props.children), {});
      }
    }
  }]);

  return ContainerIdDetector;
}(React.Component);

ContainerIdDetector.propTypes = {
  property: React.PropTypes.string.isRequired
};

function getParentNode() {
  var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "containerId";
  return function (Component) {
    return function (props) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(ContainerIdDetector, {
        property: property,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, _objectSpread({}, props))
      });
    };
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9nZXRQYXJlbnQuanMiXSwibmFtZXMiOlsiQ29udGFpbmVySWREZXRlY3RvciIsInN0YXRlIiwiY29udGFpbmVySWQiLCJjb25zb2xlIiwibG9nIiwiUmVhY3RET00iLCJmaW5kRE9NTm9kZSIsIlJlYWN0IiwiY2xvbmVFbGVtZW50IiwiQ2hpbGRyZW4iLCJvbmx5IiwicHJvcHMiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsInByb3BlcnR5IiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImdldFBhcmVudE5vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsbUI7Ozs7O0FBQ0YsaUNBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUFFQyxNQUFBQSxXQUFXLEVBQUU7QUFBZixLQUFiO0FBRlU7QUFHYjs7OztXQUVELDZCQUFvQjtBQUNoQkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLHFCQUFTQyxXQUFULENBQXFCLElBQXJCLENBQVo7QUFDSDs7O1dBRUQsa0JBQVM7QUFDTCxVQUFJLENBQUMsS0FBS0wsS0FBTCxDQUFXQyxXQUFoQixFQUE2QjtBQUN6Qiw0QkFBTyxnQ0FBUDtBQUNILE9BRkQsTUFFTztBQUNILDRCQUFPSyxLQUFLLENBQUNDLFlBQU4sQ0FDSEQsS0FBSyxDQUFDRSxRQUFOLENBQWVDLElBQWYsQ0FBb0IsS0FBS0MsS0FBTCxDQUFXQyxRQUEvQixDQURHLEVBRUgsRUFGRyxDQUFQO0FBSUg7QUFDSjs7OztFQW5CNkJMLEtBQUssQ0FBQ00sUzs7QUFzQnhDYixtQkFBbUIsQ0FBQ2MsU0FBcEIsR0FBZ0M7QUFDNUJDLEVBQUFBLFFBQVEsRUFBRVIsS0FBSyxDQUFDUyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkM7QUFETCxDQUFoQzs7QUFHTyxTQUFTQyxhQUFULEdBQWlEO0FBQUEsTUFBMUJKLFFBQTBCLHVFQUFmLGFBQWU7QUFDcEQsU0FBTyxVQUFDRixTQUFEO0FBQUEsV0FBZSxVQUFDRixLQUFEO0FBQUEsMEJBQ2xCLHFCQUFDLG1CQUFEO0FBQXFCLFFBQUEsUUFBUSxFQUFFSSxRQUEvQjtBQUFBLCtCQUNJLHFCQUFDLFNBQUQsb0JBQWVKLEtBQWY7QUFESixRQURrQjtBQUFBLEtBQWY7QUFBQSxHQUFQO0FBSUgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5cbmNsYXNzIENvbnRhaW5lcklkRGV0ZWN0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0geyBjb250YWluZXJJZDogXCJcIiB9O1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zb2xlLmxvZyhSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5jb250YWluZXJJZCkge1xuICAgICAgICAgICAgcmV0dXJuIDxzcGFuIC8+O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChcbiAgICAgICAgICAgICAgICBSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pLFxuICAgICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5Db250YWluZXJJZERldGVjdG9yLnByb3BUeXBlcyA9IHtcbiAgICBwcm9wZXJ0eTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkXG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShwcm9wZXJ0eSA9IFwiY29udGFpbmVySWRcIikge1xuICAgIHJldHVybiAoQ29tcG9uZW50KSA9PiAocHJvcHMpID0+XG4gICAgICAgIDxDb250YWluZXJJZERldGVjdG9yIHByb3BlcnR5PXtwcm9wZXJ0eX0+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgPC9Db250YWluZXJJZERldGVjdG9yPlxufSJdfQ==