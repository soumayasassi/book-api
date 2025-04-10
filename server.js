const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bookRoutes = require('./routes/books');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(express.json());


app.use('/api/books', bookRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API Book. Accédez à /api-docs pour la documentation.');
})
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4 // 👈 force l'utilisation d'IPv4
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
