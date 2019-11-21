import mongoose from 'mongoose';
//image가 없습니다.
//index를 추가해야합니다.
const ticketsSchema = new mongoose.Schema({
    tickets: [{
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

    }]
});

export default mongoose.model('tickets', ticketsSchema);
