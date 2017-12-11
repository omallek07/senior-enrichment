'use strict';

const db = require('../index');
const Sequelize = db.Sequelize;

const Students = db.define('students', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [1, 15],
        msg: 'Name must be between 1 and 15 characters'
      }
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [1, 20],
        msg: 'Last name must be between 1 and 20 characters'
      }
    }
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
      len: {
        args: [1, 30],
        msg: 'Email must be between 1 and 30 characters!'
      }
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
