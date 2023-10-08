import express from "express";
import Flight from "../model/flightsModel.js";
import data from "../data.js";

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
    // await Flight.remove({});
    const createFlight = await Flight.insertMany(data.flights);
    res.send({ createFlight});
});
export default seedRouter;