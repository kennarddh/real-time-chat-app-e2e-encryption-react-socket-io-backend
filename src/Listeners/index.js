// Listeners
import Join from './Room/Join'
import MessageSend from './Room/Message/Send'
import Disconnect from './Disconnect'

export const RoomJoinListener = socket => {
	return (...args) => Join(socket, ...args)
}

export const RoomMessageSendListener = socket => {
	return (...args) => MessageSend(socket, ...args)
}

export const DisconnectListener = socket => {
	return (...args) => Disconnect(socket, ...args)
}
