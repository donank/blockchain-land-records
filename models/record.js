var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RecordSchema = new Schema(
    {
        old_owner_name : { type : String, default : "NA" },
        old_owner_unique_id : { type : String, default : "NA" },
        current_owner_name : { type : String },
        current_owner_unique_id : { type : String },
        nonce : { type : Number },
        sell_price : { type : Number },
        total_area : { type : Number }
    }
)

module.exports = mongoose.model('Record', RecordSchema)