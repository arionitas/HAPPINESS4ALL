$(document).ready(function() {
    function getNewQuote() {
        $.ajax({
            url: 'https://api.forismatic.com/api/1.0/',
            data: {
                method: 'getQuote',
                lang: 'en',
                format: 'json'
            },
            success: function(response)
              console.console.log(response.quote); {
                console.log(response.quoteTest)
              }
        });
    }
    getNewQuote();
});


