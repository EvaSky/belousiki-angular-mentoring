import { IUser } from './user.interface';

export class User implements IUser {
    firstName: string;
    id: string;
    lastName: string;
}
