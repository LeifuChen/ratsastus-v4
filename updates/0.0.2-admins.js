var keystone = require('keystone');
var User = keystone.list('User');

module.exports = function (done) {
	new User.model({
		name: {
			first: 'Ratsastus',
			last: 'Admin'
		},
		email: 'admin@keystonejs.com',
		password: 'admin',
		isAdmin: true,
	})
	.save(done);
};
