const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRouter = require('./auth/Routes/authroutes');
const multer = require('multer'); // Import multer for handling file uploads
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Route
app.use('/api/auth', authRouter);

// Connect to MongoDB
mongoose.connect('mongodb+srv://Rayen:t3oW5mSvT87kzoO0@cluster0.xbcoj4b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB:', err);
    });

// Multer configuration for file upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'C:/Users/LENOVO/Desktop/uploads'); // Specify the upload directory
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Keep the original file name
    }
});

const upload = multer({ storage: storage });

// File upload route
app.post('/upload', upload.single('newFile'), (req, res) => {
    // File has been uploaded and saved to the local folder
    res.status(200).send('File uploaded successfully');
});

// Error handling middleware
app.use((err, req, res, next) => {
    err.status = err.status || 500; // Set default status to 500 if not provided
    const statusCode = err.status >= 100 && err.status < 600 ? err.status : 500; // Ensure status code is within valid range

    res.status(statusCode).json({
        status: 'error',
        message: err.message
    });
});

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
