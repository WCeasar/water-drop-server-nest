import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './models/user.entity';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private UserRepository: Repository<User>,
  ) {}

  /**
   * 增
   * @param entity
   * @returns
   */
  async create(entity: DeepPartial<User>): Promise<boolean> {
    console.log(entity);
    const res = await this.UserRepository.insert(entity);
    console.log(res);
    if (res?.raw.affectedRows > 0) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * 删
   * @param entity
   * @returns
   */
  async del(id: string): Promise<boolean> {
    const res = await this.UserRepository.delete(id);
    if (res?.affected > 0) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * 删
   * @param entity
   * @returns
   */
  async update(id: string, entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.UserRepository.update(id, entity);
    console.log(res);
    if (res?.affected > 0) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * 查
   * @param entity
   * @returns
   */
  async find(id: string): Promise<User> {
    const res = await this.UserRepository.findOne({
      where: {
        id: id,
      },
    });
    return res;
  }
}
