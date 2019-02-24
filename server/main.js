import {
  Meteor
} from 'meteor/meteor';

Meteor.startup(() => {

  Meteor.methods({
    newUser: function (firstname, lastname, email, city, state) {

      subscriber = Accounts.createUser({
        username: firstname + '.' + lastname,
        email: email,
        profile: {
          firstname: firstname,
          lastname: lastname,
          city: city,
          state: state,
        }
      })
      console.dir(subscriber)
    }
  });

});