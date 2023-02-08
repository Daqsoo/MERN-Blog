import express from "express";
import jwt from "jsonwebtoken";
import mongooose from 'mongoose';

mongooose
.connect('mongodb+srv://admin:6w@cluster0.fispict.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('DB OK'))
.catch((err)=> console.log('DB Error', err));

const app = express();

app.use(express.json());

app.post('/auth/register', (req,res) =>
{
} )

app.listen(4444, (err) => {
    if(err)
        {
            return console.log('ERROR, Cant Start Server');
        }
    console.log('Server OK');
});