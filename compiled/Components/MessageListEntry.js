"use strict";

var MessageListEntry = function MessageListEntry(props) {
  return console.log(props, "mle props yoo"), React.createElement(
    "div",
    { className: "video-list-entry media" },
    React.createElement(
      "div",
      { className: "media-body" },
      React.createElement(
        "div",
        { className: "video-list-entry-detail" },
        "Test message in Message list entry works"
      )
    )
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvTWVzc2FnZUxpc3RFbnRyeS5qc3giXSwibmFtZXMiOlsiTWVzc2FnZUxpc3RFbnRyeSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsIlZpZGVvTGlzdEVudHJ5IiwicHJvcFR5cGVzIiwidmlkZW8iLCJSZWFjdCIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsbUJBQW1CLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRDtBQUFBLFNBQ3JCQyxRQUFRQyxHQUFSLENBQVlGLEtBQVosRUFBbUIsZUFBbkIsR0FDQTtBQUFBO0FBQUEsTUFBSyxXQUFVLHdCQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSx5QkFBZjtBQUFBO0FBQUE7QUFERjtBQURGLEdBRnFCO0FBQUEsQ0FBdkI7O0FBU0E7QUFDQTtBQUNBRyxlQUFlQyxTQUFmLEdBQTJCO0FBQ3pCQyxTQUFPQyxNQUFNQyxTQUFOLENBQWdCQyxNQUFoQixDQUF1QkM7QUFETCxDQUEzQiIsImZpbGUiOiJNZXNzYWdlTGlzdEVudHJ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE1lc3NhZ2VMaXN0RW50cnkgPSAocHJvcHMpID0+IChcbiAgY29uc29sZS5sb2cocHJvcHMsIFwibWxlIHByb3BzIHlvb1wiKSxcbiAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1saXN0LWVudHJ5IG1lZGlhXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnktZGV0YWlsXCI+VGVzdCBtZXNzYWdlIGluIE1lc3NhZ2UgbGlzdCBlbnRyeSB3b3JrczwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7IFxuXG4vLyBQcm9wVHlwZXMgdGVsbCBvdGhlciBkZXZlbG9wZXJzIHdoYXQgYHByb3BzYCBhIGNvbXBvbmVudCBleHBlY3RzXG4vLyBXYXJuaW5ncyB3aWxsIGJlIHNob3duIGluIHRoZSBjb25zb2xlIHdoZW4gdGhlIGRlZmluZWQgcnVsZXMgYXJlIHZpb2xhdGVkXG5WaWRlb0xpc3RFbnRyeS5wcm9wVHlwZXMgPSB7XG4gIHZpZGVvOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbn07Il19