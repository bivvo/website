var database = require('../lib/database'),
	images = require('../lib/images');
/*
 * GET past meetings
 */

exports.pastMeetings = function(req, res){
  database.getPastMeetings(function(error, meetings){
  	  res.render('history', { 
	  	title: 'Past Meeting with Olynode', 
	  	meetings: meetings, 
	  	headerImage: images.getHeaderImage() 
	  });
  });
};


exports.meetingById = function(req, res) {
  database.getMeetingById(req.params.id, function(error, meeting){
  	  res.render('meeting', { 
	  	title: 'Meeting with Olynode', 
	  	meeting: meeting, 
	  	headerImage: images.getHeaderImage() 
	  });
  });
};