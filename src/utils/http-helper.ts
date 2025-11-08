import { HttpResponse } from "../models/http-response-model";

export const ok = async (data: any): Promise<HttpResponse> => {
    return {
        statusCode: 200,
        body: data
    };
};
export const created = async (): Promise<HttpResponse> => {
    return {
        statusCode: 201,
        body: {
            message: "Cliente criado"
        }
    };
};

export const noContent = async (): Promise<HttpResponse> => {
    return {
        statusCode: 204,
        body: null
    };
};

export const badRequest = async ():Promise<HttpResponse> => {
    return {
        statusCode: 400,
        body: null,
    }
};

export const unauthorized = async ():Promise<HttpResponse> => {
    return {
        statusCode: 401,
        body: {
            message: "Acesso negado - Usuário ou senha incorretos!"
        },
    }
};

export const conflict = async (message: string):Promise<HttpResponse> => {
    return {
        statusCode: 409,
        body: {
            message: message
        }
    }
}