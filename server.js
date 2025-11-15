// ======================
// SERVER.JS – JAGA RESIK
// ======================
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Hilangkan warning strictQuery
mongoose.set('strictQuery', true);

// Connection string MongoDB Atlas
const mongoURI = mongodb+srv://Zayyan_db_user:user123covid19@cluster0.rkmops1.mongodb.net/jagaresikDatabase?retryWrites=true&w=majority

// Connect ke MongoDB Atlas
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB Atlas connected!'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Setup Express
const app = express();
const PORT = process.env.PORT || 5000; // Gunakan PORT dari Render

// Middleware
app.use(cors());
app.use(express.json());

// Route dasar
app.get('/', (req, res) => {
  res.send('🚀 Server Jaga Resik sudah jalan!');
});

// Health check
app.get('/healthz', (req, res) => {
  res.send('Server sehat! ✅');
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`🌐 Server berjalan di port ${PORT}`);
});
