import express from "express";
import personeRouter from './routes/personroutes.js'
import db from "./db.js";
import bodyParser from "body-parser";
import menueRoutes from './routes/menueroutes.js'
const app = express();

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("welcome to my server");
});
 
app.use('/person',personeRouter);
app.use('/' , menueRoutes);

app.listen(3000, () => {
  console.log("Listening  on port 3000");
});
