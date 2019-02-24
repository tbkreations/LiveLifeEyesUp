import { Template } from 'meteor/templating';

import './joinCampaign.html';
import './joinCampaign.css';

Template.campaign.events({
    'submit .signupForm'(event) {
        // Prevent default browser form submit
        event.preventDefault();

        var getFirstName = event.target.firstname.value;
        var getLastName = event.target.lastname.value;
        var getCity = event.target.city.value;
        var getState = event.target.state.value;

        if (getFirstName == "" || getLastName == "" || getCity == "" || getState == "") {
            // sAlert.error('Please Fill In All Text Fields', {effect: 'genie', position: 'bottom-right', timeout: 'none', onRouteClose: false, stack: false, offset: '80px'});
            alert("Please Fill In All Text Fields")
        }

        // Get value from form element
        const target = event.target;

        Meteor.call('newUser', target.firstname.value, target.lastname.value, target.email.value, target.city.value, target.state.value,
            _register);

    }
});

function _register(error) {
    if (error) {
        console.log(error)
        sAlert.error(error.reason);
    } else {
        FlowRouter.go('/success');
        console.log('success');
    }
}