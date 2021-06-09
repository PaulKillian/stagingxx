const main = document.getElementById('main');
const form = document.forms[0];
const nav = document.getElementById('main-menu')
nav.classList.add('hide')


const endUpload = (label, file, element) => {
  setTimeout(function() {
    clearTimeout(uploading)
    label.parentElement.classList.add('background')
    label.innerText = file.slice(0, 20) + "..."
    element.classList.add('inputfile-color-change')
    element.classList.remove('inputfile')
  }, 2000);
}

const fileNameReplace = (event) => {
  const file_data = event.target.files[0]
  const storageRef = firebase.storage().ref();
  const resumesRef = storageRef.child(`resumes/${file_data.name}`);
  resumesRef.put(file_data);
  
  const id = event.target.id
  const name = document.getElementById(id); 
  const fileName = name.files.item(0).name;
  const label	 = name.nextSibling;
  const newLabel = label.nextSibling.childNodes[0].id
  const spanLabel = document.getElementById(newLabel)
  uploading = setTimeout(function() {
    spanLabel.innerText = "uploading..."
    endUpload(spanLabel, fileName, name);
    }, 500);
}

const clearAndSubmission = () => {
  setTimeout(function() {
  main.innerHTML = `
  <div class="row">
      <div class="col-sm-12 col-md-11 col-lg-10 d-flex justify-content-end">
        <img class="submit-x-pattern" src="assets/Circle And X Pattern.png">
      </div>
    </div>
    <div>
      <div class="col-sm-12 col-lg-12">
        <div class="d-flex justify-content-center">
          <div class="d-flex justify-content-start">
            <img class="submit-elipse col-7"src="assets/Elipse Pattern.png">
          </div>
          <img class="submit animated slideInDown delay--5s" src="assets/Submission_Confirmed.png">
        </div>
      </div>
    </div>
    <div>
      <div class="col-11 col-md-9 mt-4">
        <p class="submit-p">Thank you for reaching out! A team member will be in<br>
        contact with you shortly. In the meaning time, please take<br>
        a look at our site at <a href="https://xxartists.com"><span class="submit-span" style="color: rgb(221, 29, 27);">xxartists.com</span></a></p>
        <img class="submit-hollow-circle" src="assets/Circle Ring.png">
      </div>
      <div class="col-12 col-md-12 d-flex justify-content-end">
        <img class="submit-solid-circle" src="assets/Circles and Ring.png">
      </div>
    </div>`
  clearTimeout(loaderTime)
  }, 2000);
}

const loader = () => {
  main.innerHTML = ""
    loaderTime = setTimeout(function() {
    const loaderContainer = document.createElement('div');
    const loader = document.createElement('div');
    loaderContainer.classList.add('d-flex', 'align-items-center');
    loaderContainer.style.height="100vh";
    loader.classList.add('loader', 'm-auto');
    main.appendChild(loaderContainer);
    loaderContainer.appendChild(loader);
    clearAndSubmission();
    }, 1);
  }

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const formData = new FormData(this);
  const entries = formData.entries();
  const data = Object.fromEntries(entries);

  const file1 = $('#file-1').prop('files')[0];
  const file2 = $('#file-2').prop('files')[0];
  const file3 = $('#file-3').prop('files')[0];
  const file3Length = document.getElementById('file-3').files.length
  let files = [file1.name, file2.name]
  if(file3Length !== 0) { 
    files.push(file3.name)
  }

  const storage = firebase.storage();
  const pathReference = storage.ref();
  const promises = [];
  for (let i = 0; i <= files.length; i++) {
    if(files[i] === undefined) {
      continue;
    } else {
      promises.push(pathReference.child(`resumes/${files[i]}`).getDownloadURL());
    }
  }

  Promise.all(promises).then((urls) => {
    const emailParams = []
    urls.forEach((url, index) => {
      const emailData = {
        name: files[index],
        path: url
      }
      emailParams.push(emailData)
    });

    Email.send({
      SecureToken : "a4d1145c-bbaf-471e-a7d6-cd680cc48847",
      To : "psk65lava@gmail.com",
      From : data.email,
      Subject : `Resume submission from site, ${data.firstName} ${data.lastName}` ,
      Name: data.firstName,
      Body : `<html><h1>${data.firstName} ${data.lastName}</h1>
                <h2>${data.position}</h2>
                <h3>${data.email}</h3>
                <p>${data.message}</p>
              </html>`,
      Attachments: emailParams
    })
  });
  loader()
})