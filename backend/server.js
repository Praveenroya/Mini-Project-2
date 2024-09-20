const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {connectToDatabase }= require('./config/db');

dotenv.config();
connectToDatabase();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./Routes/userRoute'));
app.use('/api/videos', require('./Routes/videoRoute'));

const PORT =  5000;
app.listen(PORT, () => {
  console.log("Server running on port" +PORT);
});
