'use strict';

const db = require('../index');
const Sequelize = db.Sequelize;

const Students = db.define('students', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
    type: Sequelize.VIRTUAL,
    get: function () {
      return this.firstName + ' ' + this.lastName;
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    }
  },
  gpa: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0,
      max: 4.0
    }
  }
});

module.exports = Students;
