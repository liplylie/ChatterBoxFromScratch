'use strict';

var searchHRAPI = function searchHRAPI(message) {

  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: "http://parse.la.hackreactor.com/chatterbox/classes/messages",
    type: 'GET',
    data: 'order=-createdAt',
    headers: {
      'X-Parse-Application-Id': '676a1e781a66c09718a32a0221ea3a23a9080272',
      'X-Parse-REST-API-Key': '848f43ff2d1f6d372a9779c6be185d11f18cc183'
    },
    contentType: 'application/json',
    success: function success(data) {
      console.log('chatterbox: Message sent');
      //console.log(, "data i")
      console.log(data.results, "data in search api");
      var messageArr = [];
      for (var i = 0; i < data.results.length; i++) {
        // string for username and test
        var userName = data.results[i].username;
        var text = data.results[i].text;
        var time = data.results[i].updatedAt;
        messageArr.push([userName, text, time]);
        //this.state.messages.push([userName, text, time])
      }
      console.log(messageArr, "messAr");
      console.log(React.createElement(App, null), "app");
      // make set State
    },

    error: function error(data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }

  });
};

// $.get('https://www.googleapis.com/youtube/v3/search', {
//   part: 'snippet',
//   key: key,
//   q: query,
//   maxResults: max,
//   type: 'video',
//   videoEmbeddable: 'true'
// })
// .done(({items}) => {
//   if (callback) {
//     callback(items);
//   }
// })
// .fail(({responseJSON}) => {
//   responseJSON.error.errors.forEach((err) =>
//     console.error(err)
//   );
// });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9zZWFyY2hIUkFQSS5qcyJdLCJuYW1lcyI6WyJzZWFyY2hIUkFQSSIsIm1lc3NhZ2UiLCIkIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhIiwiaGVhZGVycyIsImNvbnRlbnRUeXBlIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJyZXN1bHRzIiwibWVzc2FnZUFyciIsImkiLCJsZW5ndGgiLCJ1c2VyTmFtZSIsInVzZXJuYW1lIiwidGV4dCIsInRpbWUiLCJ1cGRhdGVkQXQiLCJwdXNoIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7O0FBRUEsSUFBSUEsY0FBYyxTQUFkQSxXQUFjLENBQUNDLE9BQUQsRUFBYTs7QUFFM0JDLElBQUVDLElBQUYsQ0FBTztBQUNQO0FBQ0VDLFNBQUssNkRBRkE7QUFHTEMsVUFBTSxLQUhEO0FBSUxDLFVBQU0sa0JBSkQ7QUFLTEMsYUFBUztBQUNQLGdDQUEwQiwwQ0FEbkI7QUFFVCw4QkFBd0I7QUFGZixLQUxKO0FBU0xDLGlCQUFhLGtCQVRSO0FBVUxDLGFBQVMsaUJBQVVILElBQVYsRUFBZ0I7QUFDdkJJLGNBQVFDLEdBQVIsQ0FBWSwwQkFBWjtBQUNBO0FBQ0FELGNBQVFDLEdBQVIsQ0FBWUwsS0FBS00sT0FBakIsRUFBMEIsb0JBQTFCO0FBQ0EsVUFBSUMsYUFBYSxFQUFqQjtBQUNBLFdBQU0sSUFBSUMsSUFBSSxDQUFkLEVBQWlCQSxJQUFJUixLQUFLTSxPQUFMLENBQWFHLE1BQWxDLEVBQTBDRCxHQUExQyxFQUFnRDtBQUM5QztBQUNBLFlBQUlFLFdBQVdWLEtBQUtNLE9BQUwsQ0FBYUUsQ0FBYixFQUFnQkcsUUFBL0I7QUFDQSxZQUFJQyxPQUFPWixLQUFLTSxPQUFMLENBQWFFLENBQWIsRUFBZ0JJLElBQTNCO0FBQ0EsWUFBSUMsT0FBT2IsS0FBS00sT0FBTCxDQUFhRSxDQUFiLEVBQWdCTSxTQUEzQjtBQUNBUCxtQkFBV1EsSUFBWCxDQUFnQixDQUFDTCxRQUFELEVBQVVFLElBQVYsRUFBZUMsSUFBZixDQUFoQjtBQUNBO0FBQ0Q7QUFDRFQsY0FBUUMsR0FBUixDQUFZRSxVQUFaLEVBQXdCLFFBQXhCO0FBQ0FILGNBQVFDLEdBQVIsQ0FBWSxvQkFBQyxHQUFELE9BQVosRUFBb0IsS0FBcEI7QUFDQTtBQUNELEtBMUJJOztBQTRCTFcsV0FBTyxlQUFVaEIsSUFBVixFQUFnQjtBQUNyQjtBQUNBSSxjQUFRWSxLQUFSLENBQWMsb0NBQWQsRUFBb0RoQixJQUFwRDtBQUNEOztBQS9CSSxHQUFQO0FBa0NELENBcENIOztBQWdERTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2VhcmNoSFJBUEkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxudmFyIHNlYXJjaEhSQVBJID0gKG1lc3NhZ2UpID0+IHtcbiAgICBcbiAgICAkLmFqYXgoe1xuICAgIC8vIFRoaXMgaXMgdGhlIHVybCB5b3Ugc2hvdWxkIHVzZSB0byBjb21tdW5pY2F0ZSB3aXRoIHRoZSBwYXJzZSBBUEkgc2VydmVyLlxuICAgICAgdXJsOiBcImh0dHA6Ly9wYXJzZS5sYS5oYWNrcmVhY3Rvci5jb20vY2hhdHRlcmJveC9jbGFzc2VzL21lc3NhZ2VzXCIsXG4gICAgICB0eXBlOiAnR0VUJyxcbiAgICAgIGRhdGE6ICdvcmRlcj0tY3JlYXRlZEF0JyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ1gtUGFyc2UtQXBwbGljYXRpb24tSWQnOiAnNjc2YTFlNzgxYTY2YzA5NzE4YTMyYTAyMjFlYTNhMjNhOTA4MDI3MicsXG4gICAgICAnWC1QYXJzZS1SRVNULUFQSS1LZXknOiAnODQ4ZjQzZmYyZDFmNmQzNzJhOTc3OWM2YmUxODVkMTFmMThjYzE4MycsXG4gICAgICB9LFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGF0dGVyYm94OiBNZXNzYWdlIHNlbnQnKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygsIFwiZGF0YSBpXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEucmVzdWx0cywgXCJkYXRhIGluIHNlYXJjaCBhcGlcIik7XG4gICAgICAgIHZhciBtZXNzYWdlQXJyID0gW107XG4gICAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGRhdGEucmVzdWx0cy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgICAvLyBzdHJpbmcgZm9yIHVzZXJuYW1lIGFuZCB0ZXN0XG4gICAgICAgICAgdmFyIHVzZXJOYW1lID0gZGF0YS5yZXN1bHRzW2ldLnVzZXJuYW1lO1xuICAgICAgICAgIHZhciB0ZXh0ID0gZGF0YS5yZXN1bHRzW2ldLnRleHQ7XG4gICAgICAgICAgdmFyIHRpbWUgPSBkYXRhLnJlc3VsdHNbaV0udXBkYXRlZEF0O1xuICAgICAgICAgIG1lc3NhZ2VBcnIucHVzaChbdXNlck5hbWUsdGV4dCx0aW1lXSk7XG4gICAgICAgICAgLy90aGlzLnN0YXRlLm1lc3NhZ2VzLnB1c2goW3VzZXJOYW1lLCB0ZXh0LCB0aW1lXSlcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlQXJyLCBcIm1lc3NBclwiKVxuICAgICAgICBjb25zb2xlLmxvZyg8QXBwLz4sIFwiYXBwXCIpXG4gICAgICAgIC8vIG1ha2Ugc2V0IFN0YXRlXG4gICAgICB9LFxuICAgICAgXG4gICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgLy8gU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvY29uc29sZS5lcnJvclxuICAgICAgICBjb25zb2xlLmVycm9yKCdjaGF0dGVyYm94OiBGYWlsZWQgdG8gc2VuZCBtZXNzYWdlJywgZGF0YSk7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgfVxuXG4gICAgXG5cblxuXG5cblxuXG5cblxuXG4gIC8vICQuZ2V0KCdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3NlYXJjaCcsIHtcbiAgLy8gICBwYXJ0OiAnc25pcHBldCcsXG4gIC8vICAga2V5OiBrZXksXG4gIC8vICAgcTogcXVlcnksXG4gIC8vICAgbWF4UmVzdWx0czogbWF4LFxuICAvLyAgIHR5cGU6ICd2aWRlbycsXG4gIC8vICAgdmlkZW9FbWJlZGRhYmxlOiAndHJ1ZSdcbiAgLy8gfSlcbiAgLy8gLmRvbmUoKHtpdGVtc30pID0+IHtcbiAgLy8gICBpZiAoY2FsbGJhY2spIHtcbiAgLy8gICAgIGNhbGxiYWNrKGl0ZW1zKTtcbiAgLy8gICB9XG4gIC8vIH0pXG4gIC8vIC5mYWlsKCh7cmVzcG9uc2VKU09OfSkgPT4ge1xuICAvLyAgIHJlc3BvbnNlSlNPTi5lcnJvci5lcnJvcnMuZm9yRWFjaCgoZXJyKSA9PlxuICAvLyAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gIC8vICAgKTtcbiAgLy8gfSk7XG4iXX0=