import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../domain/entities/user'

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}

  create(user: Partial<User>) {
    return this.repo.save(user);
  }

  findByEmail(email: string) {
    return this.repo.findOne({ where: { email } });
  }

  findAll() {
    return this.repo.find();
  }
    update(id: string, partial: Partial<User>) {
    return this.repo.update(id, partial);
  }
  async findByEmailWithRoles(email: string) {
  return this.repo.findOne({
    where: { email },
    relations: {
      roles: {
        permissions: true,
      },
    },
  });
}
}