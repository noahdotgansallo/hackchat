Template.displayMessages.helpers({
	messages: function(){
		Meteor.subscribe('allMessages');
		return Messages.find({chat_id: { $in: [params._id]}})
	},
	chat: function(){
		Meteor.subscribe('allChats');
		return Chats.findOne(params._id);
	},
})

Template.chatMessage.helpers({
	user_message: function(){
		if(this.user_id == Meteor.user()._id){
			return false;
		} else{
			return true;
		}
	}
})