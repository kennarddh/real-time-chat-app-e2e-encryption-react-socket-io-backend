import { AddUser } from '../../Services/Users'

const Join = (socket, { username, roomname }) => {
	AddUser(socket.id, username, roomname)

	socket.join(roomname)

	socket.in(roomname).emit('room:notification', {
		message: `${username} has joined the chat`,
	})
}

export default Join
