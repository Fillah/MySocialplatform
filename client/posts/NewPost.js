var hooksObject = {
before: {
  insert: function(doc) {
    doc.location = Session.get('myLocation');
    return doc; 
  }
}
};
AutoForm.hooks({
'insertPostForm': hooksObject
});

Template.NewPost.events({
    'click .fa-close' : function() {
        Session.set('newPost', false);
    }
});