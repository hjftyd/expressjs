const mongoose = require('mongoose')

const TagSchema = new mongoose.Schema ({
    name: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model("Tag", TagSchema)