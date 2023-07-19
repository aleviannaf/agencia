import { Router } from "express";
import { createPlaylistsController, retrievePlaylistsController } from "../controllers/playlists.controllers";


const playlistsRouter: Router = Router()

playlistsRouter.post('', createPlaylistsController)
playlistsRouter.get('/:id', retrievePlaylistsController)


export default playlistsRouter