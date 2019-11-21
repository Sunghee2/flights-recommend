import mongoose from 'mongoose';

const hotelSchema = new mongoose.Schema({
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
  WKPlaceID: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
  },
});

export default mongoose.model('Hotel', hotelSchema);
