'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Send = function (_React$Component) {
  _inherits(Send, _React$Component);

  function Send(props) {
    _classCallCheck(this, Send);

    var _this = _possibleConstructorReturn(this, (Send.__proto__ || Object.getPrototypeOf(Send)).call(this, props));

    console.log(props, "send props");
    _this.textInput = _this.textInput.bind(_this);
    _this.clickHandler = _this.clickHandler.bind(_this);
    _this.text = '';
    _this.state = {
      value: ''
    };
    return _this;
  }

  _createClass(Send, [{
    key: 'textInput',
    value: function textInput(event) {
      console.log('Input is ' + event.target.value);
      this.text = event.target.value;
    }
  }, {
    key: 'clickHandler',
    value: function clickHandler() {
      var message = {
        username: "Jordan",
        text: this.text,
        roomname: 'lobby'
      };
      this.props.onClick(message);
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'search-bar form-inline' },
        React.createElement(
          'form',
          null,
          React.createElement('input', { type: 'text', name: 'message', onChange: this.textInput })
        ),
        React.createElement(
          'button',
          { className: 'btn hidden-sm-down', onClick: this.clickHandler },
          React.createElement('span', { className: 'glyphicon glyphicon-search' })
        )
      );
    }
  }]);

  return Send;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvU2VuZC5qc3giXSwibmFtZXMiOlsiU2VuZCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInRleHRJbnB1dCIsImJpbmQiLCJjbGlja0hhbmRsZXIiLCJ0ZXh0Iiwic3RhdGUiLCJ2YWx1ZSIsImV2ZW50IiwidGFyZ2V0IiwibWVzc2FnZSIsInVzZXJuYW1lIiwicm9vbW5hbWUiLCJvbkNsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsSTs7O0FBQ0osZ0JBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0R0FDWEEsS0FEVzs7QUFFakJDLFlBQVFDLEdBQVIsQ0FBWUYsS0FBWixFQUFtQixZQUFuQjtBQUNBLFVBQUtHLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxDQUFlQyxJQUFmLE9BQWpCO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCRCxJQUFsQixPQUFwQjtBQUNBLFVBQUtFLElBQUwsR0FBWSxFQUFaO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU87QUFESSxLQUFiO0FBTmlCO0FBU2xCOzs7OzhCQUVTQyxLLEVBQU87QUFDZlIsY0FBUUMsR0FBUixDQUFZLGNBQWNPLE1BQU1DLE1BQU4sQ0FBYUYsS0FBdkM7QUFDQSxXQUFLRixJQUFMLEdBQVlHLE1BQU1DLE1BQU4sQ0FBYUYsS0FBekI7QUFDRDs7O21DQUVjO0FBQ2IsVUFBSUcsVUFBVTtBQUNaQyxrQkFBVSxRQURFO0FBRVpOLGNBQU0sS0FBS0EsSUFGQztBQUdaTyxrQkFBVTtBQUhFLE9BQWQ7QUFLQSxXQUFLYixLQUFMLENBQVdjLE9BQVgsQ0FBbUJILE9BQW5CO0FBQ0Q7Ozs2QkFFUztBQUNQLGFBQ0c7QUFBQTtBQUFBLFVBQUssV0FBVSx3QkFBZjtBQUVLO0FBQUE7QUFBQTtBQUVHLHlDQUFPLE1BQUssTUFBWixFQUFtQixNQUFLLFNBQXhCLEVBQWtDLFVBQVUsS0FBS1IsU0FBakQ7QUFGSCxTQUZMO0FBT0U7QUFBQTtBQUFBLFlBQVEsV0FBVSxvQkFBbEIsRUFBdUMsU0FBUyxLQUFLRSxZQUFyRDtBQUNHLHdDQUFNLFdBQVUsNEJBQWhCO0FBREg7QUFQRixPQURIO0FBYUE7Ozs7RUF4Q2NVLE1BQU1DLFMiLCJmaWxlIjoiU2VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlbmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zb2xlLmxvZyhwcm9wcywgXCJzZW5kIHByb3BzXCIpO1xuICAgIHRoaXMudGV4dElucHV0ID0gdGhpcy50ZXh0SW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNsaWNrSGFuZGxlciA9IHRoaXMuY2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy50ZXh0ID0gJyc7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZhbHVlOiAnJ1xuICAgIH1cbiAgfVxuXG4gIHRleHRJbnB1dChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdJbnB1dCBpcyAnICsgZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB0aGlzLnRleHQgPSBldmVudC50YXJnZXQudmFsdWU7XG4gIH1cblxuICBjbGlja0hhbmRsZXIoKSB7XG4gICAgdmFyIG1lc3NhZ2UgPSB7XG4gICAgICB1c2VybmFtZTogXCJKb3JkYW5cIixcbiAgICAgIHRleHQ6IHRoaXMudGV4dCxcbiAgICAgIHJvb21uYW1lOiAnbG9iYnknXG4gICAgfTtcbiAgICB0aGlzLnByb3BzLm9uQ2xpY2sobWVzc2FnZSk7XG4gIH1cblxuICAgIHJlbmRlcigpe1xuICAgIFx0cmV0dXJuIChcbiAgICAgIFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1iYXIgZm9ybS1pbmxpbmVcIj5cbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJtZXNzYWdlXCIgb25DaGFuZ2U9e3RoaXMudGV4dElucHV0fS8+XG4gICAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICBcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gaGlkZGVuLXNtLWRvd25cIiBvbkNsaWNrPXt0aGlzLmNsaWNrSGFuZGxlcn0+XG4gICAgICAgICAgXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2hcIj48L3NwYW4+XG4gICAgICAgIFx0XHQ8L2J1dHRvbj5cbiAgICAgIFx0XHQ8L2Rpdj5cbiAgICBcdCk7XG4gICAgfVxuIH0iXX0=