type TPlaylist = {
    id: number
    name: string
    createdAt: Date
    clientId: number
}

type TPlaylistRequest = Omit<TPlaylist, "id" | "createdAt">

type TPlaylistCreate = Omit<TPlaylist, "id">

type  TPlaylistClient = {
    playlistId: number
    playlistName: string
    playlistCreateAt: Date
    clientName: string
}

export { TPlaylist, TPlaylistRequest, TPlaylistCreate, TPlaylistClient }