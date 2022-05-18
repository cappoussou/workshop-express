 
 const addDate = (req, res, next) => {
   const date = new Date();
req.date= date ;
   const h = date.getHours();
   if (h > 9 && h < 17) {
next()  
 } else {
      res.send ('We are closed');
    } 
 }

  module.exports = {addDate};
