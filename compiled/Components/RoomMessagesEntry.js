"use strict";

var RoomMessagesEntry = function RoomMessagesEntry(props) {

  var textInput = function textInput(event) {
    console.log('Input is ' + event.target.innerHTML);
  };

  console.log(props, "RoomMessagesEntry props yoo");
  return React.createElement(
    "div",
    { className: "video-list-entry media" },
    React.createElement(
      "div",
      { className: "media-body" },
      React.createElement(
        "div",
        { className: "video-list-entry-detail" },
        React.createElement(
          "span",
          { className: "room", onClick: textInput.bind(undefined) },
          props.room
        ),
        " "
      )
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvUm9vbU1lc3NhZ2VzRW50cnkuanN4Il0sIm5hbWVzIjpbIlJvb21NZXNzYWdlc0VudHJ5IiwicHJvcHMiLCJ0ZXh0SW5wdXQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJpbm5lckhUTUwiLCJiaW5kIiwicm9vbSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxvQkFBb0IsU0FBcEJBLGlCQUFvQixDQUFDQyxLQUFELEVBQVc7O0FBR2xDLE1BQUlDLFlBQVksU0FBWkEsU0FBWSxDQUFTQyxLQUFULEVBQWU7QUFDM0JDLFlBQVFDLEdBQVIsQ0FBWSxjQUFjRixNQUFNRyxNQUFOLENBQWFDLFNBQXZDO0FBQ0QsR0FGSDs7QUFLQ0gsVUFBUUMsR0FBUixDQUFZSixLQUFaLEVBQW1CLDZCQUFuQjtBQUNBLFNBQ0E7QUFBQTtBQUFBLE1BQUssV0FBVSx3QkFBZjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUseUJBQWY7QUFBeUM7QUFBQTtBQUFBLFlBQU0sV0FBVyxNQUFqQixFQUF3QixTQUFTQyxVQUFVTSxJQUFWLFdBQWpDO0FBQXlEUCxnQkFBTVE7QUFBL0QsU0FBekM7QUFBQTtBQUFBO0FBREY7QUFERixHQURBO0FBVUQsQ0FuQkQiLCJmaWxlIjoiUm9vbU1lc3NhZ2VzRW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUm9vbU1lc3NhZ2VzRW50cnkgPSAocHJvcHMpID0+IHtcblxuXG5cdHZhciB0ZXh0SW5wdXQgPSBmdW5jdGlvbihldmVudCl7XG5cdCAgICBjb25zb2xlLmxvZygnSW5wdXQgaXMgJyArIGV2ZW50LnRhcmdldC5pbm5lckhUTUwpIFxuXHQgIH1cblxuXG4gIGNvbnNvbGUubG9nKHByb3BzLCBcIlJvb21NZXNzYWdlc0VudHJ5IHByb3BzIHlvb1wiKTtcbiAgcmV0dXJuIChcbiAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1saXN0LWVudHJ5IG1lZGlhXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnktZGV0YWlsXCI+PHNwYW4gY2xhc3NOYW1lPSBcInJvb21cIiBvbkNsaWNrPXt0ZXh0SW5wdXQuYmluZCh0aGlzKX0gPntwcm9wcy5yb29tfTwvc3Bhbj4gPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTsgXG4gIFxuXG5cdFxufVxuIl19