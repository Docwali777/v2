const express = require('express');
const votingData = require('../models/votingdata')

const user = {}

user.index = (req, res)=>{
votingData.find({user: req.user.username}, (err,voting)=>{
  if(err){console.log(err);}
  else {
    console.log('----------------',voting);
    
    res.render('user/index', {
      voting
    })
  }
})

}



module.exports = user
