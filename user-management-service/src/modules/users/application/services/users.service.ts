import { Injectable } from '@nestjs/common';
import { UserRepository } from '../../infrastructure/repositories/user.repository';

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

}
