var keystone = require('keystone');
var Gallery = keystone.list('Gallery');
var PostComment = keystone.list('PostComment');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	locals.section = 'faq';
	// Load the current post

	view.on('init', function (next) {
		next();
	});

	view.on('post', { action: 'comment.create' }, function (next) {

		var newComment = new PostComment.model();


		newComment.getUpdateHandler(req).process(req.body, {
			fields: 'content',
			flashErrors: true,
			logErrors: true,
		}, function (err) {
			if (err) {
				validationErrors = err.errors;
				console.log("can't save!!");
			} else {
				req.flash('success', 'Your comment was added.');
				return res.redirect('faq');
			}
			next();
		});

	});

	view.render('faq');

}
