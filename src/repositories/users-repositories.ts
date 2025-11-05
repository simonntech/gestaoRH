import { UsersModel } from "../models/users-model";
import { Gender } from "../models/genders-model";

const users_database: UsersModel[] = [
    {
        id: 1,
        password: '##hhdij4#',
        name: 'Admin',
        last_name: 'Master',
        birthdate: '1990-06-30',
        gender: Gender.male,
        position: 'Admnistrador',
        authorized: true
    },
]

export const showUserInfos = async (): Promise<UsersModel[]> => {
    return users_database;
}