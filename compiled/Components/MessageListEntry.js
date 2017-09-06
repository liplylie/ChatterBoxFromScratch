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
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvTWVzc2FnZUxpc3RFbnRyeS5qc3giXSwibmFtZXMiOlsiTWVzc2FnZUxpc3RFbnRyeSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJ1c2VybmFtZSIsIl8iLCJlc2NhcGUiLCJ0ZXh0IiwiVmlkZW9MaXN0RW50cnkiLCJwcm9wVHlwZXMiLCJ2aWRlbyIsIlJlYWN0IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxtQkFBbUIsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFEO0FBQUEsU0FDckJDLFFBQVFDLEdBQVIsQ0FBWUYsS0FBWixFQUFtQixlQUFuQixHQUNBO0FBQUE7QUFBQSxNQUFLLFdBQVUsd0JBQWY7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHlCQUFmO0FBQXlDO0FBQUE7QUFBQSxZQUFNLFdBQVUsVUFBaEI7QUFBNEJBLGdCQUFNRyxPQUFOLENBQWNDO0FBQTFDLFNBQXpDO0FBQUE7QUFBcUdDLFVBQUVDLE1BQUYsQ0FBU04sTUFBTUcsT0FBTixDQUFjSSxJQUF2QjtBQUFyRztBQURGO0FBREYsR0FGcUI7QUFBQSxDQUF2Qjs7QUFTQTtBQUNBO0FBQ0FDLGVBQWVDLFNBQWYsR0FBMkI7QUFDekJDLFNBQU9DLE1BQU1DLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQztBQURMLENBQTNCIiwiZmlsZSI6Ik1lc3NhZ2VMaXN0RW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTWVzc2FnZUxpc3RFbnRyeSA9IChwcm9wcykgPT4gKFxuICBjb25zb2xlLmxvZyhwcm9wcywgXCJtbGUgcHJvcHMgeW9vXCIpLFxuICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnkgbWVkaWFcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tbGlzdC1lbnRyeS1kZXRhaWxcIj48c3BhbiBjbGFzc05hbWU9XCJ1c2VybmFtZVwiPntwcm9wcy5tZXNzYWdlLnVzZXJuYW1lfTwvc3Bhbj4ge18uZXNjYXBlKHByb3BzLm1lc3NhZ2UudGV4dCl9PC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTsgXG5cbi8vIFByb3BUeXBlcyB0ZWxsIG90aGVyIGRldmVsb3BlcnMgd2hhdCBgcHJvcHNgIGEgY29tcG9uZW50IGV4cGVjdHNcbi8vIFdhcm5pbmdzIHdpbGwgYmUgc2hvd24gaW4gdGhlIGNvbnNvbGUgd2hlbiB0aGUgZGVmaW5lZCBydWxlcyBhcmUgdmlvbGF0ZWRcblZpZGVvTGlzdEVudHJ5LnByb3BUeXBlcyA9IHtcbiAgdmlkZW86IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTsiXX0=