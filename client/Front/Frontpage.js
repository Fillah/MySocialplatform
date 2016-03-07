Template.Frontpage.onCreated(function() {
    var self = this;
    self.autorun(function() {
       self.subscribe('posts'); 
    });
});

Template.Frontpage.helpers({
   posts: ()=> {
       return Posts.find();
   } 
});

ServiceConfiguration.configurations.upsert(
  { service: "weibo" },
  {
    $set: {
      clientId: "123",
      loginStyle: "popup",
      secret: "123"
    }
  }
);

Meteor.loginWithFacebook({
  requestPermissions: ['public_profile']
}, function (err) {
  debugger
  if (err)
    console.log("Error: " + (err.reason || 'Unknown error'));
});