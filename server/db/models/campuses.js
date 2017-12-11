'use strict';

const db = require('../index');
const Sequelize = db.Sequelize;

const Campuses = db.define('campuses', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://admissions.utk.edu/wp-content/uploads/sites/10/2015/09/visit-campus.jpg'
  },
  description: {
    type: Sequelize.TEXT,
  }
});

Campuses.beforeValidate(campus => {
  if (!campus.imageUrl) {
    campus.imageUrl = Campuses.defaultValue;
  }
});

module.exports = Campuses;
