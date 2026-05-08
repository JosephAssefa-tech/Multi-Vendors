import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository';
import * as bcrypt from 'bcrypt';

import { User } from '../../domain/entities/user';

@Injectable()
export class UsersService {
    constructor(private userRepo: UserRepository) {}
    private users:any = [];

  async createUser(email: string, password: string) {
    const existing = await this.userRepo.findByEmail(email);
    if (existing) throw new Error('User already exists');

    return this.userRepo.create({ email, password });
  }

  async getUsers() {
    return this.userRepo.findAll();
  }
async updateRefreshToken(userId: string, token: string) {
  const hash = await bcrypt.hash(token, 10);
  await this.userRepo.update(userId, {
    hashedRefreshToken: hash,
  });
}
update(userId: string, partial: Partial<User>) {
  return this.userRepo.update(userId, partial);
}

async findByEmail(email: string) {
  return this.userRepo.findByEmail(email);
}

}
