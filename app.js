const express = require('express');
const app = express();
const path = require('path');

// ----------------------------------------------------------------

const mainFolder = path.join(__dirname, 'public', 'oss');
const tilbakemeldingFolder = path.join(__dirname, 'public', 'tilbakemeldinger');
const produktFolder = path.join(__dirname, 'public', 'produkter');

app.use('/', express.static(mainFolder));
app.use('/common.js', express.static(path.join(__dirname, 'public', 'common.js')));
app.use('/produkter', express.static(produktFolder));
app.use('/tilbakemeldinger', express.static(tilbakemeldingFolder));

// ----------------------------------------------------------------

app.get('/', (req, res) => {
    res.sendFile(path.join(mainFolder, 'index.html'));
});
app.get('/tilbakemeldinger', (req, res) => {
    res.sendFile(path.join(tilbakemeldingFolder, 'index.html'));
});
app.get('/produkter', (req, res) => {
    res.sendFile(path.join(produktFolder, 'index.html'));
});

// ----------------------------------------------------------------

const PORT = 3000 || process.env.PORT;
app.listen(PORT);