"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.getMessage = _this.getMessage.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "getMessage",
    value: function getMessage() {
      console.log(this.props, "app props");
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "nav",
          { className: "navbar" },
          React.createElement(
            "div",
            { className: "col-md-6 offset-md-3" },
            React.createElement(Submit, { onClick: this.getMessage })
          )
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-7" },
            React.createElement(MessageList, null)
          ),
          React.createElement(
            "div",
            { className: "col-md-5" },
            React.createElement(MessageList, null)
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsImdldE1lc3NhZ2UiLCJiaW5kIiwiY29uc29sZSIsImxvZyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSwwR0FDVkEsS0FEVTs7QUFFaEIsVUFBS0MsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCQyxJQUFoQixPQUFsQjtBQUZnQjtBQUdsQjs7OztpQ0FFYztBQUNYQyxjQUFRQyxHQUFSLENBQVksS0FBS0osS0FBakIsRUFBd0IsV0FBeEI7QUFDQTs7OzZCQUVPO0FBQ04sYUFDQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFFBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLHNCQUFmO0FBQ0UsZ0NBQUMsTUFBRCxJQUFRLFNBQVMsS0FBS0MsVUFBdEI7QUFERjtBQURGLFNBREY7QUFNRTtBQUFBO0FBQUEsWUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFVBQWY7QUFDRSxnQ0FBQyxXQUFEO0FBREYsV0FERjtBQUlFO0FBQUE7QUFBQSxjQUFLLFdBQVUsVUFBZjtBQUNFLGdDQUFDLFdBQUQ7QUFERjtBQUpGO0FBTkYsT0FEQTtBQWlCRDs7OztFQTVCYUksTUFBTUMsUyIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuZ2V0TWVzc2FnZSA9IHRoaXMuZ2V0TWVzc2FnZS5iaW5kKHRoaXMpO1xuXHR9XG5cbiAgICBnZXRNZXNzYWdlKCl7XG4gICAgXHRjb25zb2xlLmxvZyh0aGlzLnByb3BzLCBcImFwcCBwcm9wc1wiKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICBcdCByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cbiAgICAgICAgICAgIDxTdWJtaXQgb25DbGljaz17dGhpcy5nZXRNZXNzYWdlfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTdcIj5cbiAgICAgICAgICAgIDxNZXNzYWdlTGlzdC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuICAgICAgICAgICAgPE1lc3NhZ2VMaXN0Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICAgIH1cbn1cblxuXG5cbiJdfQ==