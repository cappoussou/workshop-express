const express = require('express');
const app = express();
const port = 5005;

const {addDate} = require('./midelware/date');


// app.get ('/', (req, res) => {
//    res.send('Hello World');
//  } );

// app.use('/static', express.static(__dirname + '/public/homePage.html'));

// Middleware en generale
app.use(addDate);

app.get ('/style.css', (req, res) => {
    res.sendFile(__dirname + '/public/style.css');
  } );

app.get ('/', (req, res) => {
  res.sendFile (__dirname + '/public/homePage.html');
 } );

 app.get ('/contactUs', (req, res) => { 
  res.sendFile (__dirname + '/public/contactUs.html');
  } );

  app.get ('/OurServices', (req, res) => {
    res.sendFile (__dirname + '/public/OurServices.html');
    } );

    app.listen(port, (err) => { 
      err ? console.log(err) : console.log(`Server is running on port ${port}`);
    });




// // route with middleware 
// app.get ('/with', addDate, (req, res) => { 
//   res.send('Hello World' + req.date);
// }
// );

// // route without middleware 
// app.get ('/without', (req, res) => {
//   res.send('Hello World' + req.date );
// }
// ); 

