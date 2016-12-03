function addMarkers(map, markers) {
    for(var i=0; i<markers.length; ++i) {
        var marker = new google.maps.Marker({
            position:  {lat: markers[i].latitude, lng: markers[i].longitude},
            map: map,
            icon: markers[i].image
        };

        var contentString = '<div id="content">'+
                            '<div id="siteNotice">'+
                            '</div>'+
                            '<h1 id="firstHeading" class="firstHeading">' + markers[i].title + '</h1>'+
                            '<div id="bodyContent">'+
                            '<p>' + markers[i].description + '</p>'
                        '</div>'                                                                                                        '</div>';

        var infoWindow = new google.Maprs.InfoWindow({
            content: contentString
        });

        marker.addListener('click', function() {
            infoWindow.open(map, marker);
        });
}
