const express = require('express');

const app = express();

app.use('/', express.static('./public'));

app.set('port', process.env.PORT);

app.listen(app.get('port'), () => {
    console.log(`Express app listening on ${app.get('port')}`);
});