Meteor.publish('posts', function(){
    if (this.userId){
        return Posts.find({}, {sort: {createdAt: -1}}); 
    }
});

Meteor.publish('comments', function(){
   return Comments.find(); 
});

Meteor.publish('singlePost', function(id){
    check(id, String);
   return Posts.find({_id: id}); 
});

ServiceConfiguration.configurations.upsert(
  { service: "Facebook" },
  {
    $set: {
      clientId: "652546028221182",
      loginStyle: "popup",
      secret: "secret"
    }
  }
);

var geo = new GeoCoder({
        geocoderProvider: "google",
        httpAdapter: "https",
        apiKey: "secret"
    });

Meteor.methods({
	'geoReverseMe':function(lat,lng){
              check(lat,Match.Any);    
              check(lng,Match.Any);
		var result = geo.reverse(lat,lng);
		return result;         
	}
});