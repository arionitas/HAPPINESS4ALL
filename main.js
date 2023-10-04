$( document ).ready(function() {
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
        console.log(response.quoteText);
     }
   }); 
  }
  getNewQuote();
});