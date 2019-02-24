import { Template } from 'meteor/templating';


import './success.html';
import './success.css';

Template.success.events({
    "click #home": function() {
        FlowRouter.go('/')
        console.log('route is routing')
    },
    "click #joinCampaign": function() {
        FlowRouter.go('/campaign')
    },
})

Template.success.onRendered(function () {
        var subAmount = Meteor.users.find().count();
        console.log(subAmount);
        document.getElementById("subAmount").innerHTML = subAmount;

        setTimeout(
            function () {
                $('.count').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
            }, 50);
});