import express from 'express'
import * as bodyParser from 'body-parser'
import cors from 'cors'
import routes from './indexRoutes'
import { AppDataSource } from './database/data-source'

const app = express()
const port = 3000

app.use(express.static(__dirname + '/public', { dotfiles: 'allow' } ));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(routes)

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Recebe e responde requisições de todas as origens
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE'); // Aceita estes verbos HTTP nas requisições
    res.setHeader('Access-Control-Allow-Headers', 'authorization, content-type'); // Permite que a origem altere o content-type
    res.setHeader('Access-Control-Allow-Credentials','true');
    next();
});

AppDataSource.initialize().then(() =>
    console.log("Database Ok")
).catch(error =>{
    console.log(error)
})

app.listen(port, () => {
    console.log(`App listening in localhost:${port}`)
})
