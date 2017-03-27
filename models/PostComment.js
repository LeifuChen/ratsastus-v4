var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
	Posts
	=====
 */

var PostComment = new keystone.List('PostComment', {
	label: 'Comments',
});

PostComment.add({
	publishedOn: { type: Types.Date, default: Date.now, noedit: true, index: true },
});

PostComment.add('Content', {
	content: { type: Types.Html, wysiwyg: true, height: 300 },
});

PostComment.schema.pre('save', function (next) {
	this.wasNew = this.isNew;
	this.publishedOn = new Date();
	next();
});

PostComment.schema.post('save', function () {
	if (!this.wasNew) return;
});

PostComment.track = true;
PostComment.defaultColumns = 'content|70%, publishedOn|20%';
PostComment.register();
