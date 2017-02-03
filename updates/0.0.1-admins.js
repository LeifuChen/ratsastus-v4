var keystone = require('keystone');
var User = keystone.list('User');

module.exports = function (done) {
	new User.model({
		name: {
			first: 'Demo',
			last: 'User'
		},
		email: 'demo@keystonejs.com',
		password: '1234',
		isAdmin: true,
	})
	.save(done);
};
