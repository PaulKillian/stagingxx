const form = document.forms[0];

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = new FormData(this);
  const entries = formData.entries();
  const data = Object.fromEntries(entries);
  sendFormData()
}); 

const sendFormData = () => {
  Email.send({
    Host : "smtp.gmail.com",
    Username : "psk65lava@gmail.com",
    Password : "Sammy6565656565",
    To : 'psk65lava@gmail.com',
    From : "psk65lava@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
  }).then(
  message => alert(message)
  );
}