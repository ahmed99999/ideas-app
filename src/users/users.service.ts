import { Injectable } from '@nestjs/common';


export interface User {
    id?         :string,
    firstName   :string,
    lastName    :string,
    role        :'ADMIN'|'SIMPLE-USER',
    age         :number
}

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            id: '123',
            firstName   :'ahmed',
            lastName    :'bakha',
            role        :'ADMIN',
            age         :23
        },
        {
            id: '45545',
            firstName   :'houssam',
            lastName    :'moussaoui',
            role        :'SIMPLE-USER',
            age         :23
        },
        {
            id: '5343',
            firstName   :'sid',
            lastName    :'boudella',
            role        :'SIMPLE-USER',
            age         :23
        },
        {
            id: '73638',
            firstName   :'othmane',
            lastName    :'delassi',
            role        :'SIMPLE-USER',
            age         :23
        }
    ];

    getUsers(): User[] {
        return this.users;
    }

    createUser( newUser: User ): User {
        newUser.id = new Date().toString();
        this.users.push( newUser );
        return newUser;
    }
}
