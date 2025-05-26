import express from "express";
import personeRouter from './routes/personroutes.js'
import db from "./db.js";
import bodyParser from "body-parser";
import menueRoutes from './routes/menueroutes.js'
import dotenv from 'dotenv'
 dotenv.config();
const PORT = process.env.PORT || 3000;
import serverless from 'serverless-http'

const app = express();

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("welcome to my server");
});
 
app.use('/person',personeRouter);
app.use('/' , menueRoutes);

// app.listen(PORT, () => {
//   console.log("Listening  on port 3000");
// });

export const handler = serverless(app);