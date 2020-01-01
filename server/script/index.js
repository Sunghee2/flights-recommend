import fs from 'fs';
import es from 'event-stream';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import Flight from '../models/flight';
import Hotel from '../models/hotel';
import Local from '../models/local';
import MatchingDataHotel from '../models/matching-data-hotel';
import MatchingDataLocal from '../models/matching-data-local';
import Ticket from '../models/ticket';

dotenv.config();
const {
  DB_NAME,
  DB_URI
} = process.env;

function handleError(err) {
  console.error(err);
  throw err;
}

async function connect(uri, dbName) {
  try {
    await mongoose.connect(uri, {
      dbName,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true
    });
  } catch (err) {
    handleError(err);
  }
}

function save(models, json, index) {
  try {
    models[index].insertMany(json);
  } catch (err) {
    handleError(err);
  }
}

function readFileAndSave(filenames, models) {
  filenames.forEach((filename, index) => {
    const path = `./script/data/${filename}.log`;

    const stream = fs
      .createReadStream(path)
      .on('close', () => {
      })
      .pipe(es.split())
      .pipe(
        es.map(line => {
          try {
            const json = JSON.parse(line);
        })
      );
  });
}

async function importData() {
  const db = mongoose.connection;
  const filenames = [
    'flights_bookings',
    'hotels',
    'local',
    'matching_data_hotel',
    'matching_data_local',
    'tickets'
  ];
  const models = [
    Flight,
    Hotel,
    Local,
    MatchingDataHotel,
    MatchingDataLocal,
    Ticket
  ];

  await connect(DB_URI, DB_NAME);
  db.once('open', async err => {
    if (err) handleError(err);

    await readFileAndSave(filenames, models);
  });
}

importData();