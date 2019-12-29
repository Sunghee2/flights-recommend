import mongoose from 'mongoose';

const localSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  cityIds: [{
    type: Number,
    required: true,
    index: true,
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
  }],
});

export default mongoose.model('Local', localSchema);