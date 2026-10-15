const mongoose = require("mongoose");

const mesureSchema = new mongoose.Schema({
  capteur: { type: String, required: true },
  type: { type: String, required: true },
  valeur: { type: Number, required: true },
  unite: { type: String },
  date: { type: Date, default: Date.now }
});

mesureSchema.set("toJSON", {
  versionKey: false,
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    return ret;
  }
});

module.exports = mongoose.model("Mesure", mesureSchema);
