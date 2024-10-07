import express from 'express';
export const app = express();
import { passphraseRouter } from "./route/retrieve-passphrase.js"
import dotenv from 'dotenv'
import http from 'http'
import { Server } from 'socket.io'
import cors from 'cors'


dotenv.config()
app.use(cors())

app.use(express.static('./public'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

const server = http.createServer(app)

export const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

app.get('/', (req, res) => {
    
    res.json({message: `Connected to server 👍`});
})


app.use( passphraseRouter )

const port = process.env.PORT || 8888

 const start = async () => {
    
    app.listen(port, () => {
        console.log(`server is running on port ${port}`)
    })
}

start() 