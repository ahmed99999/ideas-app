import { Controller, Get, Body, Post } from '@nestjs/common';
import { UsersService, User, ResponseData } from './users.service';


@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) { }

    @Get()
    getUsers(): ResponseData<User[]> {
        return {
            status: "success",
            data: this.userService.getUsers()
        };
    }

    @Post()
    addUser(@Body() body: User): ResponseData<User> {
        const generatedUser = this.userService.createUser(body);
        return {
            status: "success",
            data: generatedUser
        };
    }
}
