$( document ).ready(function() {

    var quote;
    var author;

function getNewQuote() {
   $.ajax({
     url: 'https://api.forismatic.com/api/1.0/',
     jsonp: "jsonp",
     dataType: 'jsonp',
     data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
     },
     success: function(response) {
        quote = response.quoteText;
        author = response.quoteAuthor;
        $('#quote').text(quote);
        if (author) {
            $('#author').text('said by ' + author);
        } else {
            $('#author').text('- unkown');
        }
     }
   }); 
  }
  getNewQuote();

  $('.get-quote').on('click', function(event) {
    event.preventDefault();
    getNewQuote();
  });

  $('.share-quote').on('click', function(event){
    event.preventDefault();
    window.open('https://www.instagram.com/arxivn/') + encodeURIComponent(quote+ ' - author')
  });
});