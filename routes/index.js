const keystone = require('keystone');
const middleware = require('./middleware');
const importRoutes = keystone.importer(__dirname);

keystone.pre('routes', function (req, res, next) {
	res.locals.navLinks = [
		{ label: 'Miksi ratsastus?', key: 'miksi-ratsastus', href: '/guide/post/miksi-ratsastus' },
		{ label: 'Missä voin ratsastaa?', key: 'stable', href: '/stable' },
		{ label: 'Millä varusteilla?', key: 'millae-varusteilla', href: '/guide/post/millae-varusteilla' },
		{ label: 'Ihana hevonen', key: 'ihana-hevonen', href: '/guide/post/ihana-hevonen' },
		{ label: 'Ratsastusetiketti', key: 'ratsastusetiketti', href: '/guide/post/ratsastusetiketti' },
		{ label: 'Mikä on sinun lajisi?', key: 'mikae-on-sinun-lajisi', href: '/guide/post/mikae-on-sinun-lajisi' },
		{ label: 'FAQ', key: 'faq', href: '/faq' },
		{ label: 'SRL', key: 'srl', href: '/guide/post/srl' },
	];
	res.locals.user = req.user;
	next();
});

keystone.pre('render', middleware.theme);
keystone.pre('render', middleware.flashMessages);

keystone.set('404', function (req, res, next) {
    middleware.theme(req, res, next);
	res.status(404).render('errors/404');
});

// Load Routes
var routes = {
	download: importRoutes('./download'),
	views: importRoutes('./views'),
};

exports = module.exports = function (app) {

	// Views
	app.get('/', routes.views.index);
	app.get('/guide/:category?', routes.views.blog);
	app.all('/guide/post/:post', routes.views.post);
	app.all('/faq', routes.views.faq);
	app.all('/stable', routes.views.stable);

	// Downloads
	app.get('/download/users', routes.download.users);

}
