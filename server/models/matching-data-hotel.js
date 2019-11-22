import mongoose from 'mongoose';

const matchingDataHotelSchema = new mongoose.Schema({
  airport: {
    type: String,
    required: true,
  },
  placeId: {
    type: String,
    required: true,
  },
});

export default mongoose.model('MatchingDataHotel', matchingDataHotelSchema);
