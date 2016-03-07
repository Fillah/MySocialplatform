Template.Profile.onCreated(function() {
    var self = this;
    self.autorun(function() {
       self.subscribe('posts'); 
    });
});

Template.Profile.helpers({
   posts: ()=> {
       return Posts.find();
   } 
});