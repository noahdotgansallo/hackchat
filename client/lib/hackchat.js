Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});


Template.displayChats.events({
  "click .delete" : function(){
    Chats.remove(this._id);
  }
})

Template.sendMessage.events({
  "submit .sendMessage" : function(event){
    event.preventDefault();
    var content = event.target.content.value;

    Messages.insert({
      content : content,
      createdAt: new Date,
      chat_id: params._id,
      user_id: Meteor.user()._id,
      username: Meteor.user().username
    });

    event.target.content.value = "";
  }
})

Template.createChat.events({
  "submit .createChat": function (event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    var text = event.target.chatName.value;

    Chats.insert({
      name: text,
      createdAt: new Date(),
      date: moment().format('LL'),
    });

    // Clear form
    event.target.chatName.value = "";
  },
})

Router.route('/', function(){
  this.render('allChats');
})

Router.route('/chat/:_id', function(){
  params = this.params;
  var id = params._id;
  var test = Chats.find(id).fetch();
  this.render('displayMessages');
})