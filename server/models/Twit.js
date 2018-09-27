const mongoose = require('mongoose')
const Schema = mongoose.Schema
const User = require('../models/User')

const twitSchema = new Schema({
  content: String,
  owner: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true })

twitSchema.pre('save', function (next) {
  User.updateOne({ $push: { twits: this._id } })
    .then(response => {
      next()
    })
    .catch(err => console.log(err))
})

twitSchema.pre('remove', function (next) {
  User.updateOne({ $pull: { twits: this._id } })
    .then(response => {
      next()
    })
    .catch(err => console.log(err))
})

const Twit = mongoose.model('Twit', twitSchema)
module.exports = Twit
