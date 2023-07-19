import { Router } from "express";
import { createClientPaymentInfosController, createClientsCotroller, deleteClientController, listClientsController } from "../controllers/clients.controllers";
import { ensureClientsExistsMiddleware } from "../middlewares/ensureClientsExists.middleware";


const clientRouter: Router = Router()


clientRouter.post('', createClientsCotroller)
clientRouter.post('/:id/payment', ensureClientsExistsMiddleware, createClientPaymentInfosController)
clientRouter.get('', listClientsController)
clientRouter.delete('/:id', ensureClientsExistsMiddleware, deleteClientController)

export default clientRouter