import { LocalStorageService } from './LocalStorage.service';

const GetUsers = () => {
    return LocalStorageService.get('users') || [];
}

const ShowUserByEmail = (email) => {
    return GetUsers().find(user => user.email === email)
}

export const ApiService = {
    GetUsers,
    ShowUserByEmail,
}