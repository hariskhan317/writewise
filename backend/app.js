import express from "express";
import { config } from 'dotenv';
import appRouter from './routes/index.js'
import cors from 'cors'

const app = express();

app.use(cors({
    origin: ["http://localhost:3000"],
    methods: "any",
    credentials: true
}));

config();
app.use(express.json());
app.use('/api/v1',appRouter)
export default app;