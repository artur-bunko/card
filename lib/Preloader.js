"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _constants = require("./constants");

var React = _interopRequireWildcard(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var CardPreloader = /*#__PURE__*/function (_React$Component) {
  _inherits(CardPreloader, _React$Component);

  var _super = _createSuper(CardPreloader);

  function CardPreloader(props) {
    _classCallCheck(this, CardPreloader);

    return _super.call(this, props);
  }

  _createClass(CardPreloader, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("swf-preloader", {
        count: 1,
        items: [{
          width: "100%",
          height: "0.8rem",
          repeat: 3,
          styles: [{
            width: "3.75rem",
            height: "1.2rem"
          }, {
            width: "7.5rem",
            height: "1.2rem",
            marginLeft: "auto"
          }, {
            width: "1.2rem",
            height: "1.2rem",
            minWidth: "1.2rem",
            borderRadius: "0.3rem"
          }]
        }, {
          width: "70%",
          height: "1.7rem",
          repeat: 1
        }, {
          width: "90%",
          height: "0.8rem",
          repeat: 2,
          styles: [{
            width: "1.1rem",
            height: "1.1rem",
            borderRadius: "50%"
          }, {
            width: "3rem",
            margin: "6px 0 0 0"
          }]
        }, {
          width: "4rem",
          height: "0.8rem",
          repeat: 2,
          styles: [{
            margin: "2px"
          }, {
            margin: "2px"
          }]
        }, {
          width: "100%",
          height: "2rem",
          repeat: 2,
          styles: [{
            width: "2rem",
            height: "2rem",
            borderRadius: "50%"
          }, {
            width: "7rem",
            height: "1.2rem",
            marginTop: "10px"
          }]
        }],
        height: "11rem",
        width: _constants.GLOBAL_CONSTANTS.IS_MOBILE ? "280px" : "400px",
        flexDirectionGeneral: "row",
        blur: "3rem"
      });
    }
  }]);

  return CardPreloader;
}(React.Component);

var _default = CardPreloader;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9QcmVsb2FkZXIuanMiXSwibmFtZXMiOlsiQ2FyZFByZWxvYWRlciIsInByb3BzIiwid2lkdGgiLCJoZWlnaHQiLCJyZXBlYXQiLCJzdHlsZXMiLCJtYXJnaW5MZWZ0IiwibWluV2lkdGgiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJHTE9CQUxfQ09OU1RBTlRTIiwiSVNfTU9CSUxFIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLGE7Ozs7O0FBQ0wseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw2QkFDWkEsS0FEWTtBQUVsQjs7OztXQUVELGtCQUFTO0FBQ1IsMEJBQ0M7QUFDQyxRQUFBLEtBQUssRUFBRSxDQURSO0FBRUMsUUFBQSxLQUFLLEVBQUUsQ0FDTjtBQUNDQyxVQUFBQSxLQUFLLEVBQUUsTUFEUjtBQUNnQkMsVUFBQUEsTUFBTSxFQUFFLFFBRHhCO0FBQ2tDQyxVQUFBQSxNQUFNLEVBQUUsQ0FEMUM7QUFDNkNDLFVBQUFBLE1BQU0sRUFBRSxDQUNuRDtBQUFDSCxZQUFBQSxLQUFLLEVBQUUsU0FBUjtBQUFtQkMsWUFBQUEsTUFBTSxFQUFFO0FBQTNCLFdBRG1ELEVBRW5EO0FBQUNELFlBQUFBLEtBQUssRUFBRSxRQUFSO0FBQWtCQyxZQUFBQSxNQUFNLEVBQUUsUUFBMUI7QUFBb0NHLFlBQUFBLFVBQVUsRUFBRTtBQUFoRCxXQUZtRCxFQUduRDtBQUFDSixZQUFBQSxLQUFLLEVBQUUsUUFBUjtBQUFrQkMsWUFBQUEsTUFBTSxFQUFFLFFBQTFCO0FBQW9DSSxZQUFBQSxRQUFRLEVBQUUsUUFBOUM7QUFBd0RDLFlBQUFBLFlBQVksRUFBRTtBQUF0RSxXQUhtRDtBQURyRCxTQURNLEVBT0g7QUFDRk4sVUFBQUEsS0FBSyxFQUFFLEtBREw7QUFDWUMsVUFBQUEsTUFBTSxFQUFFLFFBRHBCO0FBQzhCQyxVQUFBQSxNQUFNLEVBQUU7QUFEdEMsU0FQRyxFQVNIO0FBQ0ZGLFVBQUFBLEtBQUssRUFBRSxLQURMO0FBQ1lDLFVBQUFBLE1BQU0sRUFBRSxRQURwQjtBQUM4QkMsVUFBQUEsTUFBTSxFQUFFLENBRHRDO0FBQ3lDQyxVQUFBQSxNQUFNLEVBQUUsQ0FDbEQ7QUFBQ0gsWUFBQUEsS0FBSyxFQUFFLFFBQVI7QUFBa0JDLFlBQUFBLE1BQU0sRUFBRSxRQUExQjtBQUFvQ0ssWUFBQUEsWUFBWSxFQUFFO0FBQWxELFdBRGtELEVBRWxEO0FBQUNOLFlBQUFBLEtBQUssRUFBRSxNQUFSO0FBQWdCTyxZQUFBQSxNQUFNLEVBQUU7QUFBeEIsV0FGa0Q7QUFEakQsU0FURyxFQWNIO0FBQ0ZQLFVBQUFBLEtBQUssRUFBRSxNQURMO0FBQ2FDLFVBQUFBLE1BQU0sRUFBRSxRQURyQjtBQUMrQkMsVUFBQUEsTUFBTSxFQUFFLENBRHZDO0FBQzBDQyxVQUFBQSxNQUFNLEVBQUUsQ0FDbkQ7QUFBQ0ksWUFBQUEsTUFBTSxFQUFFO0FBQVQsV0FEbUQsRUFFbkQ7QUFBQ0EsWUFBQUEsTUFBTSxFQUFFO0FBQVQsV0FGbUQ7QUFEbEQsU0FkRyxFQW1CSDtBQUNGUCxVQUFBQSxLQUFLLEVBQUUsTUFETDtBQUNhQyxVQUFBQSxNQUFNLEVBQUUsTUFEckI7QUFDNkJDLFVBQUFBLE1BQU0sRUFBRSxDQURyQztBQUN3Q0MsVUFBQUEsTUFBTSxFQUFFLENBQ2pEO0FBQUNILFlBQUFBLEtBQUssRUFBRSxNQUFSO0FBQWdCQyxZQUFBQSxNQUFNLEVBQUUsTUFBeEI7QUFBZ0NLLFlBQUFBLFlBQVksRUFBRTtBQUE5QyxXQURpRCxFQUVqRDtBQUFDTixZQUFBQSxLQUFLLEVBQUUsTUFBUjtBQUFnQkMsWUFBQUEsTUFBTSxFQUFFLFFBQXhCO0FBQWtDTyxZQUFBQSxTQUFTLEVBQUU7QUFBN0MsV0FGaUQ7QUFEaEQsU0FuQkcsQ0FGUjtBQTRCQyxRQUFBLE1BQU0sRUFBQyxPQTVCUjtBQTZCQyxRQUFBLEtBQUssRUFBRUMsNEJBQWlCQyxTQUFqQixHQUE2QixPQUE3QixHQUF1QyxPQTdCL0M7QUE4QkMsUUFBQSxvQkFBb0IsRUFBQyxLQTlCdEI7QUErQkMsUUFBQSxJQUFJLEVBQUM7QUEvQk4sUUFERDtBQW1DQTs7OztFQXpDMEJDLEtBQUssQ0FBQ0MsUzs7ZUE0Q25CZCxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHTE9CQUxfQ09OU1RBTlRTfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBDYXJkUHJlbG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzd2YtcHJlbG9hZGVyXG5cdFx0XHRcdGNvdW50PXsxfVxuXHRcdFx0XHRpdGVtcz17W1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjAuOHJlbVwiLCByZXBlYXQ6IDMsIHN0eWxlczogW1xuXHRcdFx0XHRcdFx0XHR7d2lkdGg6IFwiMy43NXJlbVwiLCBoZWlnaHQ6IFwiMS4ycmVtXCJ9LFxuXHRcdFx0XHRcdFx0XHR7d2lkdGg6IFwiNy41cmVtXCIsIGhlaWdodDogXCIxLjJyZW1cIiwgbWFyZ2luTGVmdDogXCJhdXRvXCJ9LFxuXHRcdFx0XHRcdFx0XHR7d2lkdGg6IFwiMS4ycmVtXCIsIGhlaWdodDogXCIxLjJyZW1cIiwgbWluV2lkdGg6IFwiMS4ycmVtXCIsIGJvcmRlclJhZGl1czogXCIwLjNyZW1cIn1cblx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHR3aWR0aDogXCI3MCVcIiwgaGVpZ2h0OiBcIjEuN3JlbVwiLCByZXBlYXQ6IDFcblx0XHRcdFx0XHR9LCB7XG5cdFx0XHRcdFx0XHR3aWR0aDogXCI5MCVcIiwgaGVpZ2h0OiBcIjAuOHJlbVwiLCByZXBlYXQ6IDIsIHN0eWxlczogW1xuXHRcdFx0XHRcdFx0XHR7d2lkdGg6IFwiMS4xcmVtXCIsIGhlaWdodDogXCIxLjFyZW1cIiwgYm9yZGVyUmFkaXVzOiBcIjUwJVwifSxcblx0XHRcdFx0XHRcdFx0e3dpZHRoOiBcIjNyZW1cIiwgbWFyZ2luOiBcIjZweCAwIDAgMFwifVxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH0sIHtcblx0XHRcdFx0XHRcdHdpZHRoOiBcIjRyZW1cIiwgaGVpZ2h0OiBcIjAuOHJlbVwiLCByZXBlYXQ6IDIsIHN0eWxlczogW1xuXHRcdFx0XHRcdFx0XHR7bWFyZ2luOiBcIjJweFwifSxcblx0XHRcdFx0XHRcdFx0e21hcmdpbjogXCIycHhcIn0sXG5cdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0fSwge1xuXHRcdFx0XHRcdFx0d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMnJlbVwiLCByZXBlYXQ6IDIsIHN0eWxlczogW1xuXHRcdFx0XHRcdFx0XHR7d2lkdGg6IFwiMnJlbVwiLCBoZWlnaHQ6IFwiMnJlbVwiLCBib3JkZXJSYWRpdXM6IFwiNTAlXCJ9LFxuXHRcdFx0XHRcdFx0XHR7d2lkdGg6IFwiN3JlbVwiLCBoZWlnaHQ6IFwiMS4ycmVtXCIsIG1hcmdpblRvcDogXCIxMHB4XCJ9LFxuXHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdF19XG5cdFx0XHRcdGhlaWdodD1cIjExcmVtXCJcblx0XHRcdFx0d2lkdGg9e0dMT0JBTF9DT05TVEFOVFMuSVNfTU9CSUxFID8gXCIyODBweFwiIDogXCI0MDBweFwifVxuXHRcdFx0XHRmbGV4RGlyZWN0aW9uR2VuZXJhbD1cInJvd1wiXG5cdFx0XHRcdGJsdXI9XCIzcmVtXCJcblx0XHRcdC8+XG5cdFx0KVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRQcmVsb2FkZXJcblxuIl19