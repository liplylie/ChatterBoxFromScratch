"use strict";

var MessageListEntry = function MessageListEntry(_ref) {
  var video = _ref.video,
      click = _ref.click;
  return React.createElement(
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL0NvbXBvbmVudHMvTWVzc2FnZUxpc3RFbnRyeS5qc3giXSwibmFtZXMiOlsiTWVzc2FnZUxpc3RFbnRyeSIsInZpZGVvIiwiY2xpY2siLCJWaWRlb0xpc3RFbnRyeSIsInByb3BUeXBlcyIsIlJlYWN0IiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxtQkFBbUIsU0FBbkJBLGdCQUFtQjtBQUFBLE1BQUVDLEtBQUYsUUFBRUEsS0FBRjtBQUFBLE1BQVNDLEtBQVQsUUFBU0EsS0FBVDtBQUFBLFNBQ3JCO0FBQUE7QUFBQSxNQUFLLFdBQVUsd0JBQWY7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLHlCQUFmO0FBQUE7QUFBQTtBQURGO0FBREYsR0FEcUI7QUFBQSxDQUF2Qjs7QUFRQTtBQUNBO0FBQ0FDLGVBQWVDLFNBQWYsR0FBMkI7QUFDekJILFNBQU9JLE1BQU1DLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQztBQURMLENBQTNCIiwiZmlsZSI6Ik1lc3NhZ2VMaXN0RW50cnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgTWVzc2FnZUxpc3RFbnRyeSA9ICh7dmlkZW8sIGNsaWNrfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWxpc3QtZW50cnkgbWVkaWFcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tbGlzdC1lbnRyeS1kZXRhaWxcIj5UZXN0IG1lc3NhZ2UgaW4gTWVzc2FnZSBsaXN0IGVudHJ5IHdvcmtzPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTsgXG5cbi8vIFByb3BUeXBlcyB0ZWxsIG90aGVyIGRldmVsb3BlcnMgd2hhdCBgcHJvcHNgIGEgY29tcG9uZW50IGV4cGVjdHNcbi8vIFdhcm5pbmdzIHdpbGwgYmUgc2hvd24gaW4gdGhlIGNvbnNvbGUgd2hlbiB0aGUgZGVmaW5lZCBydWxlcyBhcmUgdmlvbGF0ZWRcblZpZGVvTGlzdEVudHJ5LnByb3BUeXBlcyA9IHtcbiAgdmlkZW86IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxufTsiXX0=