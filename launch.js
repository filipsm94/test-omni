const express = require('express'),
    path = require('path');

const app = express();

app.use(express.static('./dist/omni-app'));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname,'/dist/omni-app/index.html'));
});

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});