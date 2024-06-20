import express from 'express';
import cors from "cors";
import router from './routers/food.router';

const app = express();

app.use(
    cors({
    credentials:true,
    origin: ['http://localhost:3000'],
    })
);

app.use('/api/foods', router)

const PORT = 5000;
app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});

