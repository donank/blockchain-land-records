var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ContractSchema = new Schema(
    {
        owner_address : { type: String},
        owner_signature : { type : String },
        fees : { type : Number },
        force_transfer_after : { type : Date },
        nominee_addresses : { type : [{String, String}] },
        priortize_nominees : { type : Boolean },
    }
)

module.exports = mongoose.model('Contract', ContractSchema)