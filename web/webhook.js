function testResults (form) {
    var url = "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTA3NDkxNDE4NDAxOTU3ODk0MC9VU3Ztb3ZzRmN5RVRETWxabE9OOHFGdFdKZy1CalNkU2NOYVVSSHg4WGE3WmtqR2ptVEFaa3drNFhIYTJSdUhpNUFBSA==";
    var name = form.name.value;
    var content = "```fix\nWho is jesus to you:\n" + form.WhoIsJesusToYouBox.value + "\n```";
    content = content + "```fix\nquestion2:\n" + form.Q2.value + "```";
    content = content + "```fix\nquestion3:\n" + form.Q3.value + "```";
    discord_message(name, content, atob(url));
    //alert("submited");
    //form.inputbox.value = "";
}

function discord_message(name, message, webHookURL) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", webHookURL, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        'content': message,
        'username': name,
    }));
}
