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

// getting item based on teast
router.get("/getmenue/:tasteType", async (req, res) => {

  const tasteType = req.params.tasteType

  try {
    if (tasteType == "sour" || tasteType == "spicy" || tasteType == "sweet") {
      const response =await menue.find({taste:tasteType});
      console.log('response fetched')
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: "invalid teastType" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});



// updating person details

router.put("/menue/:id", async (req, res) => {
  try {
    const ItemId = req.params.id;
    const updatedmenueData = req.body;
    const response = await menue.findByIdAndUpdate(
      ItemId,
      updatedmenueData,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!response) {
      return res.status(404).json({ error: "menue item not found" });
    }
    console.log("data updated");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});
// delete record from database

router.delete("/menue/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    const response = await menue.findByIdAndDelete(itemId);
    if (!response) {
      return res.status(404).json({ error: "menue item not found" });
    }
    console.log("data deleted");
    res.status(200).json({message:'item deleted success'});
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});

export default router;
