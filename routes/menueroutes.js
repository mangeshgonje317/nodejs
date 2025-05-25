import express  from 'express'
const router = express.Router();
import menue from "../models/menu.js";

// post items to strorage

router.post("/menue", async (req, res) => {
  try {
    const menueData = req.body;
    const newMenu = new menue(menueData);
    const response = await newMenu.save();
    console.log("menue updated successfully");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "data not updated" });
  }
});

//  get menue items

router.get("/getmenue", async (req, res) => {
  try {
    const data = await menue.find();
    console.log("menue fetched successfully");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

export default router;
