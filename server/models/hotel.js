import mongoose from 'mongoose';
//id값을 넣어줘야합니다.
//image가 URL이 아닙니다.
const hotelSchema = new mongoose.Schema({
    hotels: [{
        HotelName: {
            type: String,
            required: true,
          },
        MinRateKRW: {
            type: Number,
            required: true,
        },
        OverallRating: {
            type: Number,
            required: true,
        },
        ImageID: {
            type: String,
            required: true,
        },
        WKPlaceID: {
            type: String,
            required: true,
        }
    }]
});

export default mongoose.model('hotel', hotelSchema);
