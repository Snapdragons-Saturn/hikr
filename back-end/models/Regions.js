const mongoose = require('../connection')
const Schema = mongoose.Schema


const RegionSchema = new Schema(
    {
        
    }
)

const Region = mongoose.model("Regions", RegionSchema)

module.exports = Region