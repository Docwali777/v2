const express = require('express');
const router = express.Router({mergeParams: true})
const user = require('../controllers/User')

const isLoggedin =(req, res, next) =>{
  if(req.isAuthenticated()){
    return next()
  }
  res.redirect('/login')
}

router.get('/user', isLoggedin , user.index )


module.exports = router
