Template.allChats.helpers({
	chats: function(){
		Meteor.subscribe('allChats');
	    return Chats.find().fetch();
	}
})