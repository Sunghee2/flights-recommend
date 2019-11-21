import mongoose from 'mongoose';

const {
  Schema,
} = mongoose;
const planSchema = new Schema({
  day: [{
    date: {
      type: Number,
      required: true,
    },
    hotel: {
      type: Schema.Types.ObjectId,
      ref: 'Hotel',
    },
    tour: [{
      type: Schema.Types.ObjectId,
      ref: 'Tour',
    }],
  }],
});

export default mongoose.model('Plan', planSchema);
