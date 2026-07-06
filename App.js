const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('<h1>Halaqi Platform is Live!</h1>');
});
app.listen(process.env.PORT || 3000);
