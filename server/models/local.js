import mongoose from 'mongoose';
//index를 추가해야합니다.
const localSchema = new mongoose.Schema({
    local: [{
        title: {
            type: String,
            required: true,
        },
        cityIds: [{
            type: Number,
            required: true,
        }],
        rank: {
            type: Number,
            required: false,
        },
        price: [{
            type: Number,
            required: false,
        }],
        image: [{
            type: String,
            required: false,
        }]

    }]
});

export default mongoose.model('local', localSchema);
