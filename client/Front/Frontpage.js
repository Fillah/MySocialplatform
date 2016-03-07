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

Meteor.loginWithFacebook({
  requestPermissions: ['public_profile']
}, function (err) {
  debugger
  if (err)
    console.log("Error: " + (err.reason || 'Unknown error'));
});