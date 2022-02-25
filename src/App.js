import 'dotenv/config'

import express from 'express'
import socketIo from 'socket.io'

// Middleware
import cors from 'cors'

// Listeners
import {
	RoomJoinListener,
	RoomMessageSendListener,
	DisconnectListener,
} from './Listeners'

const app = express()

const PORT = process.env.PORT || 8080

app.use(cors())

const server = app.listen(PORT, () =>
	console.log(`Server running on port ${PORT}`)
)

const io = socketIo(server)

io.on('connection', socket => {
	socket.on('room:join', RoomJoinListener(socket))

	socket.on('room:message:send', RoomMessageSendListener(socket))

	socket.on('disconnect', DisconnectListener(socket))
})
