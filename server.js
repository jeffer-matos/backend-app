const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin: 'http://localhost:8080' // Permitir apenas solicitações deste domínio
}));

// available slots
const slots = {
  '2023-12-17': ['08:00', '09:00', '10:00','14:00','15:00'],
  '2023-12-18': ['11:00', '12:00', '13:00','14:00','15:00'],
  '2023-12-19': ['11:00', '12:00', '13:00','14:00','15:00'],
  '2023-12-20': ['11:00', '12:00', '13:00','14:00','15:00'],
  '2023-12-21': ['11:00', '12:00', '13:00','14:00','15:00'],
  '2023-12-22': ['11:00', '12:00', '13:00','14:00','15:00'],

  //pode ser adicionado mais slots caso necessario
};

app.get('/slots', (req, res) => {
  res.json(slots);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
