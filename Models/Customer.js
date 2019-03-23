const mongoose = require('mongoose');
const { Schema } = mongoose;

const customerSchema = new Schema({

    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    firstname: String,
    lastname: String,
    email: String

});

mongoose.model('customers', customerSchema);