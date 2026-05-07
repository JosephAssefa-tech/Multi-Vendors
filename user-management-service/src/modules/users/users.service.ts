import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users:any = [];

    createUser(user) {
        this.users.push(user);
        return user;
    }

    getUsers() {
        return this.users;
    }

}
