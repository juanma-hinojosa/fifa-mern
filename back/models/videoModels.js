const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const videoSchema = new Schema({
    video: {
        type: "string",
        require: true
    },
    review: {
        type: "string",
        require: true
    },
    fecha: {
        type: "string",
        require: true
    }
})

const Video = mongoose.model("videos", videoSchema)

module.exports = Video;