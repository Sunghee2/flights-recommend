import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import schema from './graphql';

dotenv.config();
const app = express();

const PORT = process.env.PORT || '3000';
const {
  DB_NAME,
  DB_URI,
} = process.env;

app.use(
  cors({
    origin: true,
    credentials: true,
  }),
);
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

mongoose.Promise = global.Promise;
mongoose.connect(DB_URI, {
  dbName: DB_NAME,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
}, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('🚀 Connection to the Atlas Cluster is successful!');
  }
});

// atlas 연결 확인 test - sample data
app.get('/', async (req, res) => {});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.listen(PORT, () => {
  console.log(`🚀 server is running on http://localhost:${PORT}`);
});