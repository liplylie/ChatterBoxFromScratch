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
    _this.onClickEvent = _this.onClickEvent.bind(_this);

    _this.state = {
      selected: "",
      messages: [1, 2, 3]
    };
    return _this;
  }

  _createClass(App, [{
    key: "onClickEvent",
    value: function onClickEvent() {
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
            React.createElement(Submit, { onClick: this.onClickEvent })
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
            React.createElement(MessageList, { messages: this.state.messages })
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJvbkNsaWNrRXZlbnQiLCJiaW5kIiwic3RhdGUiLCJzZWxlY3RlZCIsIm1lc3NhZ2VzIiwiY29udGV4dCIsIiQiLCJhamF4IiwidXJsIiwidHlwZSIsImRhdGEiLCJoZWFkZXJzIiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwicmVzdWx0cyIsInNldFN0YXRlIiwiZXJyb3IiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUEsMEdBQ1ZBLEtBRFU7O0FBRWhCQyxZQUFRQyxHQUFSLENBQVlGLEtBQVosRUFBbUIsV0FBbkI7QUFDRixVQUFLRyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCOztBQUVFLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxnQkFBVSxFQURDO0FBRVhDLGdCQUFVLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMO0FBRkMsS0FBYjtBQUxnQjtBQVNqQjs7OzttQ0FFYTtBQUNiLFVBQUlDLFVBQVUsSUFBZDtBQUNBQyxRQUFFQyxJQUFGLENBQU87QUFDTjtBQUNFQyxhQUFLLDZEQUZEO0FBR0pDLGNBQU0sS0FIRjtBQUlKQyxjQUFNLGtCQUpGO0FBS0pDLGlCQUFTO0FBQ1Asb0NBQTBCLDBDQURuQjtBQUVULGtDQUF3QjtBQUZmLFNBTEw7QUFTSkMscUJBQWEsa0JBVFQ7QUFVSkMsaUJBQVMsaUJBQVVILElBQVYsRUFBZ0I7QUFDdkJaLGtCQUFRQyxHQUFSLENBQVksMEJBQVo7QUFDQTtBQUNBRCxrQkFBUUMsR0FBUixDQUFZVyxLQUFLSSxPQUFqQixFQUEwQixvQkFBMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQVQsa0JBQVFVLFFBQVIsQ0FBaUI7QUFDaEJYLHNCQUFVTSxLQUFLSTtBQURDLFdBQWpCO0FBR0QsU0E3Qkc7O0FBK0JKRSxlQUFPLGVBQVVOLElBQVYsRUFBZ0I7QUFDckI7QUFDQVosa0JBQVFrQixLQUFSLENBQWMsb0NBQWQsRUFBb0ROLElBQXBEO0FBQ0Q7O0FBbENHLE9BQVA7QUFxQ0E7Ozs2QkFRUztBQUNOLGFBQ0E7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSxRQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxzQkFBZjtBQUNFLGdDQUFDLE1BQUQsSUFBUyxTQUFTLEtBQUtWLFlBQXZCO0FBREY7QUFERixTQURGO0FBTUU7QUFBQTtBQUFBLFlBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxVQUFmO0FBQ0UsZ0NBQUMsV0FBRCxJQUFhLFVBQVUsS0FBS0UsS0FBTCxDQUFXRSxRQUFsQztBQURGLFdBREY7QUFJRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFVBQWY7QUFDRSxnQ0FBQyxXQUFELElBQWEsVUFBVSxLQUFLRixLQUFMLENBQVdFLFFBQWxDO0FBREY7QUFKRjtBQU5GLE9BREE7QUFpQkQ7Ozs7RUE3RWFhLE1BQU1DLFMiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zb2xlLmxvZyhwcm9wcywgXCJhcHAgcHJvcHNcIilcbiBcdHRoaXMub25DbGlja0V2ZW50ID0gdGhpcy5vbkNsaWNrRXZlbnQuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkOiBcIlwiLFxuICAgICAgbWVzc2FnZXM6IFsxLDIsM10sXG4gICBcdH1cbiAgfVxuXG4gIG9uQ2xpY2tFdmVudCgpe1xuICBcdHZhciBjb250ZXh0ID0gdGhpcztcbiAgXHQkLmFqYXgoe1xuICAgIC8vIFRoaXMgaXMgdGhlIHVybCB5b3Ugc2hvdWxkIHVzZSB0byBjb21tdW5pY2F0ZSB3aXRoIHRoZSBwYXJzZSBBUEkgc2VydmVyLlxuICAgICAgdXJsOiBcImh0dHA6Ly9wYXJzZS5sYS5oYWNrcmVhY3Rvci5jb20vY2hhdHRlcmJveC9jbGFzc2VzL21lc3NhZ2VzXCIsXG4gICAgICB0eXBlOiAnR0VUJyxcbiAgICAgIGRhdGE6ICdvcmRlcj0tY3JlYXRlZEF0JyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ1gtUGFyc2UtQXBwbGljYXRpb24tSWQnOiAnNjc2YTFlNzgxYTY2YzA5NzE4YTMyYTAyMjFlYTNhMjNhOTA4MDI3MicsXG4gICAgICAnWC1QYXJzZS1SRVNULUFQSS1LZXknOiAnODQ4ZjQzZmYyZDFmNmQzNzJhOTc3OWM2YmUxODVkMTFmMThjYzE4MycsXG4gICAgICB9LFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGF0dGVyYm94OiBNZXNzYWdlIHNlbnQnKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygsIFwiZGF0YSBpXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEucmVzdWx0cywgXCJkYXRhIGluIHNlYXJjaCBhcGlcIik7XG4gICAgICAgIC8vIHZhciBtZXNzYWdlQXJyID0gW107XG4gICAgICAgIC8vIGZvciAoIHZhciBpID0gMDsgaSA8IGRhdGEucmVzdWx0cy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgLy8gICAvLyBzdHJpbmcgZm9yIHVzZXJuYW1lIGFuZCB0ZXN0XG4gICAgICAgIC8vICAgdmFyIHVzZXJOYW1lID0gZGF0YS5yZXN1bHRzW2ldLnVzZXJuYW1lO1xuICAgICAgICAvLyAgIHZhciB0ZXh0ID0gZGF0YS5yZXN1bHRzW2ldLnRleHQ7XG4gICAgICAgIC8vICAgdmFyIHRpbWUgPSBkYXRhLnJlc3VsdHNbaV0udXBkYXRlZEF0O1xuICAgICAgICAvLyAgIG1lc3NhZ2VBcnIucHVzaChbdXNlck5hbWUsdGV4dCx0aW1lXSk7XG4gICAgICAgIC8vICAgLy90aGlzLnN0YXRlLm1lc3NhZ2VzLnB1c2goW3VzZXJOYW1lLCB0ZXh0LCB0aW1lXSlcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhtZXNzYWdlQXJyLCBcIm1lc3NBclwiKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyg8QXBwLz4sIFwiYXBwXCIpXG4gICAgICAgIC8vIC8vIG1ha2Ugc2V0IFN0YXRlXG4gICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xuICAgICAgICBcdG1lc3NhZ2VzOiBkYXRhLnJlc3VsdHNcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAvLyBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9jb25zb2xlLmVycm9yXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NoYXR0ZXJib3g6IEZhaWxlZCB0byBzZW5kIG1lc3NhZ2UnLCBkYXRhKTtcbiAgICAgIH1cblxuICAgIH0pO1xuICB9XG4gIFxuXG5cblx0XG5cblxuXG4gICAgcmVuZGVyKCl7XG4gICAgXHQgcmV0dXJuKFxuICAgICAgPGRpdj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG9mZnNldC1tZC0zXCI+XG4gICAgICAgICAgICA8U3VibWl0ICBvbkNsaWNrPXt0aGlzLm9uQ2xpY2tFdmVudH0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03XCI+XG4gICAgICAgICAgICA8TWVzc2FnZUxpc3QgbWVzc2FnZXM9e3RoaXMuc3RhdGUubWVzc2FnZXN9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgICAgICA8TWVzc2FnZUxpc3QgbWVzc2FnZXM9e3RoaXMuc3RhdGUubWVzc2FnZXN9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICAgIH1cbn1cblxuXG5cbiJdfQ==