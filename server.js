const app = require('./app')
const port = process.env.PORT || 3003;
const dbURI = process.env.DB_URI || 'mongodb://localhost:27017/thinkle';
const mongoose = require('mongoose');
mongoose.connect(dbURI , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
app.listen(port , () => {
    console.log(`Server is ruunning on http://localhost:${port}`)
})