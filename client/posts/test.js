Template.body.onCreated(function() {      //<--this could be some other condition
if(navigator.geolocation) {
    var geoSuccess = function(position) {
        lat = position.coords.latitude;
        lng = position.coords.longitude;
        Meteor.call('geoReverseMe', lat, lng, function(err, data) {
        if (err) console.log(err);
            Session.set('myLocation', data[0].city, data[0].administrativeLevels.level1short);
        });

    };
    var geoError = function(error) {
      console.log('Error occurred. Error code: ' + error.code);
    };
    var geoOptions = {
      timeout: 100 * 1000,
      maximumAge: 75000
    };
   };
   navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
});