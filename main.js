$(document).ready(function() {
function getNewQuote() {
   $.ajax({
     url: 'https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=xml&lang=en',
     data: {
        method: 'getQuote',
        lang: 'en',
        format: 'json'
     },
     success: function(response) {
        console.log(response.quoteText);
     }
   }); 
  }
  getNewQuote();
});