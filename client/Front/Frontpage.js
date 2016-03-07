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