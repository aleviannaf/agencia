import format from "pg-format";
import { TPlaylist, TPlaylistCreate, TPlaylistRequest } from "../../interfaces/playlists.interfaces";
import { QueryResult } from "pg";
import { client } from "../../database";

const createPlaylistService = async (playlistData: TPlaylistRequest): Promise<TPlaylist> => {

    const playlistInsertData: TPlaylistCreate = {
        createdAt: new Date(),
        ...playlistData
    }

    const quesryString: string = format(`
        INSERT INTO
            playlists(%I)
        VALUES
            (%L)
        RETURNING *;
    `,
        Object.keys(playlistInsertData),
        Object.values(playlistInsertData)
    )

    const querResult: QueryResult<TPlaylist> = await client.query(quesryString)

    return querResult.rows[0]
}

export { createPlaylistService }