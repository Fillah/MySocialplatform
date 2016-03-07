Posts = new Mongo.Collection('posts');
Comments = new Mongo.Collection('comments');

Posts.allow({
    insert: function(userId, doc) {
        return true;
    }, 
    update: function(userId, doc) {
        return true;
    },
    remove: function(userId, doc) {
        return true;
    }
});

CommentSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Comment",
        autoValue: function() {
            return this.userId
        },
        autoform: {
            type: "hidden"
        }
    },
    desc: {
        type: String,
        label: "Desc"
    },
    createdAt: {
       type: Date,
       label: "Created At",
       autoValue: function() {
           return new Date()
       },
       autoform: {
           type: "hidden"
       }
   }
});

PostSchema = new SimpleSchema ({
    author: {
        type: String,
        label: "Author",
        autoValue: function() {
            return (Meteor.user.profile && Meteor.user.profile.fullname) ? Meteor.user.profile.fullname : "default value";
        },
        autoform: {
            type: "hidden"
        }
    },
    createdAt: {
       type: Date,
       label: "Created At",
       autoValue: function() {
           return new Date()
       },
       autoform: {
           type: "hidden"
       }
   },
    location: {
        type: String,
        label: "Location"
    },
    desc: {
        type: String,
        label: "Desc"
    },
    likes: {
        type: String,
        label: "Likes",
        defaultValue: 0,
        optional: true,
        autoform: {
            type: "hidden"
        }
    },
    commentcount: {
        type: String,
        label: "Comments",
        defaultValue: 0,
        optional: true,
        autoform: {
            type: "hidden"
        }
    } 
});

Meteor.methods({
    deletePost: function(id) {
        Posts.remove(id);
    }
});

Posts.attachSchema( PostSchema );
Comments.attachSchema( CommentSchema );