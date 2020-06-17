const User = require('../models/user');
const { errorHandler } = require('../helpers/dbErrorHandler')
const jwt = require('jsonwebtoken'); //to generate signed token
const expressJwt = require('express-jwt')

exports.signup = (req,res) => {
  // console.log('req.body', req.body);
  const user = new User(req.body);
  user.save((err, user) => {
      if(err) {
        return res.status(400).json({
          err: errorHandler(err)
        });
      }
      res.json({
        user
      });
  });
};



exports.signin = (req, res)
