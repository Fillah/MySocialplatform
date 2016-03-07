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
    }
});