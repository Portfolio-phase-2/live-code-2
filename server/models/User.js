const mongoose = require('mongoose')
const Schema = mongoose.Schema
const hash = require('bycjwt')

const userSchema = new Schema({
  name: String,
  username: {
    type: String,
    unique: true,
    required: [true, 'Please input username']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please input email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    validate: {
      validator: function (v) {
        if (v.length <= 3) return false
      }
    }
  },
  twits: [{ type: Schema.Types.ObjectId, ref: 'Twit' }],
  followings: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  role: { type: String, default: 'member' },
  deleteAt: { type: Date, default: null }
}, { timestamps: true })

userSchema.post('validate', function () {
  this.password = hash.bcencode(this.password)
})

const User = mongoose.model('User', userSchema)
module.exports = User
