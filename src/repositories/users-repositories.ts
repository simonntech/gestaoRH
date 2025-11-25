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
        position: 'Administrador',
        authorized: true
    },
]

type UserInfoOutput = Omit<UsersModel, 'password'>;

export const showUserInfos = async ():Promise<UserInfoOutput[]> => {
    const safeUsers = users_database.map(user => {
        const { password, ...userInfo} = user;
        return userInfo as UserInfoOutput;
    });

    return safeUsers;
}