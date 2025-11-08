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

    if (employee && Object.keys(employee).length !== 0) {

        const existingEmployee = await EmployeesRepository.checkExistingEmployee(employee.name, employee.last_name);

        if (existingEmployee) {
            return HttpResponse.conflict(`Funcionário com o nome ${employee.name} ${employee.last_name} já está cadastrado!`)
        }
        
        await EmployeesRepository.newEmployee(employee);
        response = await HttpResponse.created();
    } else {
        response = await HttpResponse.badRequest();
    }

    return response;
}

export const findEmployeeService = async (employeeName: string) => {
    let response = null;

    if (employeeName && Object.keys(employeeName).length !== 0) {
        
        await EmployeesRepository.findEmployeeByName(employeeName);
        response = await HttpResponse.ok(employeeName);
    } else {
        response = await HttpResponse.noContent();
    }

    return response;
}