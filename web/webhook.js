function testResults (form) {
    var name = form.name.value;
    var inputValue = form.inputbox.value;
    discord_message(name, inputValue, atob("aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTA3NDkwMzcwMDQwMjg3MjM3MC9ZN2xuVC1fSW1lZjNoOEJlMXJ4eExfb1hYN1dMakhyeEtCRkU1Sk9DZXdPRzE3XzlrNEEwaFY2bEdBajlnSWwzdmdNQw=="));
    alert("submited");
    form.name.value = "";
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