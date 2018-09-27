const Twit = require('../models/Twit')
module.exports = {
  createOne: (req, res) => {
    let twit = new Twit({ content: req.body.content, owner: req.decoded._id })
    twit.save()
      .then(response => res.status(201).json(response))
      .catch(err => res.status(500).json(err))
  },
  getAll: (req, res) => {
    Twit.find({})
      .sort([['updatedAt', 'descending']])
      .populate('owner')
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).json(err))
  },
  getAllMine: (req, res) => {
    Twit.find({ owner: req.decoded._id })
      .sort([['updatedAt', 'descending']])
      .populate('owner')
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).json(err))
  },
  searchTwitByTitle: (req, res) => {
    Twit.find({ content: { $regex: req.params.search, $options: 'i' } })
      .populate('owner')
      .then((response) => res.status(200).json(response))
      .catch((err) => res.status(500).json(err))
  },

  getById: (req, res) => {
    Twit.findById({ _id: req.params.id })
      .populate('owner')
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).json(err))
  },

  putById: (req, res) => {
    Twit.findById({ _id: req.params.id, owner: req.decoded._id })
      .populate('owner')
      .then(oldTwit => {
        Twit.updateOne({ _id: req.params.id }, { content: req.body.content })
          .then(response => res.status(200).json(response))
          .catch(err => res.status(500).json(err))
      })
      .catch(err => res.status(500).json(err))
  },

  deleteById: (req, res) => {
    Twit.findById({ _id: req.params.id, owner: req.decoded._id })
      .then(result => {
        let hapus = new Twit({ _id: result._id })
        hapus.remove()
          .then(response => res.status(200).json(response))
          .catch(err => res.status(500).json(err))
      })
      .catch(err => res.status(500).json(err))
  }
}
