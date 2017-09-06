var searchYouTube = (message) => {
  
  console.log(message, 'message');
  $.ajax({
  // This is the url you should use to communicate with the parse API server.
    url: "http://parse.la.hackreactor.com/chatterbox/classes/messages",
    type: 'GET',
    data: 'order=-createdAt',
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
      //console.log(, "data i")
      console.log(data.results, "data");
      for ( var i = 0; i < data.results.length; i ++) {
        // string for username and test
        var userName = data.results[i].username;
        var text = data.results[i].text;
        var time = data.results[i].updatedAt;
      }
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
}












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
