import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    noticeDescription: {
        type: String,
        required: true,
        trim: true
    },
    fromDate: {
        type: Date,
        required: true
    },
    toDate: {
        type: Date,
        required: true
    },
    
});

// Define TTL index on toDate field
noticeSchema.index({ toDate: 1 }, { expireAfterSeconds: 0 }); // 0 indicates documents will be deleted immediately after toDate

const notice = mongoose.model('notice', noticeSchema);

export default notice;
