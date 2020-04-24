const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname,'client','build','index.html'))
    })
}
app.listen(PORT, () => console.log(`app listen to port ${PORT}`));

