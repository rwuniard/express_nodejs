const express = require('express');
const path = require('path');
const app = express();

const logger = require('./middleware/logger')




// Init middleware logger.
// app.use(logger);


// app.get('/', (req, res) => {
//     // res.send('Hello World!!!');
   
//     filename = path.join(__dirname, 'public', 'index.html');
//     console.log(filename);
//     res.sendFile(filename);
// });

// Body Parser Middleware for POST
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Members API Routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
