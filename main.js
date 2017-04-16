 var config = {
    apiKey: "AIzaSyCAHCbV-_l4YuzXnOVhBd0OpI2Vgpzi224",
    authDomain: "chaty-app-5eb8f.firebaseapp.com",
    databaseURL: "https://chaty-app-5eb8f.firebaseio.com",
    projectId: "chaty-app-5eb8f",
    storageBucket: "chaty-app-5eb8f.appspot.com",
    messagingSenderId: "308040108140"
  };
  firebase.initializeApp(config);
  
 var chatData = firebase.database().ref();

function pushMessage(event) {
        if (event.keyCode == 13) {
            var name = $('#nameInput').val();
            var text = $('#messageInput').val();
            chatData.push({name: name, text: text});
            $('#messageInput').val('');
  }
  
}

function pushMessageButton(){
        var name = $('#nameInput').val();
        var text = $('#messageInput').val();
        chatData.push({name: name, text: text});
        $('#messageInput').val('');
}

$('#messageInput').keypress(pushMessage);
$("#send").on("click", pushMessageButton);

chatData.on("child_added", showMessage);

function showMessage(msg) {
        var message = msg.val();
        var messageSender = message.name;
        var messageContent = message.text;

        var messageEl = $("<div/>").addClass("message");
        var senderEl = $("<span/>").text(messageSender + ": ");
        var contentEl = $("<span/>").text(messageContent);
  
        messageEl.append(senderEl);
        messageEl.append(contentEl);
        $('#messages').append(messageEl);
}
