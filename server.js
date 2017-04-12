let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let postController = require('./controller/post-controller');
let userController = require('./controller/user-controller');
let feedController = require("./controller/feed-controller"); 

let port = process.env.PORT || 8888;

app.use(cookieParser())

// configure app to use bodyParser
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

/* Routing */
let router = express.Router();

// feed
router.get('/', feedController.home);

// post
router.post('/post', postController.add);
router.get('/post', postController.findAll);
router.get('/post/:id', postController.findById);
router.get('/post/user/:id', postController.findByUserId);

// user
router.post('/user', userController.add);
router.get('/user', userController.findAll);
router.get('/user/:id', userController.findById);

// Register router
app.use('/api/v1', router);

// Static File
app.use(express.static('public'))

app.listen(port, function () {
    console.log('Starting node.js on port ' + port);
});