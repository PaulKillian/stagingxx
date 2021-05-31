const http = require('http');
const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const app = express()
const nodemailer = require("nodemailer");

// app.use(bodyParser.urlencoded());
// app.use(bodyParser.json());

app.post('/', upload.single('my_file'), function (req, res, next) {
    console.log(req.file, req.body)
    main()
    // res.send(`Full name is:${req.body.fname} ${req.body.lname}.`);
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
})
// Create an instance of the http server to handle HTTP requests
// let app = http.createServer((req, res) => {
//     // Set a response type of plain text for the response
//     res.writeHead(200, {'Content-Type': 'text/plain'});

//     // Send back a response and end the connection
//     res.end('Hello World!\n');
// });

// Start the server on port 3000

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);

app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');