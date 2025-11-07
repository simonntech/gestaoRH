import express from 'express';
import { ROUTER } from './routes';

export default function createApp() {
    const app = express();

    app.use(express.json());
    app.use("/", ROUTER);

    return app;
}