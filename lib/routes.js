if (Meteor.isClient) {
    Accounts.onLogin(function() {
       FlowRouter.go('frontpage'); 
    });
    
    Accounts.onLogout(function() {
        FlowRouter.go('home');
    });
    
    FlowRouter.triggers.enter([function(context, redirect){
        if(!Meteor.userId()) {
            FlowRouter.go('home');
        }
    }]);
}

FlowRouter.route('/', {
    name: 'home',
    action() {
        if(Meteor.userId()) {
            FlowRouter.go('frontpage');
        }
        GAnalytics.pageview();
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/frontpage', {
    name: 'frontpage',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'Posts'});
    }
});

FlowRouter.route('/map', {
    name: 'map',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'map'});
    }
});

FlowRouter.route('/test', {
    name: 'test',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'test'});
    }
});

FlowRouter.route('/post/:id', {
    name: 'post',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'PostSingle'});
    }
});

FlowRouter.route('/profile', {
    name: 'profile',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Profile'})
    }
});