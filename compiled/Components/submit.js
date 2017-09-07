"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Submit = function (_React$Component) {
  _inherits(Submit, _React$Component);

  function Submit(props) {
    _classCallCheck(this, Submit);

    var _this = _possibleConstructorReturn(this, (Submit.__proto__ || Object.getPrototypeOf(Submit)).call(this, props));

    console.log(props, "submit props");
    _this.state = {
      value: ''
    };
    return _this;
  }

  _createClass(Submit, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "search-bar form-inline" },
        "Click to see messages",
        React.createElement(
          "button",
          { className: "btn hidden-sm-down", onClick: this.props.onClick },
          React.createElement("span", { className: "glyphicon glyphicon-search" })
        )
      );
    }
  }]);

  return Submit;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvc3VibWl0LmpzeCJdLCJuYW1lcyI6WyJTdWJtaXQiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJzdGF0ZSIsInZhbHVlIiwib25DbGljayIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE07OztBQUNKLGtCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0hBQ1hBLEtBRFc7O0FBRWpCQyxZQUFRQyxHQUFSLENBQVlGLEtBQVosRUFBbUIsY0FBbkI7QUFDQSxVQUFLRyxLQUFMLEdBQWE7QUFDWEMsYUFBTztBQURJLEtBQWI7QUFIaUI7QUFNcEI7Ozs7NkJBRVc7QUFDUCxhQUNHO0FBQUE7QUFBQSxVQUFLLFdBQVUsd0JBQWY7QUFBQTtBQUVFO0FBQUE7QUFBQSxZQUFRLFdBQVUsb0JBQWxCLEVBQXVDLFNBQVMsS0FBS0osS0FBTCxDQUFXSyxPQUEzRDtBQUNHLHdDQUFNLFdBQVUsNEJBQWhCO0FBREg7QUFGRixPQURIO0FBUUE7Ozs7RUFsQmdCQyxNQUFNQyxTIiwiZmlsZSI6InN1Ym1pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFN1Ym1pdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnNvbGUubG9nKHByb3BzLCBcInN1Ym1pdCBwcm9wc1wiKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmFsdWU6ICcnXG4gICAgfVxufVxuXG4gICAgcmVuZGVyKCl7XG4gICAgXHRyZXR1cm4gKFxuICAgICAgXHRcdDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWJhciBmb3JtLWlubGluZVwiPlxuICAgICAgXHRcdFx0Q2xpY2sgdG8gc2VlIG1lc3NhZ2VzXG4gICAgICAgIFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBoaWRkZW4tc20tZG93blwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25DbGlja30+XG4gICAgICAgICAgXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2hcIj48L3NwYW4+XG4gICAgICAgIFx0XHQ8L2J1dHRvbj5cbiAgICAgIFx0XHQ8L2Rpdj5cbiAgICBcdCk7XG4gICAgfVxuIH0iXX0=