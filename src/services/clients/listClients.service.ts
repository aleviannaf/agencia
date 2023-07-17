import { client } from "../../database";
import { TClientPaymentInfo } from "../../interfaces/clients.interfaces";

const listClientsService =async (): Promise<Array<TClientPaymentInfo>> => {
    
    const queryStrinng: string = `
    SELECT
        "cl"."id" "clientId",
        "cl"."name" "clientName",
        "pi"."id" "paymentInfoId",
        "pi"."name" "paymentInfoName",
        "pi"."method" "paymentInfoMethod"
    FROM
        clients "cl"
    LEFT JOIN
        payment_infos "pi" ON "cl"."paymentId" = "pi"."id";
    `

    const queryResult = await client.query(queryStrinng)

    return queryResult.rows
}

export default listClientsService