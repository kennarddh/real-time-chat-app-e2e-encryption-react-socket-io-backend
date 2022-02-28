// Services
import { AddUser } from '../Services/Users'
import { AddRoom, GetRoomByName } from '../Services/Rooms'

// Listeners
import MessageSend from './Room/Message/Send'
import Disconnect from './Disconnect'

const RoomMessageSendListener = socket => {
	return (...args) => MessageSend(socket, ...args)
}

const DisconnectListener = socket => {
	return (...args) => Disconnect(socket, ...args)
}

const MainListener = socket => {
	const { username, roomName } = socket.handshake.query

	if (!username || !roomName) {
		socket.disconnect()
	}

	AddUser(socket.id, username, roomName)

	if (!GetRoomByName(roomName)) {
		AddRoom(roomName)
	}

	socket.join(roomName)

	socket.in(roomName).emit('room:notification', {
		message: `${username} has joined the chat`,
	})

	// Listeners
	socket.on('room:message:send', RoomMessageSendListener(socket))

	socket.on('disconnect', DisconnectListener(socket))
}

export default MainListener
