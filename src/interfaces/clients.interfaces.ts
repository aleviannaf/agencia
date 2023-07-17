type TClient = {
    id: number
    name: string
    email: string
    paymentId: number | null | undefined
}

type TClientRequest = Omit<TClient, 'id' | 'paymentId'>

type TPaymentInfos = {
    id: number
    name: string
    number: string
    dueDate: Date
    code: string
    method: 'debito' | 'credito'
}

type TPaymentInfosRequest = Omit<TPaymentInfos, 'id'>

type TClientPaymentInfo = {
    clientId: string
    clientName: string
    paymentInfoId: string | null
    paymentInfoName: string | null
    paymentInfoMethod: string | null
}

export { TClient, TClientRequest, TPaymentInfos, TPaymentInfosRequest, TClientPaymentInfo}