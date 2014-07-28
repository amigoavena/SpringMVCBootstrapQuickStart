// Filename: router.js
define([ 'json2' ], function() {

	var VIEWS = [ {
		id : 'welcome',
		name : 'Welcome',
		view : 'views/welcome',
		isDefault : true
	},
	{
		id : 'match',
		name : 'Match',
		view : 'views/match'
	},
	{
		id : 'match-edit',
		name : 'Match Edit',
		view : 'views/match.edit'
	},
	{
		id : 'profile',
		name : 'Profile',
		view : 'views/profile'
	},
	{
		id : 'admin',
		name : 'Administration',
		view : 'views/admin'
	},
	{
		id : 'multiple-schedule',
		name : 'Game Schedule',
		view : 'views/game.schedule'
	},
	{
		id : 'schedule',
		name : 'Game Schedule',
		view : 'views/game.schedule'
	},
	{
		id : 'welcome',
		name : 'Welcome',
		view : 'views/welcome'
	}];

	return VIEWS;
});