"use strict";

var MessageList = function MessageList(props) {
  return console.log(props, "ml props"), React.createElement(
    "div",
    { className: "video-list" },
    props.messages.map(function (message) {
      return React.createElement(MessageListEntry, { message: "message" });
    })
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvTWVzc2FnZUxpc3QuanN4Il0sIm5hbWVzIjpbIk1lc3NhZ2VMaXN0IiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZXMiLCJtYXAiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsY0FBYyxTQUFkQSxXQUFjLENBQUNDLEtBQUQ7QUFBQSxTQUNsQkMsUUFBUUMsR0FBUixDQUFZRixLQUFaLEVBQW1CLFVBQW5CLEdBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSxZQUFmO0FBQ0lBLFVBQU1HLFFBQU4sQ0FBZUMsR0FBZixDQUFtQjtBQUFBLGFBQVcsb0JBQUMsZ0JBQUQsSUFBa0IsU0FBUSxTQUExQixHQUFYO0FBQUEsS0FBbkI7QUFESixHQUZnQjtBQUFBLENBQWxCIiwiZmlsZSI6Ik1lc3NhZ2VMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE1lc3NhZ2VMaXN0ID0gKHByb3BzKSA9PiAoXG5jb25zb2xlLmxvZyhwcm9wcywgXCJtbCBwcm9wc1wiKSxcbiAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1saXN0XCI+XG4gICAgeyBwcm9wcy5tZXNzYWdlcy5tYXAobWVzc2FnZSA9PiA8TWVzc2FnZUxpc3RFbnRyeSBtZXNzYWdlPVwibWVzc2FnZVwiLz4pfVxuXG4gIDwvZGl2PlxuKTsiXX0=