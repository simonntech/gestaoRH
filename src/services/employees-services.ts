import { EmployeesModel } from "../models/employees-model";
import * as EmployeesRepository from "../repositories/employees-repository";
import * as HttpResponse from "../utils/http-helper";

export const listAllEmployeesService = async () => {
    const data = await EmployeesRepository.listAllEmployees();
    let response = null;

    if (data) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }

    return response;
}