var keystone = require('keystone');
var Enquiry = keystone.list('Enquiry');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'stable';
	locals.data = {stables: [],}

	view.on('init', function (next) {

		var q = keystone.list('Location').model.find();

		q.exec(function(err, results) {
			locals.data.stables = results;
			next(err);
		});
	});

    view.render('stable', {
           section: 'stable',
	});

}
