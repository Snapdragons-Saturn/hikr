const mongoose = require('../connection')


const HikeSchema = new mongoose.Schema({
        hikeID: String,
        stateAbb: String,
        datetimeAdd: Number,
        hikeName: String,
        hikeDesc: String,
        hikeDiff: String,
        hikeLen: Number,
        hkeTerrain: String,
        userID: Number
})

const Hike = mongoose.model("Hike", HikeSchema)

module.exports = Hike