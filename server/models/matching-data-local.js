import mongoose from 'mongoose';

const matchingDataLocalSchema = new mongoose.Schema({
  LocalId: {
    type: String,
    required: true,
  },
  Iata: {
    type: String,
    required: true,
  },
});

export default mongoose.model('MachingDataLocal', matchingDataLocalSchema);
