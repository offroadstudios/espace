const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/galleryDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Create Gallery Schema
const gallerySchema = new mongoose.Schema({
    src: String,
    original: String,
    width: Number,
    height: Number,
});

// Create Gallery Model
const Gallery = mongoose.model("Gallery", gallerySchema);

// API to get all gallery items
app.get('/gallery', async (req, res) => {
    const galleryItems = await Gallery.find();
    res.json(galleryItems);
});

// API to add a new gallery item
app.post('/gallery', async (req, res) => {
    const newGalleryItem = new Gallery(req.body);
    await newGalleryItem.save();
    res.json(newGalleryItem);
});

// API to delete a gallery item
app.delete('/gallery/:id', async (req, res) => {
    const deletedItem = await Gallery.findByIdAndDelete(req.params.id);
    res.json(deletedItem);
});

app.listen(4000, () => {
    console.log("Server running on port 4000");
});
