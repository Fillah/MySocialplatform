Meteor.publish('posts', function(){
    if (this.userId){
        return Posts.find(); 
    }
});

Meteor.publish('comments', function(){
   return Comments.find(); 
});

Meteor.publish('singlePost', function(id){
    check(id, String);
   return Posts.find({_id: id}); 
});