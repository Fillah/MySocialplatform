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
      secret: "123"
    }
  }
);

var geo = new GeoCoder({
    geocoderProvider: "google",
    httpAdapter: "https",
    apiKey: "123"
}); 

Meteor.methods({
	'geoReverseMe':function(lat,lng){
		var result = geo.reverse(lat,lng);
		return result;          //<--this will return it but you could also add to user record instead
	}
});