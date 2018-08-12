import { IUser } from './user.interface';

export class User implements IUser {
    firstName: string;
    id: string;
    lastName: string;

    constructor(user?) {
        this.id = user.id;
        this.firstName = user.name.first;
        this.lastName = user.name.last;
    }
}
