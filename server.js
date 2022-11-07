const express = require('express');
const payload = require('payload');

require('dotenv').config();
const app = express();
app.use(express.json());


// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});



// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

// Add your own express routes here

app.post('/api/register', async (req, res) => {

  const data = req.body;
  console.log("node_______", data);
  if(!data.email) {
    res.json({error: 'Email is required'});
    return;
  }

  if(!data.password) {
    res.json({error: 'Password is required'});
    return;
  }

  const p_res = await payload.create({
    collection: 'users',
    data: {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
    }
  });

  res.json(p_res);
});

app.listen(3000);
