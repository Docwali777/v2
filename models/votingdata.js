const mongoose = require('mongoose');
let {Schema} = mongoose

const votingDataSchema = new Schema({
  user: String,
  options: {
    title: String,
    select: Array,
    data: Array,
    created: {
          type: Date
    }
  }
})



module.exports = mongoose.model('Voting', votingDataSchema)
