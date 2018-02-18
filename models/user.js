'use strict';
module.exports = (sequelize, Sequelize) => {
  var User = sequelize.define("User", {
   name: {
      type: Sequelize.STRING,
     defaultValue: null,
      unique:"user"
    },
    eventName: {
      type: Sequelize.STRING,
      defaultValue: null,
      unique:"user"
    },
    email: {
      type: Sequelize.STRING,
      defaultValue: null,
      unique:"user"
    },
    PhoneNumber: {
      type: Sequelize.STRING,
      defaultValue: null,
      unique:"user"
    },
    collegeName:{
     type: Sequelize.STRING,
      defaultValue: null,
      unique:"user"
    }
  });
    return User;
};

