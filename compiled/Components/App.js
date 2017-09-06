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

    console.log(props, "app props");
    _this.componentDidMount = _this.componentDidMount.bind(_this);

    _this.state = {
      selected: "",
      messages: []
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var context = this;
      $.ajax({
        // This is the url you should use to communicate with the parse API server.
        url: "http://parse.la.hackreactor.com/chatterbox/classes/messages",
        type: 'GET',
        data: 'order=-createdAt',
        headers: {
          'X-Parse-Application-Id': '676a1e781a66c09718a32a0221ea3a23a9080272',
          'X-Parse-REST-API-Key': '848f43ff2d1f6d372a9779c6be185d11f18cc183'
        },
        contentType: 'application/json',
        success: function success(data) {
          console.log('chatterbox: Message sent');
          //console.log(, "data i")
          console.log(data.results, "data in search api");
          // var messageArr = [];
          // for ( var i = 0; i < data.results.length; i ++) {
          //   // string for username and test
          //   var userName = data.results[i].username;
          //   var text = data.results[i].text;
          //   var time = data.results[i].updatedAt;
          //   messageArr.push([userName,text,time]);
          //   //this.state.messages.push([userName, text, time])
          // }
          // console.log(messageArr, "messAr")
          // console.log(<App/>, "app")
          // // make set State
          context.setState({
            messages: data.results
          });
        },

        error: function error(data) {
          // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
          console.error('chatterbox: Failed to send message', data);
        }

      });
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
            React.createElement(Submit, { onClick: this.componentDidMount })
          )
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-7" },
            React.createElement(MessageList, { messages: this.state.messages })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnREaWRNb3VudCIsImJpbmQiLCJzdGF0ZSIsInNlbGVjdGVkIiwibWVzc2FnZXMiLCJjb250ZXh0IiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiZGF0YSIsImhlYWRlcnMiLCJjb250ZW50VHlwZSIsInN1Y2Nlc3MiLCJyZXN1bHRzIiwic2V0U3RhdGUiLCJlcnJvciIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSwwR0FDVkEsS0FEVTs7QUFFaEJDLFlBQVFDLEdBQVIsQ0FBWUYsS0FBWixFQUFtQixXQUFuQjtBQUNGLFVBQUtHLGlCQUFMLEdBQXlCLE1BQUtBLGlCQUFMLENBQXVCQyxJQUF2QixPQUF6Qjs7QUFFRSxVQUFLQyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVUsRUFEQztBQUVYQyxnQkFBVTtBQUZDLEtBQWI7QUFMZ0I7QUFTakI7Ozs7d0NBRWtCO0FBQ2xCLFVBQUlDLFVBQVUsSUFBZDtBQUNBQyxRQUFFQyxJQUFGLENBQU87QUFDTjtBQUNFQyxhQUFLLDZEQUZEO0FBR0pDLGNBQU0sS0FIRjtBQUlKQyxjQUFNLGtCQUpGO0FBS0pDLGlCQUFTO0FBQ1Asb0NBQTBCLDBDQURuQjtBQUVULGtDQUF3QjtBQUZmLFNBTEw7QUFTSkMscUJBQWEsa0JBVFQ7QUFVSkMsaUJBQVMsaUJBQVVILElBQVYsRUFBZ0I7QUFDdkJaLGtCQUFRQyxHQUFSLENBQVksMEJBQVo7QUFDQTtBQUNBRCxrQkFBUUMsR0FBUixDQUFZVyxLQUFLSSxPQUFqQixFQUEwQixvQkFBMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQVQsa0JBQVFVLFFBQVIsQ0FBaUI7QUFDaEJYLHNCQUFVTSxLQUFLSTtBQURDLFdBQWpCO0FBR0QsU0E3Qkc7O0FBK0JKRSxlQUFPLGVBQVVOLElBQVYsRUFBZ0I7QUFDckI7QUFDQVosa0JBQVFrQixLQUFSLENBQWMsb0NBQWQsRUFBb0ROLElBQXBEO0FBQ0Q7O0FBbENHLE9BQVA7QUFxQ0E7Ozs2QkFRUztBQUNOLGFBQ0E7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxzQkFBZjtBQUNFLGdDQUFDLE1BQUQsSUFBUyxTQUFTLEtBQUtWLGlCQUF2QjtBQURGO0FBREYsU0FERjtBQU1FO0FBQUE7QUFBQSxZQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsVUFBZjtBQUNFLGdDQUFDLFdBQUQsSUFBYSxVQUFVLEtBQUtFLEtBQUwsQ0FBV0UsUUFBbEM7QUFERixXQURGO0FBSUU7QUFBQTtBQUFBLGNBQUssV0FBVSxVQUFmO0FBQ0UsZ0NBQUMsV0FBRDtBQURGO0FBSkY7QUFORixPQURBO0FBaUJEOzs7O0VBN0VhYSxNQUFNQyxTIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc29sZS5sb2cocHJvcHMsIFwiYXBwIHByb3BzXCIpXG4gXHR0aGlzLmNvbXBvbmVudERpZE1vdW50ID0gdGhpcy5jb21wb25lbnREaWRNb3VudC5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWQ6IFwiXCIsXG4gICAgICBtZXNzYWdlczogW10sXG4gICBcdH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gIFx0dmFyIGNvbnRleHQgPSB0aGlzO1xuICBcdCQuYWpheCh7XG4gICAgLy8gVGhpcyBpcyB0aGUgdXJsIHlvdSBzaG91bGQgdXNlIHRvIGNvbW11bmljYXRlIHdpdGggdGhlIHBhcnNlIEFQSSBzZXJ2ZXIuXG4gICAgICB1cmw6IFwiaHR0cDovL3BhcnNlLmxhLmhhY2tyZWFjdG9yLmNvbS9jaGF0dGVyYm94L2NsYXNzZXMvbWVzc2FnZXNcIixcbiAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgZGF0YTogJ29yZGVyPS1jcmVhdGVkQXQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnWC1QYXJzZS1BcHBsaWNhdGlvbi1JZCc6ICc2NzZhMWU3ODFhNjZjMDk3MThhMzJhMDIyMWVhM2EyM2E5MDgwMjcyJyxcbiAgICAgICdYLVBhcnNlLVJFU1QtQVBJLUtleSc6ICc4NDhmNDNmZjJkMWY2ZDM3MmE5Nzc5YzZiZTE4NWQxMWYxOGNjMTgzJyxcbiAgICAgIH0sXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NoYXR0ZXJib3g6IE1lc3NhZ2Ugc2VudCcpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCwgXCJkYXRhIGlcIilcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5yZXN1bHRzLCBcImRhdGEgaW4gc2VhcmNoIGFwaVwiKTtcbiAgICAgICAgLy8gdmFyIG1lc3NhZ2VBcnIgPSBbXTtcbiAgICAgICAgLy8gZm9yICggdmFyIGkgPSAwOyBpIDwgZGF0YS5yZXN1bHRzLmxlbmd0aDsgaSArKykge1xuICAgICAgICAvLyAgIC8vIHN0cmluZyBmb3IgdXNlcm5hbWUgYW5kIHRlc3RcbiAgICAgICAgLy8gICB2YXIgdXNlck5hbWUgPSBkYXRhLnJlc3VsdHNbaV0udXNlcm5hbWU7XG4gICAgICAgIC8vICAgdmFyIHRleHQgPSBkYXRhLnJlc3VsdHNbaV0udGV4dDtcbiAgICAgICAgLy8gICB2YXIgdGltZSA9IGRhdGEucmVzdWx0c1tpXS51cGRhdGVkQXQ7XG4gICAgICAgIC8vICAgbWVzc2FnZUFyci5wdXNoKFt1c2VyTmFtZSx0ZXh0LHRpbWVdKTtcbiAgICAgICAgLy8gICAvL3RoaXMuc3RhdGUubWVzc2FnZXMucHVzaChbdXNlck5hbWUsIHRleHQsIHRpbWVdKVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG1lc3NhZ2VBcnIsIFwibWVzc0FyXCIpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKDxBcHAvPiwgXCJhcHBcIilcbiAgICAgICAgLy8gLy8gbWFrZSBzZXQgU3RhdGVcbiAgICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XG4gICAgICAgIFx0bWVzc2FnZXM6IGRhdGEucmVzdWx0c1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIC8vIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL2NvbnNvbGUuZXJyb3JcbiAgICAgICAgY29uc29sZS5lcnJvcignY2hhdHRlcmJveDogRmFpbGVkIHRvIHNlbmQgbWVzc2FnZScsIGRhdGEpO1xuICAgICAgfVxuXG4gICAgfSk7XG4gIH1cbiAgXG5cblxuXHRcblxuXG5cbiAgICByZW5kZXIoKXtcbiAgICBcdCByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgb2Zmc2V0LW1kLTNcIj5cbiAgICAgICAgICAgIDxTdWJtaXQgIG9uQ2xpY2s9e3RoaXMuY29tcG9uZW50RGlkTW91bnR9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgICAgPE1lc3NhZ2VMaXN0IG1lc3NhZ2VzPXt0aGlzLnN0YXRlLm1lc3NhZ2VzfS8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuICAgICAgICAgICAgPE1lc3NhZ2VMaXN0Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICAgIH1cbn1cblxuXG5cbiJdfQ==