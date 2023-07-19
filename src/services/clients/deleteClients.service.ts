import { QueryConfig } from "pg"
import { client } from "../../database"

const deleteClientService = async (clientId: number): Promise<void> => {
    
    const queryString: string = `
        DELETE FROM
            clients
        WHERE
            id = $1;
    ` 

    const queryConfig: QueryConfig = {
        text: queryString,
        values: [clientId]
    }

    await client.query(queryConfig)
}

export { deleteClientService }