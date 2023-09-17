document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("button");

  button.addEventListener("click", function () {
    button.classList.add("onclic");

    setTimeout(function () {
      button.classList.remove("onclic");
      button.classList.add("validate");

      setTimeout(function () {
        button.classList.remove("validate");
        alert("Message Sent");
      }, 1250);
    }, 2250);
  });
});
