var keystone = require('keystone');
var Types = keystone.Field.Types;

var Location = new keystone.List('Location', {
  autokey: {from: 'name', path: 'slug', unique: true},
  searchFields: 'name',
});

Location.add({
	name: {type: String, inital: true, default: '', required: true, index: true},
	address: {type: String, index: true, unique: true},
	location: {type: Types.Location, required: false},
  description: {type: Types.Textarea},
  createdBy: {type: Types.Relationship, ref: 'User', index: true, many: false},
  createdAt: {type: Types.Datetime, default: Date.now},
  updatedAt: {type: Types.Datetime, default: Date.now}
});

Location.schema.virtual('url').get(function () {
	return '/stables/' + this.slug;
});
Location.defaultSort = '-createdAt';
Location.defaultColumns = 'name|25%, address|25%, description|30%, createdBy';
Location.register();
