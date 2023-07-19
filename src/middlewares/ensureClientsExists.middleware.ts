import { Request, Response, NextFunction } from "express";
import { QueryConfig, QueryResult } from "pg";
import { client } from "../database";
import { NotFound } from "../error";

const ensureClientsExistsMiddleware =async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {

    let clientId: number = parseInt(req.params.id)

    if (req.method === 'POST' && req.baseUrl === '/playlists'){
        clientId = req.body.clientId
    }

    const queryStringSelectClient: string = `
        SELECT
            *
        FROM
            clients
        WHERE
            id = $1;
    `
    const queryConfigSelectClient: QueryConfig = {
        text: queryStringSelectClient,
        values: [clientId]
    }

    const queryResultSelectClient: QueryResult= await client.query(queryConfigSelectClient)

    if (queryResultSelectClient.rowCount === 0) {
        throw new NotFound("Client not found")
    }

    return next()
}

export { ensureClientsExistsMiddleware }