// --- server.js ---
// - Default + JWT/Bcrypt -
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('config');

const app = express();

const PORT = process.env.PORT || 5000;

// Body Parser
/* 
:: Body-Parser :: pour pouvoir lire les entrées d'un formulaire, 
le stocke comme un objet Javascript accessible via req.body 
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const db = config.get('mongoURI');

// Middleware
// app.use(cors());
// OU
const corsOptions = {
    origin: 'http://localhost:3000',
    // Other options if needed
};
app.use(cors(corsOptions));
app.use(express.json());

// Session
// app.use(session({
//     cookie: { maxAge: 60000 },
//     secret: 'woot',
//     resave: false,
//     saveUninitialized: false
// }));

const authRoutes = require('./routes/authenticateRoutes');
const usersRoutes = require('./routes/usersRoutes');
// Use Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
// app.use('/', require('./routes/authenticateRoutes.js'));
// app.use('/users', require('./routes/usersRoutes.js'));
app.use('/contacts', require('./routes/contactsRoutes.js'));
app.use('/api/posts', require('./routes/postsRoutes.js'));


// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('Successfully connected to MongoDB'))
    .catch(err => console.log(err));

const port = 5000;
app.listen(port, () => console.log(`Server started at port ${port}`));




// // - Default -
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const config = require('config');

// const app = express();

// //Body Parser
// app.use(bodyParser.json());
// const db = config.get('mongoURI');

// // Connect to MongoDB
// mongoose
//     .connect(db)
//     .then(() => console.log('Successfully connected to MongoDB'))
//     .catch(err => console.log(err));

// // Use Routes
// app.use('/api/users', require('./routes/api/users'));
// app.use('/api/contacts', require('./routes/api/contacts'));
// app.use('/api/posts', require('./routes/api/posts'));

// const port = 5000;
// app.listen(port, () => console.log(`Server started at port ${port}`));











// ---------------------------------------------------------------------------------
// - Playground -

// // Set-up express
// var express = require('express'), app = express();
// // Test run App
// app.use(express.static(__dirname));

// // Inside server.js we will require Mongoose:
// var mongoose = require('mongoose');
// // Assign a variable, the Service URI of our MongoDB instance database.
// // // remote DB : OVHCloud-MongoDB-service
// // const dbUrl = 'mongodb+srv://<username>:<password>@mongodb-e49d02ee-o2626ab53.database.cloud.ovh.net/admin?replicaSet=replicaset'
// // // Mongoose will connect to the MongoDB database with the connect method:
// // mongoose.connect(dbUrl, (err) => {
// //     console.log('mongodb connected', err);
// // })
// // local DB
// var MONGODB_URI = 'mongodb://localhost:27017/admin?replicaSet=replicaset';
// // Mongoose will connect to the MongoDB database with the connect method:
// mongoose.connect(MONGODB_URI, (err) => {
//     console.log('mongodb connected', err);
// })

// // Defining a message model as: 
// var Message = mongoose.model('Message', { name: String, message: String })

// /*
// Body - Parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
// The middleware was a part of Express.js earlier, but now you have to install it separately.
// npm install -s body-parser
// */
// // Add the following code to server.js:
// var bodyParser = require('body-parser')
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }))

// // Create two routes to the messages for the app (a chat app in this example) to work.
// // 'Get' will get all the message from the database: 
// app.get('/messages', (req, res) => {
//     Message.find({}, (err, messages) => {
//         res.send(messages);
//     })
// })
// // 'Post' will post new messages created by the user to the database:
// app.post('/messages', (req, res) => {
//     var message = new Message(req.body);
//     message.save((err) => {
//         if (err)
//             sendStatus(500);
//         res.sendStatus(200);
//     })
// })

// // App listening port
// const port = 5000;
// app.listen(port, () => console.log(`Server started at port ${port}`));




// // Set-up express
// var express = require('express'),
//     app = express();
// // Test run App
// app.use(express.static(__dirname));

// // Inside server.js we will require Mongoose:
// var mongoose = require('mongoose');

// // Assign a variable, the Service URI of our MongoDB instance database.
// // // remote DB : OVHCloud-MongoDB-service
// // var dbUrl = 'mongodb+srv://<username>:<password>@mongodb-e49d02ee-o2626ab53.database.cloud.ovh.net/admin?replicaSet=replicaset'
// // var dbUrl = 'https://dummyjson.com'
// // // Mongoose will connect to the MongoDB database with the connect method:
// // mongoose.connect(dbUrl, (err) => {
// //     console.log('mongodb connected', err);
// // })
// // // local DB
// var MONGODB_URI = 'mongodb://localhost:27017/admin?replicaSet=replicaset';
// // Mongoose will connect to the MongoDB database with the connect method:
// mongoose.connect(MONGODB_URI, (err) => {
//     console.log('mongodb connected', err);
// })

// // Defining a message model as: 
// var Message = mongoose.model('Message', { name: String, message: String })

// /*
// Body - Parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
// The middleware was a part of Express.js earlier, but now you have to install it separately.
// npm install -s body-parser
// */
// // Add the following code to server.js:
// var bodyParser = require('body-parser')
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }))

// // Create two routes to the messages for the app (a chat app in this example) to work.
// // 'Get' will get all the message from the database: 
// app.get('/messages', (req, res) => {
//     Message.find({}, (err, messages) => {
//         res.send(messages);
//     })
// })
// // 'Post' will post new messages created by the user to the database:
// app.post('/messages', (req, res) => {
//     var message = new Message(req.body);
//     message.save((err) => {
//         if (err)
//             sendStatus(500);
//         res.sendStatus(200);
//     })
// })

// // App listening port
// app.listen(3000, () => {
//     console.log('server is running on port', server.address().port);
// });
// const port = 3000;
// app.listen(port, () => console.log(`Server started at port ${port}`));








