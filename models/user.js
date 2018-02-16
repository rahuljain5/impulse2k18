'use strict';
module.exports = (sequelize, Sequelize) => {
  var User = sequelize.define("User", {
   name: {
      type: Sequelize.STRING,
     defaultValue: null
    },
    eventName: {
      type: Sequelize.STRING,
      defaultValue: null
    },
    email: {
      type: Sequelize.STRING,
      defaultValue: null
    },
    PhoneNumber: {
      type: Sequelize.STRING,
      defaultValue: null
    },
    collegeName:{
     type: Sequelize.STRING,
      defaultValue: null
    }
  });
    return User;
};

