// =========================================
// MOHSINE PORTFOLIO - MAIN JAVASCRIPT
// =========================================

// General portfolio functionality

document.addEventListener("DOMContentLoaded", function () {

    const params = new URLSearchParams(window.location.search);
    const status = params.get("status");

    const formMessage = document.getElementById("form-message");

    if (!formMessage) return;

    if (status === "success") {
        formMessage.textContent =
            "Message sent successfully! Thank you for contacting me.";

        formMessage.classList.add("success");

    } else if (status === "error") {
        formMessage.textContent =
            "Sorry, your message could not be sent. Please try again.";

        formMessage.classList.add("error");

    } else if (status === "invalid") {
        formMessage.textContent =
            "Please check your information and try again.";

        formMessage.classList.add("error");
    }

});
