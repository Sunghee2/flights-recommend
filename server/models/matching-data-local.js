import mongoose from 'mongoose';

const matchingDataLocalSchema = new mongoose.Schema({
  LocalId: {
    type: String,
    required: true,
    index: true,
  },
  Iata: {
    type: String,
    required: true,
  },
});

export default mongoose.model('MatchingDataLocal', matchingDataLocalSchema);