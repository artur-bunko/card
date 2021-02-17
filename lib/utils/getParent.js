"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attachDispatch = attachDispatch;

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

var DispatchDetector = /*#__PURE__*/function (_React$Component) {
  _inherits(DispatchDetector, _React$Component);

  var _super = _createSuper(DispatchDetector);

  function DispatchDetector() {
    var _this;

    _classCallCheck(this, DispatchDetector);

    _this = _super.call(this);
    _this.state = {
      dispatch: function dispatch() {
        return void 0;
      }
    };
    return _this;
  }

  _createClass(DispatchDetector, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var currentNode = _reactDom["default"].findDOMNode(this);

      console.log({
        currentNode: currentNode
      });

      var dispatch = function dispatch(type, payload) {
        var event = new CustomEvent(type, {
          composed: true,
          bubbles: true,
          cancelable: true,
          detail: {
            payload: _objectSpread(_objectSpread({
              type: type
            }, payload), {}, {
              event: {
                type: type
              }
            })
          }
        });
        currentNode.dispatchEvent(event);
      };

      this.setState({
        dispatch: dispatch
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.cloneElement(React.Children.only(this.props.children), {
        dispatch: this.state.dispatch
      });
    }
  }]);

  return DispatchDetector;
}(React.Component);

function attachDispatch() {
  return function (Component) {
    return function (props) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(DispatchDetector, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, _objectSpread({}, props))
      });
    };
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9nZXRQYXJlbnQuanMiXSwibmFtZXMiOlsiRGlzcGF0Y2hEZXRlY3RvciIsInN0YXRlIiwiZGlzcGF0Y2giLCJjdXJyZW50Tm9kZSIsIlJlYWN0RE9NIiwiZmluZERPTU5vZGUiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsInBheWxvYWQiLCJldmVudCIsIkN1c3RvbUV2ZW50IiwiY29tcG9zZWQiLCJidWJibGVzIiwiY2FuY2VsYWJsZSIsImRldGFpbCIsImRpc3BhdGNoRXZlbnQiLCJzZXRTdGF0ZSIsIlJlYWN0IiwiY2xvbmVFbGVtZW50IiwiQ2hpbGRyZW4iLCJvbmx5IiwicHJvcHMiLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsImF0dGFjaERpc3BhdGNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGdCOzs7OztBQUNGLDhCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFDQSxVQUFLQyxLQUFMLEdBQWE7QUFBRUMsTUFBQUEsUUFBUSxFQUFFO0FBQUEsZUFBTSxLQUFLLENBQVg7QUFBQTtBQUFaLEtBQWI7QUFGVTtBQUdiOzs7O1dBRUQsNkJBQW9CO0FBQ2hCLFVBQU1DLFdBQVcsR0FBR0MscUJBQVNDLFdBQVQsQ0FBcUIsSUFBckIsQ0FBcEI7O0FBRUFDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUNKLFFBQUFBLFdBQVcsRUFBWEE7QUFBRCxPQUFaOztBQUVBLFVBQU1ELFFBQVEsR0FBSSxTQUFaQSxRQUFZLENBQUNNLElBQUQsRUFBT0MsT0FBUCxFQUFtQjtBQUNqQyxZQUFNQyxLQUFLLEdBQUcsSUFBSUMsV0FBSixDQUFnQkgsSUFBaEIsRUFBc0I7QUFDaENJLFVBQUFBLFFBQVEsRUFBRSxJQURzQjtBQUVoQ0MsVUFBQUEsT0FBTyxFQUFFLElBRnVCO0FBR2hDQyxVQUFBQSxVQUFVLEVBQUUsSUFIb0I7QUFJaENDLFVBQUFBLE1BQU0sRUFBRTtBQUNKTixZQUFBQSxPQUFPO0FBQ0hELGNBQUFBLElBQUksRUFBSkE7QUFERyxlQUVBQyxPQUZBO0FBR0hDLGNBQUFBLEtBQUssRUFBRTtBQUNIRixnQkFBQUEsSUFBSSxFQUFKQTtBQURHO0FBSEo7QUFESDtBQUp3QixTQUF0QixDQUFkO0FBZUFMLFFBQUFBLFdBQVcsQ0FBQ2EsYUFBWixDQUEwQk4sS0FBMUI7QUFDSCxPQWpCRDs7QUFtQkEsV0FBS08sUUFBTCxDQUFjO0FBQ1ZmLFFBQUFBLFFBQVEsRUFBUkE7QUFEVSxPQUFkO0FBR0g7OztXQUVELGtCQUFTO0FBQ0wsMEJBQU9nQixLQUFLLENBQUNDLFlBQU4sQ0FDSEQsS0FBSyxDQUFDRSxRQUFOLENBQWVDLElBQWYsQ0FBb0IsS0FBS0MsS0FBTCxDQUFXQyxRQUEvQixDQURHLEVBRUg7QUFBQ3JCLFFBQUFBLFFBQVEsRUFBRSxLQUFLRCxLQUFMLENBQVdDO0FBQXRCLE9BRkcsQ0FBUDtBQUlIOzs7O0VBeEMwQmdCLEtBQUssQ0FBQ00sUzs7QUEyQzlCLFNBQVNDLGNBQVQsR0FBMEI7QUFDN0IsU0FBTyxVQUFDRCxTQUFEO0FBQUEsV0FBZSxVQUFDRixLQUFEO0FBQUEsMEJBQ2xCLHFCQUFDLGdCQUFEO0FBQUEsK0JBQ0kscUJBQUMsU0FBRCxvQkFBZUEsS0FBZjtBQURKLFFBRGtCO0FBQUEsS0FBZjtBQUFBLEdBQVA7QUFJSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcblxuY2xhc3MgRGlzcGF0Y2hEZXRlY3RvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGRpc3BhdGNoOiAoKSA9PiB2b2lkIDAgfTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3QgY3VycmVudE5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh7Y3VycmVudE5vZGV9KVxuXG4gICAgICAgIGNvbnN0IGRpc3BhdGNoID0gICh0eXBlLCBwYXlsb2FkKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBDdXN0b21FdmVudCh0eXBlLCB7XG4gICAgICAgICAgICAgICAgY29tcG9zZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4ucGF5bG9hZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY3VycmVudE5vZGUuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBkaXNwYXRjaFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChcbiAgICAgICAgICAgIFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbiksXG4gICAgICAgICAgICB7ZGlzcGF0Y2g6IHRoaXMuc3RhdGUuZGlzcGF0Y2h9XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXR0YWNoRGlzcGF0Y2goKSB7XG4gICAgcmV0dXJuIChDb21wb25lbnQpID0+IChwcm9wcykgPT5cbiAgICAgICAgPERpc3BhdGNoRGV0ZWN0b3I+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgICAgPC9EaXNwYXRjaERldGVjdG9yPlxufSJdfQ==