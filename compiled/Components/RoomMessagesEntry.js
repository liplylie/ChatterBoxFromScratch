"use strict";

var RoomMessagesEntry = function RoomMessagesEntry(props) {

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
          { className: "room" },
          props.room
        ),
        " "
      )
    )
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvUm9vbU1lc3NhZ2VzRW50cnkuanN4Il0sIm5hbWVzIjpbIlJvb21NZXNzYWdlc0VudHJ5IiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwicm9vbSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxvQkFBb0IsU0FBcEJBLGlCQUFvQixDQUFDQyxLQUFELEVBQVc7O0FBTWpDQyxVQUFRQyxHQUFSLENBQVlGLEtBQVosRUFBbUIsNkJBQW5CO0FBQ0EsU0FDQTtBQUFBO0FBQUEsTUFBSyxXQUFVLHdCQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSx5QkFBZjtBQUF5QztBQUFBO0FBQUEsWUFBTSxXQUFXLE1BQWpCO0FBQTBCQSxnQkFBTUc7QUFBaEMsU0FBekM7QUFBQTtBQUFBO0FBREY7QUFERixHQURBO0FBVUQsQ0FqQkQiLCJmaWxlIjoiUm9vbU1lc3NhZ2VzRW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgUm9vbU1lc3NhZ2VzRW50cnkgPSAocHJvcHMpID0+IHtcblxuXG5cblxuXG4gIGNvbnNvbGUubG9nKHByb3BzLCBcIlJvb21NZXNzYWdlc0VudHJ5IHByb3BzIHlvb1wiKTtcbiAgcmV0dXJuIChcbiAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1saXN0LWVudHJ5IG1lZGlhXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnktZGV0YWlsXCI+PHNwYW4gY2xhc3NOYW1lPSBcInJvb21cIiA+e3Byb3BzLnJvb219PC9zcGFuPiA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pOyBcbiAgXG5cblx0XG59XG4iXX0=