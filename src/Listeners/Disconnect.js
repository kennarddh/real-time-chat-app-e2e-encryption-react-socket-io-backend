// Services
import { RemoveUserById, GetUsersByRoomName } from '../Services/Users'
import { RemoveRoomByName } from '../Services/Rooms'

const Disconnect = socket => {
	const user = RemoveUserById(socket.id)

	if (user) {
		const users = GetUsersByRoomName(user.room)

		if (users.length === 0) {
			RemoveRoomByName(user.room)

			return
		}

		socket.to(user.room).emit('room:notification', {
			username: user.username,
			message: `${user.username} has left the room`,
		})

		socket.in(user.room).emit('room:users:receive', {
			users: users.map(item => item.username),
		})
	}
}

export default Disconnect
