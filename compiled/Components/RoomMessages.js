"use strict";

var RoomMessages = function RoomMessages(props) {
	console.log(props.messages, "ml props");
	var roomBox = [];
	for (var i = 0; i < props.messages.length; i++) {
		roomBox.push(props.messages[i].roomname);
	};
	var uniqBox = [];

	console.log(roomBox, "uniqbox");
	for (var _i = 0; _i < roomBox.length; _i++) {
		if (uniqBox.indexOf(roomBox[_i]) === -1 && roomBox[_i] !== undefined) {
			uniqBox.push(roomBox[_i]);
		}
	};

	console.log(uniqBox, "roombox");
	return React.createElement(
		"div",
		{ className: "video-list" },
		"Rooms",
		uniqBox.map(function (room) {
			return React.createElement(RoomMessagesEntry, { room: room });
		})
	);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvUm9vbU1lc3NhZ2VzLmpzeCJdLCJuYW1lcyI6WyJSb29tTWVzc2FnZXMiLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlcyIsInJvb21Cb3giLCJpIiwibGVuZ3RoIiwicHVzaCIsInJvb21uYW1lIiwidW5pcUJveCIsImluZGV4T2YiLCJ1bmRlZmluZWQiLCJtYXAiLCJyb29tIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGVBQWUsU0FBZkEsWUFBZSxDQUFDQyxLQUFELEVBQVc7QUFDN0JDLFNBQVFDLEdBQVIsQ0FBWUYsTUFBTUcsUUFBbEIsRUFBNEIsVUFBNUI7QUFDQSxLQUFJQyxVQUFVLEVBQWQ7QUFDQSxNQUFLLElBQUtDLElBQUksQ0FBZCxFQUFpQkEsSUFBSUwsTUFBTUcsUUFBTixDQUFlRyxNQUFwQyxFQUE0Q0QsR0FBNUMsRUFBZ0Q7QUFDL0NELFVBQVFHLElBQVIsQ0FBYVAsTUFBTUcsUUFBTixDQUFlRSxDQUFmLEVBQWtCRyxRQUEvQjtBQUNBO0FBQ0QsS0FBSUMsVUFBVSxFQUFkOztBQUVBUixTQUFRQyxHQUFSLENBQVlFLE9BQVosRUFBcUIsU0FBckI7QUFDQSxNQUFLLElBQUtDLEtBQUksQ0FBZCxFQUFpQkEsS0FBSUQsUUFBUUUsTUFBN0IsRUFBcUNELElBQXJDLEVBQXlDO0FBQ3hDLE1BQUtJLFFBQVFDLE9BQVIsQ0FBZ0JOLFFBQVFDLEVBQVIsQ0FBaEIsTUFBZ0MsQ0FBQyxDQUFqQyxJQUFzQ0QsUUFBUUMsRUFBUixNQUFlTSxTQUExRCxFQUFvRTtBQUNwRUYsV0FBUUYsSUFBUixDQUFhSCxRQUFRQyxFQUFSLENBQWI7QUFDQztBQUNEOztBQUVESixTQUFRQyxHQUFSLENBQVlPLE9BQVosRUFBcUIsU0FBckI7QUFDQSxRQUNFO0FBQUE7QUFBQSxJQUFLLFdBQVUsWUFBZjtBQUFBO0FBRUlBLFVBQVFHLEdBQVIsQ0FBWTtBQUFBLFVBQVEsb0JBQUMsaUJBQUQsSUFBbUIsTUFBTUMsSUFBekIsR0FBUjtBQUFBLEdBQVo7QUFGSixFQURGO0FBU0EsQ0F6QkQiLCJmaWxlIjoiUm9vbU1lc3NhZ2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFJvb21NZXNzYWdlcyA9IChwcm9wcykgPT4ge1xuXHRjb25zb2xlLmxvZyhwcm9wcy5tZXNzYWdlcywgXCJtbCBwcm9wc1wiKTtcblx0dmFyIHJvb21Cb3ggPSBbXTtcblx0Zm9yIChsZXQgIGkgPSAwOyBpIDwgcHJvcHMubWVzc2FnZXMubGVuZ3RoOyBpKyspe1xuXHRcdHJvb21Cb3gucHVzaChwcm9wcy5tZXNzYWdlc1tpXS5yb29tbmFtZSk7XG5cdH07XG5cdHZhciB1bmlxQm94ID0gW107XG5cblx0Y29uc29sZS5sb2cocm9vbUJveCwgXCJ1bmlxYm94XCIpO1xuXHRmb3IgKGxldCAgaSA9IDA7IGkgPCByb29tQm94Lmxlbmd0aDsgaSsrKXtcblx0XHRpZiAoIHVuaXFCb3guaW5kZXhPZihyb29tQm94W2ldKSA9PT0gLTEgJiYgcm9vbUJveFtpXSAhPT0gdW5kZWZpbmVkKXtcblx0XHR1bmlxQm94LnB1c2gocm9vbUJveFtpXSk7XHRcblx0XHR9XG5cdH07XG5cblx0Y29uc29sZS5sb2codW5pcUJveCwgXCJyb29tYm94XCIpO1xuXHRyZXR1cm4gKFxuXHQgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tbGlzdFwiPlxuXHQgIFJvb21zXG5cdCAgICB7IHVuaXFCb3gubWFwKHJvb20gPT4gPFJvb21NZXNzYWdlc0VudHJ5IHJvb209e3Jvb219IC8+KX1cblxuXHQgIDwvZGl2PlxuXG5cdFx0KVxuXHRcbn0iXX0=