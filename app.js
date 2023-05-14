const express = require('express');
const app = express();
const userRouter = require('./routes/users.route')


// route 
app.use("/api/user", userRouter);

app.use("/register", (req, res) => {
  // res.status(200).json({
  //   "message": "i am Md. kabir ibna salman",
  //   statusCode: 200,
  // });
  // res.redirect('/login');
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/register.html")
});

app.use('/login', (req, res) => {
  // res.send('Hi I am login page');
  // res.cookie('name', 'salman');
  // res.cookie('age', '23');
  res.clearCookie('name');
  res.append('id', '15000')
  res.end();
})

app.get('/', (req, res) => {
  // res.send('<h1>i am a get request at home route</h1>');
  // res.end()
  res.statusCode = 200;
  res.sendFile(__dirname + "/views/index.html")
});

app.use((req, res) => {
  res.send('<h1> 404 !!! Not a Valid URL')
})



// const handleReadFile = (status, fileName, req, res) => {
//   fs.readFile(fileName, "utf-8", (err, data) => {
//     if (err) {
//       console.log(err)
//     }
//     else {
//       res.writeHead(status, { "Content-Type": "text/html" })
//       res.write(data);
//       res.send()
//     }
//   })
// }


// app.get('/', (req, res) => {

//   if (req.url == '/') {
//     handleReadFile(200, "index.html", req, res)
//   }
//   else if (req.url == '/about') {
//     handleReadFile(200, "about.html", req, res)
//   }
//   else if (req.url == '/contact') {
//     handleReadFile(200, "contact.html", req, res)
//   }
//   else {
//     handleReadFile(404, "404.html", req, res)
//   }
// })


app.get('/', (req, res) => {
  res.send('server is running successfully new site')
})




module.exports = app;