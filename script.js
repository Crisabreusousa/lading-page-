document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let message = document.getElementById("message");

    if (email.includes("@")) {
        message.textContent = "Obrigado! Você receberá novidades em breve.";
        message.style.color = "green";
    } else {
        message.textContent = "Por favor, insira um e-mail válido.";
        message.style.color = "red";
    }
});
