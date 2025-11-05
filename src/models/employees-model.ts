import { Gender } from "./genders-model";

export interface EmployeesModel {
    id: number;
    name: string;
    last_name: string;
    social_name: string;
    birthdate: Date;
    gender: Gender;
    phone_number: string;
    position: string;
    worked_hours_amount: number;
}