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

function executeBulk(bulk, models, index) {
  bulk.execute(err => {
    if (err) handleError(err);

    bulk = models[index].collection.initializeOrderedBulkOp();
  });
}

function readFileAndSave(filenames, models) {
  filenames.forEach((filename, index) => {
    const path = `./script/data/${filename}.log`;
    var bulk = models[index].collection.initializeOrderedBulkOp();
    var counter = 0;

    const stream = fs
      .createReadStream(path)
      .on('close', () => {
        if (counter > 0) {
          executeBulk(bulk, models, index);
          counter = 0;
        }
      })
      .pipe(es.split())
      .pipe(
        es.map(line => {
          try {
            const json = JSON.parse(line);
            bulk.insert(json);
            counter++;

            if (counter % 300 == 0) {
              executeBulk(bulk, models, index);
              counter = 0;
            }
          } catch (err) {
            handleError(err);
          }
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