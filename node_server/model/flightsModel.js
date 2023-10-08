import mongoose from "mongoose";

const flightSchema = new mongoose.Schema(
  {
    dep_iata: { type: String, required: true },
    
    arr_iata: { type: String, required: true },
    flight_iata: { type: String, required: true },
    flight_number: { type: String, required: true },
    airline_iata: { type: String, required: true },
    status: { type: Boolean, require: true},
    dep_time: { type: Date, required: true },
    arr_time: { type: Date, required: true },
    imageFlight: { data: Buffer, contentType: String },
  },
  {
    timestamps: true,
  }
);
const Flight = mongoose.model("Flights", flightSchema);
export default Flight;