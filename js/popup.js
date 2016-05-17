  var link = document.querySelector(".search-btn");
  var popup = document.querySelector(".findings");
  var login = popup.querySelector("[name=data]");
  var form = popup.querySelector("form");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.toggle("findings-show");
    login.focus();
  });
  form.addEventListener("submit", function(event) {
    event.preventDefault();
  });
