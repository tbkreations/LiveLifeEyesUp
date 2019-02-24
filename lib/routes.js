FlowRouter.route( '/', {
    name: 'landingPage',
    action: function() {

        BlazeLayout.render('landingPage');
        console.log('Home Route is Working!!!')
    }
});

FlowRouter.route( '/ourPurpose', {
    name: 'ourPurpose',
    action: function() {

        BlazeLayout.render('ourPurpose');
    }
});

FlowRouter.route( '/surveyResults', {
    name: 'surveyResults',
    action: function() {

        BlazeLayout.render('surveyResults');
    }
});

FlowRouter.route( '/sponsors', {
    name: 'sponsors',
    action: function() {

        BlazeLayout.render('sponsors');
    }
});

FlowRouter.route( '/resources', {
    name: 'resources',
    action: function() {

        BlazeLayout.render('resources');
    }
});

FlowRouter.route( '/campaign', {
    name: 'campaign',
    action: function() {

        BlazeLayout.render('campaign');
    }
});

FlowRouter.route( '/success', {
    name: 'success',
    action: function() {

        BlazeLayout.render('success');
    }
});