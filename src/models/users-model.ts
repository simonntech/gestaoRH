import { Gender } from "./genders-model";

export interface UsersModel {
    id: number;
    password: string;
    name: string;
    last_name: string;
    birthdate: Date;
    gender: Gender;
    position: string;
    authorized: boolean;
}