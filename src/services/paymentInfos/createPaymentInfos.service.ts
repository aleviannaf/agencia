import { QueryConfig, QueryResult } from "pg";
import { TPaymentInfos, TPaymentInfosRequest } from "../../interfaces/clients.interfaces";
import { client } from "../../database";
import { NotFound } from "../../error";
import format from "pg-format";

const createPaymentInfosService = async (clientId: number, paymentInfosRequest: TPaymentInfosRequest): Promise<TPaymentInfos> => {

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

    console.log(queryResultSelectClient.rowCount)
    if (queryResultSelectClient.rowCount === 0) {
        throw new NotFound("Client not found")
    }

    const queryFormatPaymentInfo: string = format(
        `
            INSERT INTO
                payment_infos(%I)
            VALUES
                (%L)
            RETURNING *;
        `,
        Object.keys(paymentInfosRequest),
        Object.values(paymentInfosRequest)
    )

    const queryResultPaymentInfo: QueryResult<TPaymentInfos> =await client.query(queryFormatPaymentInfo)

    const queryStringUpdateClientPayment: string = `
        UPDATE
            clients
        SET
            "paymentId" = $1
        WHERE
           id = $2;
    `
    const queryConfigUpdateClient: QueryConfig ={
        text: queryStringUpdateClientPayment,
        values: [queryResultPaymentInfo.rows[0].id, clientId]
    }

    await client.query(queryConfigUpdateClient)

    return queryResultPaymentInfo.rows[0]
}

export default createPaymentInfosService