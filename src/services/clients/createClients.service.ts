import format from "pg-format";
import { TClient, TClientRequest } from "../../interfaces/clients.interfaces";
import { QueryResult } from "pg";
import { client } from "../../database";


const createClientsService = async (clientData: TClientRequest): Promise<TClient> =>{
    const data: TClientRequest = clientData

    const formatString: string = format(`
        INSERT INTO 
            clients(%I)
        VALUES 
            (%L)
        RETURNING *;
    `,
        Object.keys(data),
        Object.values(data)
    )

    const queryResult: QueryResult<TClient> = await client.query(formatString)

    return queryResult.rows[0]
}

export default createClientsService