Meteor.publish("allChats", function(){
	return Chats.find();
})

Meteor.publish("allMessages", function(){
	return Messages.find();
})