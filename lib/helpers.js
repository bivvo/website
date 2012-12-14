var moment = require('moment');

exports.helpers = {
	prettyDate: function(input_date) {
		return moment(input_date).format("dddd, MMMM Do YYYY h:mm:ss A");
	},
	shortDate: function(input_date) {
		return moment(input_date).format("MM/DD/YY");
	},
	googleMapLink: function(venue) {
		return 'https://maps.google.com/maps?q=' + venue.address_1+'+'+venue.zip;
	}
}