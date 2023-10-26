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
    },
    postTime: {
        type: String,
        default: () => new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })
    }
}, {versionKey: false});

introSchema.set("timestamps", {updatedAt: false});

module.exports = mongoose.model('Introduction', introSchema);   