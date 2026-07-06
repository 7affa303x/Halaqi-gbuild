const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({
    message: "مرحباً بك في منصة حلاقي - Halaqi Platform",
    status: "الخدمة تعمل بنجاح",
    version: "1.0.0 MVP",
    endpoints: {
      auth: "/api/v1/auth",
      salons: "/api/v1/salons",
      bookings: "/api/v1/bookings"
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Halaqi Server is running...');
});
