var keystone = require('keystone');
var Post = keystone.list('Post');
var Gallery = keystone.list('Gallery');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'competition';
	locals.data = {gallery: [],}

	view.on('init', function (next) {

		var q = keystone.list('Gallery').model.find();

		q.exec(function (err, result) {
			locals.data.gallery = result;
			next(err);
		});
	});

    view.render('competition');
}