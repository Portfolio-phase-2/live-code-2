const User = require('../models/User')
const hash = require('bycjwt')

module.exports = {
  register: (req, res) => {
    let objUser = {
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email
    }
    let user = new User(objUser)
    user.save()
      .then(response => res.status(201).json(response))
      .catch(err => res.status(500).json(err))
  },
  login: (req, res) => {
    let email = req.body.email
    let password = req.body.password

    User.findOne({ $or: [ { email: email }, { username: email } ] })
      .then(user => {
        if (hash.bcdecode(password, user.password)) {
          res.status(200).json({
            token: hash.jwtencode({
              _id: user._id,
              name: user.name,
              username: user.username,
              email: user.email,
              role: user.role
            })
          })
        }
      })
      .catch(() => { res.status(500).json({ err: true }) })
  },
  getOne: (req, res) => {
    User.findById({ _id: req.decoded._id })
      .then(response => {
        let user = {
          name: response.name,
          _id: response._id,
          username: response.username,
          email: response.email,
          followings: response.followings,
          twits: response.twits
        }
        console.log(response)
        res.status(200).json(user)
      })
      .catch(err => res.status(500).json(err))
  },
  getAllRand: (req, res) => {
    User.find({})
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).json(err))
  }
}
