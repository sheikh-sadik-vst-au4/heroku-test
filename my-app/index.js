const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const router = require('./router');
const connectDB = require('./database');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname,'client','build','index.html'))
    })
}


connectDB().then(() => {
    app.listen(PORT, () => console.log(`app listen to port ${PORT}`));
})
