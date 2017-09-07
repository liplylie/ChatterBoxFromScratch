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
        React.createElement(
          "span",
          { className: "username" },
          props.message.username
        ),
        " ",
        _.escape(props.message.text)
      )
    )
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvTWVzc2FnZUxpc3RFbnRyeS5qc3giXSwibmFtZXMiOlsiTWVzc2FnZUxpc3RFbnRyeSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJ1c2VybmFtZSIsIl8iLCJlc2NhcGUiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLG1CQUFtQixTQUFuQkEsZ0JBQW1CLENBQUNDLEtBQUQ7QUFBQSxTQUNyQkMsUUFBUUMsR0FBUixDQUFZRixLQUFaLEVBQW1CLGVBQW5CLEdBQ0E7QUFBQTtBQUFBLE1BQUssV0FBVSx3QkFBZjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUseUJBQWY7QUFBeUM7QUFBQTtBQUFBLFlBQU0sV0FBVSxVQUFoQjtBQUE2QkEsZ0JBQU1HLE9BQU4sQ0FBY0M7QUFBM0MsU0FBekM7QUFBQTtBQUFzR0MsVUFBRUMsTUFBRixDQUFTTixNQUFNRyxPQUFOLENBQWNJLElBQXZCO0FBQXRHO0FBREY7QUFERixHQUZxQjtBQUFBLENBQXZCOztBQVNBO0FBQ0EiLCJmaWxlIjoiTWVzc2FnZUxpc3RFbnRyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBNZXNzYWdlTGlzdEVudHJ5ID0gKHByb3BzKSA9PiAoXG4gIGNvbnNvbGUubG9nKHByb3BzLCBcIm1sZSBwcm9wcyB5b29cIiksXG4gIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tbGlzdC1lbnRyeSBtZWRpYVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1saXN0LWVudHJ5LWRldGFpbFwiPjxzcGFuIGNsYXNzTmFtZT1cInVzZXJuYW1lXCIgPntwcm9wcy5tZXNzYWdlLnVzZXJuYW1lfTwvc3Bhbj4ge18uZXNjYXBlKHByb3BzLm1lc3NhZ2UudGV4dCl9PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTsgXG5cbi8vIFByb3BUeXBlcyB0ZWxsIG90aGVyIGRldmVsb3BlcnMgd2hhdCBgcHJvcHNgIGEgY29tcG9uZW50IGV4cGVjdHNcbi8vIFdhcm5pbmdzIHdpbGwgYmUgc2hvd24gaW4gdGhlIGNvbnNvbGUgd2hlbiB0aGUgZGVmaW5lZCBydWxlcyBhcmUgdmlvbGF0ZWRcbiJdfQ==