import { EmployeesModel } from "../models/employees-model";
import { Gender } from "../models/genders-model";

const employess_database: EmployeesModel[] = [
    {
        id: 1,
        name: 'José',
        last_name: 'Da Silva',
        social_name: 'Zé',
        birthdate: '1985-06-22',
        gender: Gender.male,
        phone_number: '18 3722 0000',
        position: 'Zelador',
        worked_hours_amount: 40
    },
    {
        id: 2,
        name: 'Maria',
        last_name: 'Da Silva',
        social_name: 'Mariazinha',
        birthdate: '1985-05-22',
        gender: Gender.female,
        phone_number: '18 3722 0000',
        position: 'Cozinheira',
        worked_hours_amount: 44
    },
]

export const listAllEmployees = async (): Promise<EmployeesModel[]> => {
    return employess_database;
}

export const newEmployee = async (newEmployeeData: Omit<EmployeesModel, 'id'>): Promise<EmployeesModel> => {
    let newId: number;
    if (employess_database.length === 0) {
        newId = 1;
    } else {
        const maxId = Math.max(...employess_database.map(e => e.id));
        newId = maxId + 1;
    }

    const employeeToAdd: EmployeesModel = {
        ...newEmployeeData,
        id: newId
    };

    employess_database.push(employeeToAdd);

    return employeeToAdd;
}