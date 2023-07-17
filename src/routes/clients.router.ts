import { Router } from "express";
import { createClientPaymentInfosController, createClientsCotroller, listClientsController } from "../controllers/clients.controllers";

const clientRouter: Router = Router();

clientRouter.post('', createClientsCotroller)
clientRouter.post('/:id/payment', createClientPaymentInfosController)
clientRouter.get('', listClientsController)

export default clientRouter