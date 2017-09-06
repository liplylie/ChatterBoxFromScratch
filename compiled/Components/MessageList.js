"use strict";

var MessageList = function MessageList(props) {
  return console.log(props, "ml props"), React.createElement(
    "div",
    { className: "video-list" },
    "All Messages",
    props.messages.map(function (message) {
      return React.createElement(MessageListEntry, { message: message });
    })
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvTWVzc2FnZUxpc3QuanN4Il0sIm5hbWVzIjpbIk1lc3NhZ2VMaXN0IiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZXMiLCJtYXAiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxLQUFEO0FBQUEsU0FDbEJDLFFBQVFDLEdBQVIsQ0FBWUYsS0FBWixFQUFtQixVQUFuQixHQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUsWUFBZjtBQUFBO0FBRUlBLFVBQU1HLFFBQU4sQ0FBZUMsR0FBZixDQUFtQjtBQUFBLGFBQVcsb0JBQUMsZ0JBQUQsSUFBa0IsU0FBU0MsT0FBM0IsR0FBWDtBQUFBLEtBQW5CO0FBRkosR0FGZ0I7QUFBQSxDQUFsQiIsImZpbGUiOiJNZXNzYWdlTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBNZXNzYWdlTGlzdCA9IChwcm9wcykgPT4gKFxuY29uc29sZS5sb2cocHJvcHMsIFwibWwgcHJvcHNcIiksXG4gIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tbGlzdFwiPlxuICBBbGwgTWVzc2FnZXNcbiAgICB7IHByb3BzLm1lc3NhZ2VzLm1hcChtZXNzYWdlID0+IDxNZXNzYWdlTGlzdEVudHJ5IG1lc3NhZ2U9e21lc3NhZ2V9Lz4pfVxuXG4gIDwvZGl2PlxuKTsiXX0=