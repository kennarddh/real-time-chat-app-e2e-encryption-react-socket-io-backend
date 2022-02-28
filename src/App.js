import 'dotenv/config'

import express from 'express'
import socketIo from 'socket.io'

// Middleware
import cors from 'cors'

// Router
import RoomsRouter from './Routes/Rooms'
import NoMatchRouter from './Routes/NoMatch'

// Listeners
import MainListener from './Listeners'

const PORT = process.env.PORT || 8080

const app = express()

app.use(cors())

// Router
app.use('/api', RoomsRouter)

app.use('*', NoMatchRouter)

const server = app.listen(PORT, () =>
	console.log(`Server running on port ${PORT}`)
)

const io = socketIo(server, {
	cors: {
		origin: '*',
	},
})

io.on('connection', MainListener)
