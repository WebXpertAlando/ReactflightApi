import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import multer from "multer";
import seedRouter from './routes/flightRoute.js';
import Flight from './model/flightsModel.js';

const app = express();

app.use(cors());

// flights
const flights = [];


app.get('/api/flights', (_req, res) => {
    res.json(flights);
  });
  
  app.post('/api/flights', (req, res) => {
    const flights = req.body.flight;
    flights.push(flight);
    res.json("Flights added");
  });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// storage

const Storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: Storage,
}).single("flightImage");

//routes
app.post("/seed", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const newFlight = new Flight({
        dep_iata : req.body.dep_iata,
        image: {
          data: req.file.filename,
          contentType: "image/jpg",
        },
        arr_iata : req.body.arr_iata,
        dep_time: req.body.dep_time,
        airline_iata: req.body.airline_iata,
        arr_time: req.body.arr_time,
        status: req.body.status,
        flight_number: req.body.flight_number,
        flight_iata: req.body.flight_iata,

      });
      newFlight
        .save()
        .then(() => res.send("successfull upload"))
        .catch((err) => console.log(err));
    }
  });
});

app.get("/flights", async (req, res) => {
  const flights = await Flight.find();
  res.send(flights);
});



//mongodb connect
mongoose
  .connect('mongodb://127.0.0.1:27017/flights')
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

  //routes
  // app.use("/api/seed", seedRouter);


app.get('/', (_req, res) => {
    res.send('Hello');
})

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`serve at http://localhost:${PORT}`);
  });

