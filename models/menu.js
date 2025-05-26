import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        required: true
    },
    is_dring: {
        type: String,
        enum: ["true", "false"],
        required: true
    },
    ingredients: {
        type: String,
        // enum: ["chicken wings", "Spices", "sauce"]
    },
    num_sales: {
        type: Number,
        default:0
    }
});

const menue = mongoose.model("menue", menuItemSchema);

export default menue;
