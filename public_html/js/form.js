function handleFileSelect(evt) {
  const fileList = evt.target.files;
  console.log(fileList[0].name);
  const custom = document.querySelector('.custom')
  custom.classList.remove('custom')
  custom.classList.add('custom-success')
  
}
document.getElementById('file-selector').addEventListener('change', handleFileSelect, false);
const main = document.getElementById('main');

const form = document.forms[0];

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = new FormData(this);
  const entries = formData.entries();
  const data = Object.fromEntries(entries);
  sendFormData()
}); 

const sendFormData = () => {
  // Email.send({
  //   Host : "smtp.gmail.com",
  //   Username : "psk65lava@gmail.com",
  //   Password : "Sammy6565656565",
  //   To : 'psk65lava@gmail.com',
  //   From : "psk65lava@gmail.com",
  //   Subject : "This is the subject",
  //   Body : "And this is the body"
  // }).then(
  // message => alert(message)
  // );
  loader();
}

const clearAndSubmission = () => {
  setTimeout(function() {
  main.innerHTML = `
  <div style="height: 50vh;" class="d-flex flex-column align-items-start">
    <div class="d-flex flex-wrap">
    <h1 class="sub-size">SUBMISSION</h1>
    <h1 class="sub-size color: rgb(221, 29, 27);">CONFIRMED!</h1>
    </div>
    <p>Thank you for reaching out! A team member will be in<br>contact with you shortly. In the meantime,
    please take<br>a look at our site at<span style="color: rgb(221, 29, 27);"> xxartist.com</span>
    </p>
  </div>`
  clearTimeout(loaderTime)
  }, 3000);
}

const loader = () => {
  main.innerHTML = ""
  const loaderTime = setTimeout(function() {
  const loader = document.createElement('div');
  loader.classList.add('loader')
  main.appendChild(loader)
  clearAndSubmission();
  }, 500);
}