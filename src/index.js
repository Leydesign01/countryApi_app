import express from 'express'
import morgan from 'morgan'
const app  = express();
import {config}  from './config.js'
import {PORT} from './config.js'
// import {router} from './routes/index.js'
import {router} from './routes/countries.js'

//settings
app.set('port', config.PORT || 3000);
app.set('json spaces', 2);


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());


//routes
// app.use(router);
app.use('/api/countries', router)

//starting the server 
app.listen(PORT);
console.log('server is running on port', PORT)