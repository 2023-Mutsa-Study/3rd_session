const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const introSchema = Schema({
    postName: {
        type: String,
        maxlength: 10,
        required: true
    },
    introduction: {
        type: String,
        minlength: 5,
        required: true
    }
}, {versionKey: false});

introSchema.set("timestamps", {createdAt: 'postTime', updatedAt: false});

module.exports = mongoose.model('Introduction', introSchema);   