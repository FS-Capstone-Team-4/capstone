const port = process.env.PORT || 3000;
const app = require('./server');
const { syncAndSeed } = require('./db/syncAndSeed');

syncAndSeed();

app.listen(port, () => console.log(`listening on port ${port}`));
