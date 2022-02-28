const rooms = []

export const AddRoom = name => {
	rooms.push({ name })
}

export const GetRoomByName = name => {
	return rooms.find(item => item.name === name)
}

export const GetAllRooms = () => {
	return rooms
}

export const RemoveRoomByName = name => {
	const index = rooms.findIndex(item => item.name === name)

	if (index !== -1) {
		return rooms.splice(index, 1)[0]
	}
}
