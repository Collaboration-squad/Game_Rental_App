import 'jasmine';
import * as bcrypt from 'bcrypt';
import { IUser } from '../models/user.interface';
import { User } from '../models/user.model';
import { UserService } from './user.service';

describe('User service', () => {
    const user = new User({
        email: 'test@email.com',
        password: '1234'
    })
    let userService: UserService;

    beforeEach(() => {
        userService = new UserService();
    });
    beforeEach(() => {
        spyOn(User, 'findOne')
        spyOn(bcrypt, 'hashSync')
        spyOn(user, 'save')
    });

    describe('create', () => {
        it('should check if bcrypt hashSync method was called', () => {
            userService.create(user);
            expect(bcrypt.hashSync).toHaveBeenCalled();
            expect(bcrypt.hashSync).toHaveBeenCalledWith('1234', 10);
        });
        it('should check if method save was called', () => {
            userService.create(user);
            expect(user.save).toHaveBeenCalled();
        });
    })
    describe('getUser', () => {
        it('should check if method findOne was called', () => {
            userService.getUser(user.email);
            expect(User.findOne).toHaveBeenCalled();
            expect(User.findOne).toHaveBeenCalledWith(user.email);
        });
    })


});
