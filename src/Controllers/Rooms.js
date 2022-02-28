// Services
import { GetAllRooms } from '../Services/Rooms'

export const GetAllRoomsController = (req, res) => {
	return res.status(200).json({
		success: true,
		data: [...GetAllRooms().map(item => item.name)],
		error: '',
	})
}
