const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect Database
connectDB();

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/teachers', require('./routes/api/teachers'));
app.use('/api/students', require('./routes/api/students'));
app.use('/api/teacherprofile', require('./routes/api/teacherprofile'));
app.use('/api/studentprofile', require('./routes/api/studentprofile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server started on http://localhost:${PORT}`)
);