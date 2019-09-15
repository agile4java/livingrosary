const fs = require('fs');
const { promisify } = require('util');
const readfile = promisify(fs.readFile);

exports.readcontacts = function() {
	readfile('./assets/data/contacts/contacts.json')
		.then(contacts => {
			const contactslist = JSON.parse(contacts);
			return contactslist;
		})
		.catch(err => {
			console.log(err);
		});
};
