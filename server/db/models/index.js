'use strict';

const db = require('../index');
const Students = require('./students');
const Campuses = require('./campuses');

Campuses.hasMany(Students, {
	foreignKey: 'campusId',
	onDelete: 'cascade',
	hooks: true
});

Students.belongsTo(Campuses, {
	onDelete: 'cascade',
	hooks: true
});

module.exports = {
	db,
	Students,
	Campuses
};
