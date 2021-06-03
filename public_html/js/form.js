function handleFileSelect(evt) {
  const fileList = evt.target.files;
  console.log(fileList[0].name);
  const custom = document.querySelector('.custom')
  custom.classList.remove('custom')
  custom.classList.add('custom-success')
}

const main = document.getElementById('main');

const form = document.forms[0];

const clearAndSubmission = () => {
  setTimeout(function() {
  main.innerHTML = `
  <div class="m-auto">
    <div class="d-flex flex-wrap">
    <h1 class="sub-size">SUBMISSION</h1>
    <h1 class="sub-size color: rgb(221, 29, 27);">CONFIRMED!</h1>
    </div>
    <p>Thank you for reaching out! A team member will be in<br>contact with you shortly. In the meantime,
    please take<br>a look at our site at<span style="color: rgb(221, 29, 27);"> xxartist.com</span>
    </p>
  </div>`
  clearTimeout(loaderTime)
  }, 1);
}

const submitForm = () => {
  const file_data1 = $('#file-1').prop('files')[0];
  const file_data2 = $('#file-2').prop('files')[0];
  const file_data3 = $('#file-3').prop('files')[0];
  const fileName1 = file_data1.name
  const fileName2 = file_data2.name
  const fileName3 = file_data3.name
  const allFiles = [fileName1, fileName2, fileName3]
  let downloadURLS = []
  var storage = firebase.storage();
  var pathReference = storage.ref();
  
    pathReference.child(`resumes/${file_data1.name}`).getDownloadURL()
    .then((url) => {
      console.log(url)
      downloadURLS.push(url)
  })
    pathReference.child(`resumes/${file_data2.name}`).getDownloadURL()
    .then((url) => {
      console.log(url)
      downloadURLS.push(url)
  })
    pathReference.child(`resumes/${file_data3.name}`).getDownloadURL()
    .then((url) => {
      console.log(url)
      downloadURLS.push(url)
      sendEmail(downloadURLS, allFiles)
  })

  const sendEmail = (attachments, allFiles) => {
    Email.send({
      Host : "aspmx.l.google.com",
      Username : "psk65lava@gmail.com",
      Password : "Sammy6565656565",
      To : 'psk65lava@gmail.com',
      From : "psk65lava@gmail.com",
      Subject : "This is the subject",
      Body : "And this is the body",
      Attachments: 
          [
            {
              name: `${allFiles[0]}`,
              path: `${attachments[0]}`,
            },
            {
              name: `${allFiles[1]}`,
              path: `${attachments[1]}`,
            },
            {
              name: `${allFiles[2]}`,
              path: `${attachments[2]}`,
            }
          ]
    }).then(
    message => alert(message)
    );
  }

  main.innerHTML = ""
  loaderTime = setTimeout(function() {
  const loader = document.createElement('div');
  loader.classList.add('loader', 'm-auto')
  main.appendChild(loader)
  clearAndSubmission();
  }, 1);
}

const endUpload = (label, file) => {
  setTimeout(function() {
    clearTimeout(uploading)
    label.parentElement.classList.add('background')
    label.innerText = file
  }, 2000);
}

function fileNameReplace(event){
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
    endUpload(spanLabel, fileName);
    }, 500);
}