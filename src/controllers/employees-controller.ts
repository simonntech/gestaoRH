import { Request, Response } from "express";
import * as Services from "../services/employees-services";

export const getEmployees = async (req: Request, res: Response) => {
    const HttpResponse = await Services.listAllEmployeesService();

    res.status(HttpResponse.statusCode).json(HttpResponse.body);
};

export const postEmployee = async (req: Request, res: Response) => {
    const bodyValue = req.body;
    const HttpResponse = await Services.newEmployeeService(bodyValue);

    if (HttpResponse){
        res.status(HttpResponse.statusCode).json(HttpResponse.body)
    };
};