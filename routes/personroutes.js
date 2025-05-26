import express, { response } from "express";
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
  const workType = req.params.workType;

  try {
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await person.find({ work: workType });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: "invalid worktype" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});
// updating person details

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedpersonData = req.body;
    const response = await person.findByIdAndUpdate(
      personId,
      updatedpersonData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!response) {
      return res.status(404).json({ error: "person not found" });
    }
    console.log("data updated");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});
// delete record from database

router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const response = await person.findByIdAndDelete(personId);
    if (!response) {
      return res.status(404).json({ error: "person not found" });
    }
    console.log("data deleted");
    res.status(200).json({message:'person deleted success'});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

export default router;
