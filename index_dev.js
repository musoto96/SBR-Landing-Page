const express = require('express');
const path = require('path');

const app = express();
//const PORT = 8561;
const PORT = 3000;

//app.use(express.static(path.join(__dirname, 'build')));
//app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'build', 'index.html')));

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));