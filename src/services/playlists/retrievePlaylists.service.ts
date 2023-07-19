import { QueryConfig, QueryResult } from "pg"
import { client } from "../../database"
import { TPlaylistClient } from "../../interfaces/playlists.interfaces"

const retrievePlaylistsService = async (playlistId: number): Promise<TPlaylistClient> => {

    const queryString: string = `
        SELECT
            "pl"."id" playlistId,
            "pl"."name" playlistName,
            "pl"."createdAt" playlistCreateAt,
            "cl"."name" clientName
        FROM 
            playlists "pl" 
        JOIN 
            clients "cl" 
        ON 
            "pl"."clientId" = "cl"."id"
        WHERE 
            "pl"."id" = $1;
    `

    const queryConfig: QueryConfig = {
        text: queryString,
        values: [playlistId]
    }

    const quereResult: QueryResult<TPlaylistClient> = await client.query(queryConfig)

    return quereResult.rows[0]
}

export { retrievePlaylistsService }