const users = []

export const AddUser = (id, username, room) => {
	users.push({ id, username, room })
}

export const GetUserById = id => {
	return users.find(item => item.id === id)
}

export const RemoveUserById = id => {
	const index = users.findIndex(item => item.id === id)

	if (index !== -1) {
		return users.splice(index, 1)[0]
	}
}
