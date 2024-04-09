import mongoose, { Schema } from "mongoose";
const ticketSchema = new Schema({
  ticketPrice: {
    type: Number,
    required: true,
  },
  attendeeId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  eventId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  accessType: {
    type: String,
    required: true,
    enum: ["ordinary", "premium", "vip"],
  },
});
export const Ticket = mongoose.model("Ticket", ticketSchema);
