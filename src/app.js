import express from 'express';
import cors from 'cors';
import indexRoutes from './routes/index.routes';
import configEnv from './config/env/envModule';
import connectDB from './config/database/database';
import morgan from 'morgan';
import bodyParser from 'body-parser'

configEnv();

const PORT = process.env.PORT || 3000;
const app = express();
app.set('port', PORT)
app.use(cors())

connectDB();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(indexRoutes);

app.listen(PORT, () => console.log(`Server on port: ${PORT}`));
