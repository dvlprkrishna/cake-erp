import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import helmet from "helmet";
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from "morgan";

import clientRoutes from './routes/client.js'
import generalRoutes from './routes/general.js'
import salesRoutes from './routes/sales.js'
import managementRoutes from './routes/management.js'


// configs
dotenv.config();
const app = express();
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({
    policy: 'cross-origin'
}))
app.use(morgan('common'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(cors())

// Routes
app.use('/client', clientRoutes)
app.use('/general', generalRoutes)
app.use('/sales', salesRoutes)
app.use('/management', clientRoutes)