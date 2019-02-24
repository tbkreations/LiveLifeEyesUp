import {
    Template
} from 'meteor/templating';


import './nav.html';
import './nav.css';

Template.navBar.onRendered(function () {
    console.log('this is working')
    $(".button-collapse").sideNav();
    // var elems = document.querySelectorAll('.side-nav');
    // var instances = M.Sidenav.init(elems, options);
})



Template.navBar.events({
    "click .sidenav-trigger": function () {
        $('.button-collapse').sideNav('show');
        console.log('the side nav click registers on this page')
    },

    //'li' item routes/events
    "click #ourPurpose": function () {
        FlowRouter.go('/ourPurpose')
    },
    "click #campaign": function () {
        FlowRouter.go('/campaign')
    },
    "click #surveyResults": function () {
        FlowRouter.go('/surveyResults')
    },
    "click #resources": function () {
        FlowRouter.go('/resources')
    },
    "click #sponsors": function () {
        FlowRouter.go('/sponsors')
    },

    //'a' tag routes/events
    "click #purposeLink": function () {
        FlowRouter.go('/ourPurpose')
    },
    "click #campaignLink": function () {
        FlowRouter.go('/campaign')
    },
    "click #surveyLink": function () {
        FlowRouter.go('/surveyResults')
    },
    "click #resourceLink": function () {
        FlowRouter.go('/resources')
    },
    "click #sponsorLink": function () {
        FlowRouter.go('/sponsors')
    },
    "click #instagram": function () {
        window.location.href = 'https://www.instagram.com/chslivelifeeyesup/'
    },
    "click #twitter": function () {
        window.location.href = 'https://twitter.com/livelifeeyesup'
    },
});