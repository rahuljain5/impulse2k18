'use strict';
module.exports = (sequelize, Sequelize) => {
  var User = sequelize.define("User", {
   name: {
      type: Sequelize.STRING
    },
    eventName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    PhoneNumber: {
      type: Sequelize.STRING,
      defaultValue: null
    },
    collegeName{
     type: Sequelize.STRING,
      defaultValue: null
    }
  });
    return User;
};

