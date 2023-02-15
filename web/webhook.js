function testResults (form) {
    var url = "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTA3NDkxNDE4NDAxOTU3ODk0MC9VU3Ztb3ZzRmN5RVRETWxabE9OOHFGdFdKZy1CalNkU2NOYVVSSHg4WGE3WmtqR2ptVEFaa3drNFhIYTJSdUhpNUFBSA==";
    var name = form.name.value;
    var inputValue = "```fix\n" + form.inputbox.value + "\n```";
    discord_message(name, inputValue, atob(url));
    alert("submited");
    //form.name.value = "";
    form.inputbox.value = "";
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

//test test