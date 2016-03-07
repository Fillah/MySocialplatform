Template.Posts.onCreated(function() {
    var self = this;
    self.autorun(function() {
       self.subscribe('posts'); 
    });
});

Template.Posts.helpers({
   posts: ()=> {
       return Posts.find({});
   } 
});

Template.Posts.events({
    'click .new-post' : () => {
        Session.set('newPost', true);
    },
    'click .login': function(e) {
        if(Accounts.loginServicesConfigured()) {
            Meteor.loginWithFacebook({ 
                requestPermissions: ['public_profile'] 
            }, function (err) { 
            if (err) 
                console.log("Error: " + (err.reason || 'Unknown error')); 
            }); 
            } else {
        console.log("Services not yet available. Try again later");
    }
  }
});