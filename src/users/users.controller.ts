import { Controller, Get, Body, Post } from '@nestjs/common';
import { UsersService, User } from './users.service';


@Controller('users')
export class UsersController {
    constructor( private readonly userService: UsersService ){}

    @Get()
    getUsers(): User[]{
        return this.userService.getUsers();
    }

    @Post()
    addUser( @Body() body: User ){
        const generatedUser = this.userService.createUser( body );
        return generatedUser;
    }
}
