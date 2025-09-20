document.querySelector(".contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch("https://script.google.com/macros/s/AKfycbxea6FTzIUaAoeCZjB1rtwyS3tqUt3g6Ku-bOFS2GSKQn7ZJDYqmQygxdswFWL4i96p/exec", {
        method: "POST",
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            console.log("Response from server:", data);
            document.getElementById("responseMessage").innerText = "✅ Your message has been sent successfully!";
            document.querySelector(".contact-form").reset();
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("responseMessage").innerText = "❌ Oops! Something went wrong. Please try again.";
        });
});
