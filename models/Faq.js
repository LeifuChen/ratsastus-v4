var keystone = require('keystone');
var Types = keystone.Field.Types;

var Faq = new keystone.List('Faq', {
	autokey: { from: 'name', path: 'key', unique: true },
});

Faq.add({
  no: {type: Types.Number, initial: true, required: false },
	question: { type: Types.Textarea, height: 200, initial: true, required: false },
  answer: { type: Types.Textarea, height: 200, initial: true, required: false },
});


Faq.track = true;
Faq.defaultSort = 'no';
Faq.defaultColumns = 'no|10%, question|40%, answer|40%';
Faq.register();
