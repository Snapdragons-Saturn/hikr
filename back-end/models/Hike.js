const mongoose = require('../connection')


const HikeSchema = new mongoose.Schema({
        
})

const Hike = mongoose.model("Hike", HikesSchema)

module.exports = Hike