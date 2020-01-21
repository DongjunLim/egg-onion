const express = require('express');
const config = require('./config');
const PORT = config.PORT;
const bodyParser = require('body-parser');
const apiRouter = require('./routes/index');
const app = express();
const CsvParser = require('./nugu/CsvParser');

app.use(bodyParser.json());
app.use('/api',apiRouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})




