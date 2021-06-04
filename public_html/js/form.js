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

var files = [];

const submitForm = (event) => {
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
      console.log(emailParams);
    });

    Email.send({
      Host : "aspmx.l.google.com",
      Username : "psk65lava@gmail.com",
      Password : "Sammy6565656565",
      To : 'psk65lava@gmail.com',
      From : "psk65lava@gmail.com",
      Subject : "This is the subject",
      Body : "And this is the body",
      Attachments: emailParams
    })
  });
  loader()
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

const endUpload = (label, file) => {
  setTimeout(function() {
    clearTimeout(uploading)
    label.parentElement.classList.add('background')
    label.innerText = file
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
    endUpload(spanLabel, fileName);
    }, 500);
}