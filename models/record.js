var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RecordSchema = new Schema(
    {
        old_owner_name : { type : String },
        old_owner_unique_id : { type : String },
        current_owner_name : { type : String },
        current_owner_unique_id : { type : String },
        nonce : { type : Number },
        sold_price : { type : Number },
        total_area : { type : Number }
    }
)

module.exports = mongoose.model('Record', RecordSchema)