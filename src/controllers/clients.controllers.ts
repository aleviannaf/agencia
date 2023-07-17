import { Request, Response } from "express"
import { TClient, TClientPaymentInfo, TClientRequest, TPaymentInfos, TPaymentInfosRequest } from "../interfaces/clients.interfaces"
import createClientsService from "../services/clients/createClients.service"
import createPaymentInfosService from "../services/paymentInfos/createPaymentInfos.service"
import listClientsService from "../services/clients/listClients.service"

const createClientsCotroller = async ( req: Request, res: Response): Promise<Response> =>{

    const clientData: TClientRequest = req.body
    const newClient: TClient = await createClientsService(clientData)
    
    return res.json(newClient)
}

const createClientPaymentInfosController = async(req: Request, res: Response): Promise<Response> =>{
    
    const clientId: number = parseInt(req.params.id)
    const paymentInfoData: TPaymentInfosRequest = req.body

    const newPaymentInfos: TPaymentInfos = await createPaymentInfosService(clientId, paymentInfoData)

    return res.status(201).json(newPaymentInfos)
}

const listClientsController =async (req: Request, res: Response): Promise<Response> => {

    const clients: TClientPaymentInfo[] = await listClientsService()
    
    return res.json(clients)
}

export  { createClientsCotroller, createClientPaymentInfosController, listClientsController}