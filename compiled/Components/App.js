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
        headers: {
          'X-Parse-Application-Id': '676a1e781a66c09718a32a0221ea3a23a9080272',
          'X-Parse-REST-API-Key': '848f43ff2d1f6d372a9779c6be185d11f18cc183'
        },
        data: text,
        success: function success(data) {
          console.log(data, "send data");
          context.state.messages.unshift(text);
          context.setState({});
        },
        error: function error(_error) {
          console.error('chatterbox: Failed to send message', _error);
        }
      });
    }
  }, {
    key: "renderByRoom",
    value: function renderByRoom(room) {
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
          console.log(messageArr, "message arrrrr");
          for (var i = 0; i < data.results.length; i++) {
            // string for username and test
            if (data.results[i].roomname === room) {
              var userName = data.results[i].username;
              var text = data.results[i].text;
              // var time = data.results[i].updatedAt;
              var message = {
                username: userName,
                text: text,
                roomname: room
              };
              messageArr.push(message);
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvQXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJvbkNsaWNrRXZlbnQiLCJiaW5kIiwic3RhdGUiLCJzZWxlY3RlZCIsIm1lc3NhZ2VzIiwicmVuZGVyQnlSb29tIiwic2VuZCIsImNvbnRleHQiLCIkIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhIiwiaGVhZGVycyIsImNvbnRlbnRUeXBlIiwic3VjY2VzcyIsInJlc3VsdHMiLCJzZXRTdGF0ZSIsImVycm9yIiwidGV4dCIsInVuc2hpZnQiLCJyb29tIiwibWVzc2FnZUFyciIsImkiLCJsZW5ndGgiLCJyb29tbmFtZSIsInVzZXJOYW1lIiwidXNlcm5hbWUiLCJtZXNzYWdlIiwicHVzaCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSwwR0FDVkEsS0FEVTs7QUFFaEJDLFlBQVFDLEdBQVIsQ0FBWUYsS0FBWixFQUFtQixXQUFuQjtBQUNGLFVBQUtHLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsT0FBcEI7O0FBRUUsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGdCQUFVLEVBREM7QUFFWEMsZ0JBQVU7QUFGQyxLQUFiO0FBSUEsVUFBS0osWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUNBLFVBQUtJLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkosSUFBbEIsT0FBcEI7QUFDQSxVQUFLSyxJQUFMLEdBQVksTUFBS0EsSUFBTCxDQUFVTCxJQUFWLE9BQVo7QUFYZ0I7QUFZakI7Ozs7bUNBRWE7QUFDYixVQUFJTSxVQUFVLElBQWQ7QUFDQUMsUUFBRUMsSUFBRixDQUFPO0FBQ047QUFDRUMsYUFBSyw2REFGRDtBQUdKQyxjQUFNLEtBSEY7QUFJSkMsY0FBTSxrQkFKRjtBQUtKQyxp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QUEsY0FBSyxXQUFVLHNCQUFmO0FBQ0UsZ0NBQUMsTUFBRCxJQUFTLFNBQVMsS0FBS1osWUFBdkIsR0FERjtBQUVFLGdDQUFDLElBQUQsSUFBTyxTQUFTLEtBQUtNLElBQXJCO0FBRkY7QUFERixTQURGO0FBT0U7QUFBQTtBQUFBLFlBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxVQUFmO0FBQ0UsZ0NBQUMsWUFBRCxJQUFjLFVBQVUsS0FBS0osS0FBTCxDQUFXRSxRQUFuQyxFQUE2QyxTQUFTLEtBQUtDLFlBQTNEO0FBREYsV0FERjtBQUlFO0FBQUE7QUFBQSxjQUFLLFdBQVUsVUFBZjtBQUNFLGdDQUFDLFdBQUQsSUFBYSxVQUFVLEtBQUtILEtBQUwsQ0FBV0UsUUFBbEM7QUFERjtBQUpGO0FBUEYsT0FEQTtBQWtCRDs7OztFQXRJYTBCLE1BQU1DLFMiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zb2xlLmxvZyhwcm9wcywgXCJhcHAgcHJvcHNcIilcbiBcdHRoaXMub25DbGlja0V2ZW50ID0gdGhpcy5vbkNsaWNrRXZlbnQuYmluZCh0aGlzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkOiBcIlwiLFxuICAgICAgbWVzc2FnZXM6IFtdLFxuICAgXHR9XG4gICBcdHRoaXMub25DbGlja0V2ZW50ID0gdGhpcy5vbkNsaWNrRXZlbnQuYmluZCh0aGlzKTtcbiAgIFx0dGhpcy5yZW5kZXJCeVJvb20gPSB0aGlzLnJlbmRlckJ5Um9vbS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VuZCA9IHRoaXMuc2VuZC5iaW5kKHRoaXMpXG4gIH1cblxuICBvbkNsaWNrRXZlbnQoKXtcbiAgXHR2YXIgY29udGV4dCA9IHRoaXM7XG4gIFx0JC5hamF4KHtcbiAgICAvLyBUaGlzIGlzIHRoZSB1cmwgeW91IHNob3VsZCB1c2UgdG8gY29tbXVuaWNhdGUgd2l0aCB0aGUgcGFyc2UgQVBJIHNlcnZlci5cbiAgICAgIHVybDogXCJodHRwOi8vcGFyc2UubGEuaGFja3JlYWN0b3IuY29tL2NoYXR0ZXJib3gvY2xhc3Nlcy9tZXNzYWdlc1wiLFxuICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICBkYXRhOiAnb3JkZXI9LWNyZWF0ZWRBdCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdYLVBhcnNlLUFwcGxpY2F0aW9uLUlkJzogJzY3NmExZTc4MWE2NmMwOTcxOGEzMmEwMjIxZWEzYTIzYTkwODAyNzInLFxuICAgICAgICAnWC1QYXJzZS1SRVNULUFQSS1LZXknOiAnODQ4ZjQzZmYyZDFmNmQzNzJhOTc3OWM2YmUxODVkMTFmMThjYzE4MycsXG4gICAgICB9LFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGF0dGVyYm94OiBNZXNzYWdlIHNlbnQnKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygsIFwiZGF0YSBpXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEucmVzdWx0cywgXCJkYXRhIGluIHNlYXJjaCBhcGlcIik7XG4gICAgICAgIGNvbnRleHQuc2V0U3RhdGUoe1xuICAgICAgICBcdG1lc3NhZ2VzOiBkYXRhLnJlc3VsdHNcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAvLyBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9jb25zb2xlLmVycm9yXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NoYXR0ZXJib3g6IEZhaWxlZCB0byBzZW5kIG1lc3NhZ2UnLCBkYXRhKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlbmQodGV4dCl7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgIGNvbnNvbGUubG9nKHRleHQsIFwidGhpcyBpcyB0aGUgdGVzdCBicm9cIilcblxuICAgIC8vIFBPU1QgdGhlIG1lc3NhZ2UgdG8gdGhlIHNlcnZlclxuICAgICQuYWpheCh7XG4gICAgICB1cmw6IFwiaHR0cDovL3BhcnNlLmxhLmhhY2tyZWFjdG9yLmNvbS9jaGF0dGVyYm94L2NsYXNzZXMvbWVzc2FnZXNcIixcbiAgICAgIHR5cGU6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ1gtUGFyc2UtQXBwbGljYXRpb24tSWQnOiAnNjc2YTFlNzgxYTY2YzA5NzE4YTMyYTAyMjFlYTNhMjNhOTA4MDI3MicsXG4gICAgICAgICdYLVBhcnNlLVJFU1QtQVBJLUtleSc6ICc4NDhmNDNmZjJkMWY2ZDM3MmE5Nzc5YzZiZTE4NWQxMWYxOGNjMTgzJyxcbiAgICAgIH0sXG4gICAgICBkYXRhOiB0ZXh0LFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSwgXCJzZW5kIGRhdGFcIilcbiAgICAgICAgY29udGV4dC5zdGF0ZS5tZXNzYWdlcy51bnNoaWZ0KHRleHQpO1xuICAgICAgICBjb250ZXh0LnNldFN0YXRlKHtcbiAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NoYXR0ZXJib3g6IEZhaWxlZCB0byBzZW5kIG1lc3NhZ2UnLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG4gIHJlbmRlckJ5Um9vbShyb29tKXtcbiAgXHR2YXIgY29udGV4dCA9IHRoaXM7XG4gIFx0JC5hamF4KHtcbiAgICAvLyBUaGlzIGlzIHRoZSB1cmwgeW91IHNob3VsZCB1c2UgdG8gY29tbXVuaWNhdGUgd2l0aCB0aGUgcGFyc2UgQVBJIHNlcnZlci5cbiAgICAgIHVybDogXCJodHRwOi8vcGFyc2UubGEuaGFja3JlYWN0b3IuY29tL2NoYXR0ZXJib3gvY2xhc3Nlcy9tZXNzYWdlc1wiLFxuICAgICAgdHlwZTogJ0dFVCcsXG4gICAgICBkYXRhOiAnb3JkZXI9LWNyZWF0ZWRBdCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdYLVBhcnNlLUFwcGxpY2F0aW9uLUlkJzogJzY3NmExZTc4MWE2NmMwOTcxOGEzMmEwMjIxZWEzYTIzYTkwODAyNzInLFxuICAgICAgJ1gtUGFyc2UtUkVTVC1BUEktS2V5JzogJzg0OGY0M2ZmMmQxZjZkMzcyYTk3NzljNmJlMTg1ZDExZjE4Y2MxODMnLFxuICAgICAgfSxcbiAgICAgIGNvbnRlbnRUeXBlOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygnY2hhdHRlcmJveDogTWVzc2FnZSBzZW50Jyk7XG4gICAgICAgIC8vY29uc29sZS5sb2coLCBcImRhdGEgaVwiKVxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLnJlc3VsdHMsIFwiZGF0YSBpbiBzZWFyY2ggYXBpXCIpO1xuICAgICAgICB2YXIgbWVzc2FnZUFyciA9IFtdO1xuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlQXJyLCBcIm1lc3NhZ2UgYXJycnJyXCIpXG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGRhdGEucmVzdWx0cy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAvLyBzdHJpbmcgZm9yIHVzZXJuYW1lIGFuZCB0ZXN0XG4gICAgICAgICAgaWYgKCBkYXRhLnJlc3VsdHNbaV0ucm9vbW5hbWUgPT09IHJvb20pe1xuICAgICAgICAgICAgdmFyIHVzZXJOYW1lID0gZGF0YS5yZXN1bHRzW2ldLnVzZXJuYW1lO1xuICAgICAgICAgICAgdmFyIHRleHQgPSBkYXRhLnJlc3VsdHNbaV0udGV4dDtcbiAgICAgICAgICAgIC8vIHZhciB0aW1lID0gZGF0YS5yZXN1bHRzW2ldLnVwZGF0ZWRBdDtcbiAgICAgICAgICAgIHZhciBtZXNzYWdlID0ge1xuICAgICAgICAgICAgICB1c2VybmFtZTogdXNlck5hbWUsXG4gICAgICAgICAgICAgIHRleHQ6IHRleHQsXG4gICAgICAgICAgICAgIHJvb21uYW1lOiByb29tXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbWVzc2FnZUFyci5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAgICAgY29udGV4dC5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlQXJyXG4gICAgICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIFxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIC8vIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL2NvbnNvbGUuZXJyb3JcbiAgICAgICAgY29uc29sZS5lcnJvcignY2hhdHRlcmJveDogRmFpbGVkIHRvIHNlbmQgbWVzc2FnZScsIGRhdGEpO1xuICAgICAgfVxuICAgIH0pOyAgXHRcbiAgfVxuICBcblxuICAgIHJlbmRlcigpe1xuICAgIFx0IHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBvZmZzZXQtbWQtM1wiPlxuICAgICAgICAgICAgPFN1Ym1pdCAgb25DbGljaz17dGhpcy5vbkNsaWNrRXZlbnR9Lz5cbiAgICAgICAgICAgIDxTZW5kICBvbkNsaWNrPXt0aGlzLnNlbmR9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtN1wiPlxuICAgICAgICAgICAgPFJvb21NZXNzYWdlcyBtZXNzYWdlcz17dGhpcy5zdGF0ZS5tZXNzYWdlc30gb25DbGljaz17dGhpcy5yZW5kZXJCeVJvb219Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgICAgICA8TWVzc2FnZUxpc3QgbWVzc2FnZXM9e3RoaXMuc3RhdGUubWVzc2FnZXN9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICAgIH1cbn1cblxuXG5cbiJdfQ==