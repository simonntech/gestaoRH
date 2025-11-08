import { Request, Response } from "express";
import * as Services from "../services/employees-services";

export const listEmployees = async (req: Request, res: Response) => {
    const HttpResponse = await Services.listAllEmployeesService();

    res.status(HttpResponse.statusCode).json(HttpResponse.body)
}