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

export const newEmployeeService = async (employee : EmployeesModel) => {
    let response = null;

    if (Object.keys(employee).length !== 0) {
        await EmployeesRepository.newEmployee(employee);
        response = await HttpResponse.created();
    } else {
        response = await HttpResponse.badRequest();
    }

    return response;
}