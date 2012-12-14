var home = require('./home'),
	meetings = require('./meetings');


module.exports = function(app) {
	app.get('/', home.route);
	app.get('/history', meetings.pastMeetings);
	app.get('/meeting/:id', meetings.meetingById)
};