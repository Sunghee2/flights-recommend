import mongoose from 'mongoose';

const flightSchema = new mongoose.Schema({
  tripType: String,
  itinerary: {
    airItns: [{
      startAirp: {
        type: String,
        required: true,
        uppercase: true,
      },
      startAirpKr: {
        type: String,
        required: true,
      },
      startDt: {
        type: Date,
        required: true,
      },
      endAirp: {
        type: String,
        required: true,
        uppercase: true,
      },
      endAirpKr: {
        type: String,
        required: true,
      },
      endDt: {
        type: Date,
        required: true,
      },
    }],
  },
});

export default mongoose.model('Flight', flightSchema);
