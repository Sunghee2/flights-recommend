import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
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
  image: {
    type: String,
  },
});

export default mongoose.model('Ticket', ticketSchema);
