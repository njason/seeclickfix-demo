
var base_url = 'https://seeclickfix.com/api/v2/issues';

function getIssues() {
    // Using YQL and JSONP
    $.ajax({
        url: base_url,
     
        // The name of the callback parameter, as specified by the YQL service
        jsonp: 'callback',
     
        // Tell jQuery we're expecting JSONP
        dataType: 'jsonp',
     
        // Tell YQL what we want and that we want JSON
        data: {
            place_url: 'jersey-city'
        },
     
        // Work with the response
        success: function( response ) {
            console.log( response ); // server response
        }
    });
}
