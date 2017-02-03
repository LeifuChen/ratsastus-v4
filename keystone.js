var keystone = require('keystone');

keystone.init({

	'name': 'Ratsastus',
	'brand': 'Ratsastus',

	'favicon': 'public/favicon.ico',
	'less': 'public',
	'static': 'public',

	'views': 'templates/views',
	'view engine': 'jade',

	'auto update': true,
	'mongo': process.env.MONGODB_URI || process.env.MONGOLAB_URI || 'mongodb://localhost/ratsastus-v4',
	'cloudinary config': 'cloudinary://153795739328761:Ij0GVP95R0zyCjNwHvMlPqwTcOA@zac',
	'session': true,
	'auth': true,
	'user model': 'User',
	'cookie secret': process.env.COOKIE_SECRET || 'demo',

	'ga property': process.env.GA_PROPERTY,
	'ga domain': process.env.GA_DOMAIN,

	'chartbeat property': process.env.CHARTBEAT_PROPERTY,
	'chartbeat domain': process.env.CHARTBEAT_DOMAIN

});

keystone.import('models');

keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
	ga_property: keystone.get('ga property'),
	ga_domain: keystone.get('ga domain'),
	chartbeat_property: keystone.get('chartbeat property'),
	chartbeat_domain: keystone.get('chartbeat domain')
});

keystone.set('routes', require('./routes'));

keystone.set('nav', {
	'posts': ['posts', 'post-comments', 'post-categories'],
	'galleries': 'galleries',
	'enquiries': 'enquiries',
	'users': 'users',
	'field-tests': 'things'
});

keystone.set('google api key', 'AIzaSyDCgWoJXYL8q2cMzPupZQYig2IfIo7OYMA');
keystone.set('google server api key', 'your-server-key');
keystone.set('default region', 'fi');

keystone.start();
