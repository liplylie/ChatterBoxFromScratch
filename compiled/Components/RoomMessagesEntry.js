"use strict";

var RoomMessagesEntry = function RoomMessagesEntry(props) {

  var textInput = function textInput(event) {
    console.log('Input is ' + event.target.innerHTML);
    props.onClick(event.target.innerHTML);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvUm9vbU1lc3NhZ2VzRW50cnkuanN4Il0sIm5hbWVzIjpbIlJvb21NZXNzYWdlc0VudHJ5IiwicHJvcHMiLCJ0ZXh0SW5wdXQiLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJpbm5lckhUTUwiLCJvbkNsaWNrIiwiYmluZCIsInJvb20iXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsb0JBQW9CLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsS0FBRCxFQUFXOztBQUdsQyxNQUFJQyxZQUFZLFNBQVpBLFNBQVksQ0FBU0MsS0FBVCxFQUFlO0FBQzNCQyxZQUFRQyxHQUFSLENBQVksY0FBY0YsTUFBTUcsTUFBTixDQUFhQyxTQUF2QztBQUNBTixVQUFNTyxPQUFOLENBQWNMLE1BQU1HLE1BQU4sQ0FBYUMsU0FBM0I7QUFDRCxHQUhIOztBQU1DSCxVQUFRQyxHQUFSLENBQVlKLEtBQVosRUFBbUIsNkJBQW5CO0FBQ0EsU0FDQTtBQUFBO0FBQUEsTUFBSyxXQUFVLHdCQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSx5QkFBZjtBQUF5QztBQUFBO0FBQUEsWUFBTSxXQUFXLE1BQWpCLEVBQXdCLFNBQVNDLFVBQVVPLElBQVYsV0FBakM7QUFBeURSLGdCQUFNUztBQUEvRCxTQUF6QztBQUFBO0FBQUE7QUFERjtBQURGLEdBREE7QUFVRCxDQXBCRCIsImZpbGUiOiJSb29tTWVzc2FnZXNFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBSb29tTWVzc2FnZXNFbnRyeSA9IChwcm9wcykgPT4ge1xuXG5cblx0dmFyIHRleHRJbnB1dCA9IGZ1bmN0aW9uKGV2ZW50KXtcblx0ICAgIGNvbnNvbGUubG9nKCdJbnB1dCBpcyAnICsgZXZlbnQudGFyZ2V0LmlubmVySFRNTCkgXG5cdCAgICBwcm9wcy5vbkNsaWNrKGV2ZW50LnRhcmdldC5pbm5lckhUTUwpXG5cdCAgfVxuXG5cbiAgY29uc29sZS5sb2cocHJvcHMsIFwiUm9vbU1lc3NhZ2VzRW50cnkgcHJvcHMgeW9vXCIpO1xuICByZXR1cm4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnkgbWVkaWFcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tbGlzdC1lbnRyeS1kZXRhaWxcIj48c3BhbiBjbGFzc05hbWU9IFwicm9vbVwiIG9uQ2xpY2s9e3RleHRJbnB1dC5iaW5kKHRoaXMpfSA+e3Byb3BzLnJvb219PC9zcGFuPiA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pOyBcbiAgXG5cblx0XG59XG4iXX0=