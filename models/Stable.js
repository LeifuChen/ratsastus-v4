var keystone = require('keystone');
var Types = keystone.Field.Types;

var Stable = new keystone.List('Stable');

Stable.add({
  name: {type: String, required: true, index: true, unique: true},
	street: {type: String},
	postcode: {type: String},
  city: {type: String},
  latitude: {type: Types.Number},
  longitude: {type: Types.Number},
  website: {type: Types.Url},
  district: {type: String}
});

Stable.defaultSort = 'name';
Stable.defaultColumns = 'name|30%, street|30%, postcode|10%, city |10%, website|20%';
Stable.register();
