const hash = require('bycjwt')
const User = require('../models/User')

module.exports = (req, res, next) => {
  let token = req.headers.token
  if (token) {
    let verify = hash.jwtdecode(token)
    User
      .findOne({ _id: verify._id })
      .then(response => {
        if (response) {
          req.decoded = verify
          next()
        } else {
          res.status(401).json({
            'message': 'No Access'
          })
        }
      })
      .catch(() => {
        res.status(500).json({
          'message': 'Server error'
        })
      })
  } else {
    res.status(401).json({
      'message': 'No Authenticate'
    })
  }
}
