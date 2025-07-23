// Main server entry for FixMyRide Admin Backend
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Import routers
const userRouter = require('./routes/userRoutes');
const requestRouter = require('./routes/requestRoutes');
const reportRouter = require('./routes/reportRoutes');
// const adminRouter = require('./routes/adminRoutes'); // Uncomment when admin auth is ready

// MongoDB connection (add your link in next step)
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));

// API routes
app.use('/api/users', userRouter);
app.use('/api/requests', requestRouter);
app.use('/api/reports', reportRouter);
// app.use('/api/admin', adminRouter); // Uncomment when admin auth is ready

app.get('/', (req, res) => {
  res.send('FixMyRide Admin Backend Running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
