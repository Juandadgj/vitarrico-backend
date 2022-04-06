import express from 'express';
import cors from 'cors';
import indexRoutes from './routes/index.routes';
import userRoutes from './routes/user.routes';
import productRoutes from './routes/product.routes';
import providerRoutes from './routes/provider.routes';
import orderRoutes from './routes/order.routes';
import configEnv from './config/env/envModule';
import connectDB from './config/database/database';
import morgan from 'morgan';
import bodyParser from 'body-parser'

configEnv();

const PORT = process.env.PORT || 3000;
const app = express();
app.set('port', PORT);
app.use(cors())

connectDB();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(indexRoutes);
app.use(userRoutes);
app.use(productRoutes);
app.use(providerRoutes);
app.use(orderRoutes);

app.listen(PORT, () => console.log(`Server on port: ${PORT}`));
