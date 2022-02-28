import { GetUserById } from '../../../Services/Users'

const Send = (socket, { message }) => {
	const user = GetUserById(socket.id)

	socket.to(user.room).emit('room:message:receive', {
		from: user.username,
		message,
	})
}

export default Send
