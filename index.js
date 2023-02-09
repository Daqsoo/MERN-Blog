import express from "express";
import mongooose from 'mongoose';

import {registerValidation,loginValidation,postCreateValidation} from './validations.js'

import checkAuth from "./utils/checkAuth.js";

import * as UserController from './controllers/UserController.js'
import * as PostController from './controllers/PostController.js'

mongooose
.connect('mongodb+srv://admin:6w@cluster0.fispict.mongodb.net/blog?retryWrites=true&w=majority')
.then(() => console.log('DB OK'))
.catch((err)=> console.log('DB Error', err));

const app = express();

app.use(express.json());

app.post('/auth/login',loginValidation, UserController.login)
app.post('/auth/register', registerValidation,UserController.register);
app.get('/auth/me',checkAuth, UserController.getMe);

app.get('/posts',PostController.getAll);
//app.get('/posts/:id',checkAuth, PostController.getOne);
app.post('/posts',checkAuth, postCreateValidation,  PostController.create);
/*app.delete('/posts',checkAuth, PostController.remove;
app.patch('/posts',checkAuth, PostController.update);*/

app.listen(4444, (err) => {
    if(err)
        {
            return console.log('ERROR, Cant Start Server');
        }
    console.log('Server OK');
});