import express from 'express'

// Controllers
import { GetAllRoomsController } from '../Controllers/Rooms'

const Router = express.Router()

Router.get('/rooms', GetAllRoomsController)

export default Router
