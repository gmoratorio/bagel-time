const express = require('express');
const router = express.Router();
const User = require('../db/user');

/* GET users listing. */
router.get('/:id', function(req, res) {
  const id = req.params.id;

  if(isInteger(id)){
    User.getOne(id)
    .then((result)=>{
      if(result){
        res.json(result);
      }
      else{
        res.status(404);
        res.send("User not found!");
      }
    })
    .catch((err)=>{
      res.send(err);
    });
  }
  else{
    res.status(500);
    res.send("Invalid ID");
  }
  // res.send('respond with a resource');
});


function isInteger(id){
  if(isNaN(id)){
    return false;
  }
  else{
    return true;
  }
}


module.exports = router;
