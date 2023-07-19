import { Request, Response } from "express"
import { TPlaylist, TPlaylistClient, TPlaylistRequest } from "../interfaces/playlists.interfaces"
import { createPlaylistService } from "../services/playlists/createPlaylist.service"
import { retrievePlaylistsService } from "../services/playlists/retrievePlaylists.service"

const createPlaylistsController = async (req: Request, res: Response): Promise<Response> => {
    
    const playlistData: TPlaylistRequest = req.body

    const newPlaylist: TPlaylist = await createPlaylistService(playlistData)

    return res.status(201).json(newPlaylist)
}

const retrievePlaylistsController = async (req: Request, res: Response): Promise<Response> =>{

    const playlistId: number = parseInt(req.params.id)

    const playlistData: TPlaylistClient = await retrievePlaylistsService(playlistId)

    return res.status(200).json(playlistData)
} 



export { createPlaylistsController, retrievePlaylistsController}