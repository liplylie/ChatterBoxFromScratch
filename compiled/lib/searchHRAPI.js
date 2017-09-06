'use strict';

var searchYouTube = function searchYouTube(message) {

  console.log(message, 'message');
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: "http://parse.la.hackreactor.com/chatterbox/classes/messages",
    type: 'GET',
    data: 'order=-createdAt',
    contentType: 'application/json',
    success: function success(data) {
      console.log('chatterbox: Message sent');
      //console.log(, "data i")
      console.log(data.results, "data");
      for (var i = 0; i < data.results.length; i++) {
        // string for username and test
        var userName = data.results[i].username;
        var text = data.results[i].text;
        var time = data.results[i].updatedAt;
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9zZWFyY2hIUkFQSS5qcyJdLCJuYW1lcyI6WyJzZWFyY2hZb3VUdWJlIiwibWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCIkIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhIiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwicmVzdWx0cyIsImkiLCJsZW5ndGgiLCJ1c2VyTmFtZSIsInVzZXJuYW1lIiwidGV4dCIsInRpbWUiLCJ1cGRhdGVkQXQiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxnQkFBZ0IsU0FBaEJBLGFBQWdCLENBQUNDLE9BQUQsRUFBYTs7QUFFL0JDLFVBQVFDLEdBQVIsQ0FBWUYsT0FBWixFQUFxQixTQUFyQjtBQUNBRyxJQUFFQyxJQUFGLENBQU87QUFDUDtBQUNFQyxTQUFLLDZEQUZBO0FBR0xDLFVBQU0sS0FIRDtBQUlMQyxVQUFNLGtCQUpEO0FBS0xDLGlCQUFhLGtCQUxSO0FBTUxDLGFBQVMsaUJBQVVGLElBQVYsRUFBZ0I7QUFDdkJOLGNBQVFDLEdBQVIsQ0FBWSwwQkFBWjtBQUNBO0FBQ0FELGNBQVFDLEdBQVIsQ0FBWUssS0FBS0csT0FBakIsRUFBMEIsTUFBMUI7QUFDQSxXQUFNLElBQUlDLElBQUksQ0FBZCxFQUFpQkEsSUFBSUosS0FBS0csT0FBTCxDQUFhRSxNQUFsQyxFQUEwQ0QsR0FBMUMsRUFBZ0Q7QUFDOUM7QUFDQSxZQUFJRSxXQUFXTixLQUFLRyxPQUFMLENBQWFDLENBQWIsRUFBZ0JHLFFBQS9CO0FBQ0EsWUFBSUMsT0FBT1IsS0FBS0csT0FBTCxDQUFhQyxDQUFiLEVBQWdCSSxJQUEzQjtBQUNBLFlBQUlDLE9BQU9ULEtBQUtHLE9BQUwsQ0FBYUMsQ0FBYixFQUFnQk0sU0FBM0I7QUFDRDtBQUNGLEtBaEJJO0FBaUJMQyxXQUFPLGVBQVVYLElBQVYsRUFBZ0I7QUFDckI7QUFDQU4sY0FBUWlCLEtBQVIsQ0FBYyxvQ0FBZCxFQUFvRFgsSUFBcEQ7QUFDRDtBQXBCSSxHQUFQO0FBc0JELENBekJEOztBQXNDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2VhcmNoSFJBUEkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc2VhcmNoWW91VHViZSA9IChtZXNzYWdlKSA9PiB7XG4gIFxuICBjb25zb2xlLmxvZyhtZXNzYWdlLCAnbWVzc2FnZScpO1xuICAkLmFqYXgoe1xuICAvLyBUaGlzIGlzIHRoZSB1cmwgeW91IHNob3VsZCB1c2UgdG8gY29tbXVuaWNhdGUgd2l0aCB0aGUgcGFyc2UgQVBJIHNlcnZlci5cbiAgICB1cmw6IFwiaHR0cDovL3BhcnNlLmxhLmhhY2tyZWFjdG9yLmNvbS9jaGF0dGVyYm94L2NsYXNzZXMvbWVzc2FnZXNcIixcbiAgICB0eXBlOiAnR0VUJyxcbiAgICBkYXRhOiAnb3JkZXI9LWNyZWF0ZWRBdCcsXG4gICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coJ2NoYXR0ZXJib3g6IE1lc3NhZ2Ugc2VudCcpO1xuICAgICAgLy9jb25zb2xlLmxvZygsIFwiZGF0YSBpXCIpXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLnJlc3VsdHMsIFwiZGF0YVwiKTtcbiAgICAgIGZvciAoIHZhciBpID0gMDsgaSA8IGRhdGEucmVzdWx0cy5sZW5ndGg7IGkgKyspIHtcbiAgICAgICAgLy8gc3RyaW5nIGZvciB1c2VybmFtZSBhbmQgdGVzdFxuICAgICAgICB2YXIgdXNlck5hbWUgPSBkYXRhLnJlc3VsdHNbaV0udXNlcm5hbWU7XG4gICAgICAgIHZhciB0ZXh0ID0gZGF0YS5yZXN1bHRzW2ldLnRleHQ7XG4gICAgICAgIHZhciB0aW1lID0gZGF0YS5yZXN1bHRzW2ldLnVwZGF0ZWRBdDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVycm9yOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgLy8gU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvY29uc29sZS5lcnJvclxuICAgICAgY29uc29sZS5lcnJvcignY2hhdHRlcmJveDogRmFpbGVkIHRvIHNlbmQgbWVzc2FnZScsIGRhdGEpO1xuICAgIH1cbiAgfSk7XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gIC8vICQuZ2V0KCdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS95b3V0dWJlL3YzL3NlYXJjaCcsIHtcbiAgLy8gICBwYXJ0OiAnc25pcHBldCcsXG4gIC8vICAga2V5OiBrZXksXG4gIC8vICAgcTogcXVlcnksXG4gIC8vICAgbWF4UmVzdWx0czogbWF4LFxuICAvLyAgIHR5cGU6ICd2aWRlbycsXG4gIC8vICAgdmlkZW9FbWJlZGRhYmxlOiAndHJ1ZSdcbiAgLy8gfSlcbiAgLy8gLmRvbmUoKHtpdGVtc30pID0+IHtcbiAgLy8gICBpZiAoY2FsbGJhY2spIHtcbiAgLy8gICAgIGNhbGxiYWNrKGl0ZW1zKTtcbiAgLy8gICB9XG4gIC8vIH0pXG4gIC8vIC5mYWlsKCh7cmVzcG9uc2VKU09OfSkgPT4ge1xuICAvLyAgIHJlc3BvbnNlSlNPTi5lcnJvci5lcnJvcnMuZm9yRWFjaCgoZXJyKSA9PlxuICAvLyAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gIC8vICAgKTtcbiAgLy8gfSk7XG4iXX0=