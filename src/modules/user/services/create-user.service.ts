import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UserRepository } from '../repository/user.repository';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CreateUserService {
  constructor(private userRep: UserRepository) {}

  async execute(data: CreateUserDto) {
    const { email } = data;

    const userAlreadyExists = await this.userRep.findUserByEmail(email);

    if (userAlreadyExists) {
      return {
        status: 400,
        data: { message: 'Email already exists in records' },
      };
    }

    if (data.password !== data.confirmPassword) {
      throw new BadRequestException('The password doesn`t match.');
    }

    delete data.confirmPassword;

    data.password = await bcrypt.hash(data.password, 10);

    if (data.residency) {
      data.residency = data.residency.toUpperCase();
    }

    const createUser = await this.userRep.createUser(data);
    return {
      status: 201,
      data: createUser,
    };
  }
}
