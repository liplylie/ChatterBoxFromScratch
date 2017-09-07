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
      messages: []
    };
    _this.onClickEvent = _this.onClickEvent.bind(_this);
    _this.renderByRoom = _this.renderByRoom.bind(_this);
    _this.send = _this.send.bind(_this);
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
    key: "send",
    value: function send(text) {
      var context = this;
      console.log(text, "this is the test bro");

      // POST the message to the server
      $.ajax({
        url: "http://parse.la.hackreactor.com/chatterbox/classes/messages",
        type: 'POST',
        data: JSON.stringify(text),
        success: function success(data) {
          console.log(data, "send data");
          context.setState({
            messages: data.results
          });
        },
        error: function error(_error) {
          console.error('chatterbox: Failed to send message', _error);
        }
      });
    }
  }, {
    key: "renderByRoom",
    value: function renderByRoom() {
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
          var messageArr = [];
          for (var i = 0; i < data.results.length; i++) {
            // string for username and test
            var userName = data.results[i].username;
            var text = data.results[i].text;
            var time = data.results[i].updatedAt;
            messageArr.push([userName, text, time]);
          }
          context.setState({
            messages: messageArr
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
            React.createElement(Submit, { onClick: this.onClickEvent }),
            React.createElement(Send, { onClick: this.send })
          )
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-7" },
            React.createElement(RoomMessages, { messages: this.state.messages, onClick: this.renderByRoom })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJvbkNsaWNrRXZlbnQiLCJiaW5kIiwic3RhdGUiLCJzZWxlY3RlZCIsIm1lc3NhZ2VzIiwicmVuZGVyQnlSb29tIiwic2VuZCIsImNvbnRleHQiLCIkIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhIiwiaGVhZGVycyIsImNvbnRlbnRUeXBlIiwic3VjY2VzcyIsInJlc3VsdHMiLCJzZXRTdGF0ZSIsImVycm9yIiwidGV4dCIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXNzYWdlQXJyIiwiaSIsImxlbmd0aCIsInVzZXJOYW1lIiwidXNlcm5hbWUiLCJ0aW1lIiwidXBkYXRlZEF0IiwicHVzaCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSwwR0FDVkEsS0FEVTs7QUFFaEJDLFlBQVFDLEdBQVIsQ0FBWUYsS0FBWixFQUFtQixXQUFuQjtBQUNGLFVBQUtHLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsT0FBcEI7O0FBRUUsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGdCQUFVLEVBREM7QUFFWEMsZ0JBQVU7QUFGQyxLQUFiO0FBSUEsVUFBS0osWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUNBLFVBQUtJLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkosSUFBbEIsT0FBcEI7QUFDQSxVQUFLSyxJQUFMLEdBQVksTUFBS0EsSUFBTCxDQUFVTCxJQUFWLE9BQVo7QUFYZ0I7QUFZakI7Ozs7bUNBRWE7QUFDYixVQUFJTSxVQUFVLElBQWQ7QUFDQUMsUUFBRUMsSUFBRixDQUFPO0FBQ047QUFDRUMsYUFBSyw2REFGRDtBQUdKQyxjQUFNLEtBSEY7QUFJSkMsY0FBTSxrQkFKRjtBQUtKQyxp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QUFELElBQWMsVUFBVSxLQUFLSixLQUFMLENBQVdFLFFBQW5DLEVBQTZDLFNBQVMsS0FBS0MsWUFBM0Q7QUFERixXQURGO0FBSUU7QUFBQTtBQUFBLGNBQUssV0FBVSxVQUFmO0FBQ0UsZ0NBQUMsV0FBRCxJQUFhLFVBQVUsS0FBS0gsS0FBTCxDQUFXRSxRQUFsQztBQURGO0FBSkY7QUFQRixPQURBO0FBa0JEOzs7O0VBekhhMEIsTUFBTUMsUyIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnNvbGUubG9nKHByb3BzLCBcImFwcCBwcm9wc1wiKVxuIFx0dGhpcy5vbkNsaWNrRXZlbnQgPSB0aGlzLm9uQ2xpY2tFdmVudC5iaW5kKHRoaXMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0ZWQ6IFwiXCIsXG4gICAgICBtZXNzYWdlczogW10sXG4gICBcdH1cbiAgIFx0dGhpcy5vbkNsaWNrRXZlbnQgPSB0aGlzLm9uQ2xpY2tFdmVudC5iaW5kKHRoaXMpO1xuICAgXHR0aGlzLnJlbmRlckJ5Um9vbSA9IHRoaXMucmVuZGVyQnlSb29tLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZW5kID0gdGhpcy5zZW5kLmJpbmQodGhpcylcbiAgfVxuXG4gIG9uQ2xpY2tFdmVudCgpe1xuICBcdHZhciBjb250ZXh0ID0gdGhpcztcbiAgXHQkLmFqYXgoe1xuICAgIC8vIFRoaXMgaXMgdGhlIHVybCB5b3Ugc2hvdWxkIHVzZSB0byBjb21tdW5pY2F0ZSB3aXRoIHRoZSBwYXJzZSBBUEkgc2VydmVyLlxuICAgICAgdXJsOiBcImh0dHA6Ly9wYXJzZS5sYS5oYWNrcmVhY3Rvci5jb20vY2hhdHRlcmJveC9jbGFzc2VzL21lc3NhZ2VzXCIsXG4gICAgICB0eXBlOiAnR0VUJyxcbiAgICAgIGRhdGE6ICdvcmRlcj0tY3JlYXRlZEF0JyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ1gtUGFyc2UtQXBwbGljYXRpb24tSWQnOiAnNjc2YTFlNzgxYTY2YzA5NzE4YTMyYTAyMjFlYTNhMjNhOTA4MDI3MicsXG4gICAgICAnWC1QYXJzZS1SRVNULUFQSS1LZXknOiAnODQ4ZjQzZmYyZDFmNmQzNzJhOTc3OWM2YmUxODVkMTFmMThjYzE4MycsXG4gICAgICB9LFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGF0dGVyYm94OiBNZXNzYWdlIHNlbnQnKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygsIFwiZGF0YSBpXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEucmVzdWx0cywgXCJkYXRhIGluIHNlYXJjaCBhcGlcIik7XG4gICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xuICAgICAgICBcdG1lc3NhZ2VzOiBkYXRhLnJlc3VsdHNcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAvLyBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9jb25zb2xlLmVycm9yXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NoYXR0ZXJib3g6IEZhaWxlZCB0byBzZW5kIG1lc3NhZ2UnLCBkYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlbmQodGV4dCl7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKHRleHQsIFwidGhpcyBpcyB0aGUgdGVzdCBicm9cIilcblxuICAgIC8vIFBPU1QgdGhlIG1lc3NhZ2UgdG8gdGhlIHNlcnZlclxuICAgICQuYWpheCh7XG4gICAgICB1cmw6IFwiaHR0cDovL3BhcnNlLmxhLmhhY2tyZWFjdG9yLmNvbS9jaGF0dGVyYm94L2NsYXNzZXMvbWVzc2FnZXNcIixcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHRleHQpLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSwgXCJzZW5kIGRhdGFcIilcbiAgICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XG4gICAgICAgICAgbWVzc2FnZXM6IGRhdGEucmVzdWx0c1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignY2hhdHRlcmJveDogRmFpbGVkIHRvIHNlbmQgbWVzc2FnZScsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgcmVuZGVyQnlSb29tKCl7XG4gIFx0dmFyIGNvbnRleHQgPSB0aGlzO1xuICBcdCQuYWpheCh7XG4gICAgLy8gVGhpcyBpcyB0aGUgdXJsIHlvdSBzaG91bGQgdXNlIHRvIGNvbW11bmljYXRlIHdpdGggdGhlIHBhcnNlIEFQSSBzZXJ2ZXIuXG4gICAgICB1cmw6IFwiaHR0cDovL3BhcnNlLmxhLmhhY2tyZWFjdG9yLmNvbS9jaGF0dGVyYm94L2NsYXNzZXMvbWVzc2FnZXNcIixcbiAgICAgIHR5cGU6ICdHRVQnLFxuICAgICAgZGF0YTogJ29yZGVyPS1jcmVhdGVkQXQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnWC1QYXJzZS1BcHBsaWNhdGlvbi1JZCc6ICc2NzZhMWU3ODFhNjZjMDk3MThhMzJhMDIyMWVhM2EyM2E5MDgwMjcyJyxcbiAgICAgICdYLVBhcnNlLVJFU1QtQVBJLUtleSc6ICc4NDhmNDNmZjJkMWY2ZDM3MmE5Nzc5YzZiZTE4NWQxMWYxOGNjMTgzJyxcbiAgICAgIH0sXG4gICAgICBjb250ZW50VHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NoYXR0ZXJib3g6IE1lc3NhZ2Ugc2VudCcpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCwgXCJkYXRhIGlcIilcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5yZXN1bHRzLCBcImRhdGEgaW4gc2VhcmNoIGFwaVwiKTtcbiAgICAgICAgdmFyIG1lc3NhZ2VBcnIgPSBbXTtcbiAgICAgICAgZm9yICggdmFyIGkgPSAwOyBpIDwgZGF0YS5yZXN1bHRzLmxlbmd0aDsgaSArKykge1xuICAgICAgICAgIC8vIHN0cmluZyBmb3IgdXNlcm5hbWUgYW5kIHRlc3RcbiAgICAgICAgICB2YXIgdXNlck5hbWUgPSBkYXRhLnJlc3VsdHNbaV0udXNlcm5hbWU7XG4gICAgICAgICAgdmFyIHRleHQgPSBkYXRhLnJlc3VsdHNbaV0udGV4dDtcbiAgICAgICAgICB2YXIgdGltZSA9IGRhdGEucmVzdWx0c1tpXS51cGRhdGVkQXQ7XG4gICAgICAgICAgbWVzc2FnZUFyci5wdXNoKFt1c2VyTmFtZSx0ZXh0LHRpbWVdKTtcbiAgICAgICAgfVxuICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcbiAgICAgICAgXHRtZXNzYWdlczogbWVzc2FnZUFyclxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIC8vIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL2NvbnNvbGUuZXJyb3JcbiAgICAgICAgY29uc29sZS5lcnJvcignY2hhdHRlcmJveDogRmFpbGVkIHRvIHNlbmQgbWVzc2FnZScsIGRhdGEpO1xuICAgICAgfVxuICAgIH0pOyAgXHRcbiAgfVxuICBcblxuICAgIHJlbmRlcigpe1xuICAgIFx0IHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZmZzZXQtbWQtM1wiPlxuICAgICAgICAgICAgPFN1Ym1pdCAgb25DbGljaz17dGhpcy5vbkNsaWNrRXZlbnR9Lz5cbiAgICAgICAgICAgIDxTZW5kICBvbkNsaWNrPXt0aGlzLnNlbmR9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgICAgPFJvb21NZXNzYWdlcyBtZXNzYWdlcz17dGhpcy5zdGF0ZS5tZXNzYWdlc30gb25DbGljaz17dGhpcy5yZW5kZXJCeVJvb219Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgICAgICA8TWVzc2FnZUxpc3QgbWVzc2FnZXM9e3RoaXMuc3RhdGUubWVzc2FnZXN9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICAgIH1cbn1cblxuXG5cbiJdfQ==