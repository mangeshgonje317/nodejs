import express from 'express'
const router = express.Router();
import person from "../models/person.js";

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    // create a new person document using mongoose model
    const newPerson = new person(data);
    // save new person in database
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(Error);
    res.status(500).json({ error: "internal server error" });
  }
});

// getting person data from server
router.get("/", async (req, res) => {
  try {
    const data = await person.find();
    console.log("data saved");
    res.status(200).json(data);
  } catch (error) {
    console.log(Error);
    res.status(500).json({ error: "internal server error" });
  }
});

// parametre base serch worktype

router.get("/:workType", async (req, res) => {

  const workType= req.params.workType

  try {
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response =await person.find({work:workType});
      console.log('response fetched')
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: "invalid worktype" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});


export default router;