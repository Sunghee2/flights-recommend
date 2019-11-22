import mongoose from 'mongoose';

const {
  Schema,
} = mongoose;
const planSchema = new Schema({
  days: [{
    day: {
      type: Number,
      required: true,
    },
    hotel: {
      type: Schema.Types.ObjectId,
      ref: 'Hotel',
    },
    tours: [
      new Schema({
        type: {
          type: String,
          enum: ['ticket', 'local'],
        },
        id: String,
      }),
    ],
  }],
});

export default mongoose.model('Plan', planSchema);
