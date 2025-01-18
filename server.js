const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/tasks', require('./routes/taskRoutes'));

// Connect to MongoDB
mongoose.connect('mongodb+srv://abhilash:abhilash1234@cluster10.kmnbete.mongodb.net/todoList', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
