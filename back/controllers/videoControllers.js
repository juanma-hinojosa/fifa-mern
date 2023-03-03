const Video = require("../models/videoModels");

class videoControllers {
    async findAll() {
        try {
            return await Video.find().lean();
        } catch (error) {
            throw error
        }
    }

    async create(video) {
        try {
            return await Video.create(video);
        } catch (error) {
            throw error
        }
    }

    async delete(id) {
        try {
            return await Video.findByIdAndDelete(id);
        } catch (error) {
            throw error
        }
    }

    async update(id) {
        try {
            return await Video.findByIdAndUpdate(id);
        } catch (error) {
            throw error
        }
    }
}

module.exports = new videoControllers;