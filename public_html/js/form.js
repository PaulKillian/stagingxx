const main = document.getElementById('main');
const form = document.forms[0];

// function handleFileSelect(evt) {
//   const fileList = evt.target.files;
//   console.log(fileList[0].name);
//   const custom = document.querySelector('.custom')
//   custom.classList.remove('custom')
//   custom.classList.add('custom-success')
// }

const endUpload = (label, file, element) => {
  setTimeout(function() {
    clearTimeout(uploading)
    label.parentElement.classList.add('background')
    label.innerText = file
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
      <div class="col-sm-12 col-md-11">
        <img class="submit-elipse"
        src="assets/Elipse Pattern.png">
      </div>
        <div class="col-sm-11 col-lg-12">
          <div>
            <img class="submit-x-pattern" src="assets/Circle And X Pattern.png">
            <img class="submit" src="assets/Submission_Confirmed.png">
          </div>
          <div>
            <p class="col-lg-7">Thank you for reaching out! A team member will be in<br>
            contact with you shortly. In the meaning time, please take<br>a look at 
            look at our site at <a href="https://xxartists.com"><span style="background-color: rgb(221, 29, 27);"
            <span>xxartists.com</span></a></p>
            <img class="sumbit-hollow-circle" src="assets/Circle Ring.png">
          </div>  
        </div>
      </div>
      <div class="d-flex col-md-12 position-solid-circle justify-content-end">
        <img class="submit-solid-circle" src="assets/Circles and Ring.png">
      </div>
    </div>`
  clearTimeout(loaderTime)
  }, 2000);
}

const loader = () => {
  main.innerHTML = ""
    loaderTime = setTimeout(function() {
    const loader = document.createElement('div');
    loader.classList.add('loader', 'm-auto')
    main.appendChild(loader)
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

  var storage = firebase.storage();
  var pathReference = storage.ref();
  var promises = [];
  for (var i = 0; i <= files.length; i++) {
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
      Host : 'aspmx.l.google.com',
      Username : 'psk65lava@gmail.com',
      Password : 'Sammy6565656565',
      To : 'psk65lava@gmail.com',
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