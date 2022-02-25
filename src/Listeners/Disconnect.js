import { RemoveUserById } from '../Services/Users'

const Disconnect = socket => {
	const user = RemoveUserById(socket.id)

	if (user) {
		socket.to(user.room).emit('room:notification', {
			username: user.username,
			message: `${user.username} has left the room`,
		})
	}
}

export default Disconnect
