import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/create')
  async create() {
    return await this.userService.create({
      name: 'zs',
      desc: 'hahahah',
      tel: '13023321111',
      password: '123456',
      account: '3213213',
    });
  }

  @Get('/del')
  async del() {
    return await this.userService.del('73d5b273-07b7-4d50-82c3-05e1be44d3a7');
  }

  @Get('/update')
  async update() {
    return await this.userService.update(
      'decea1a9-75c4-4fec-a5e5-6c3c6afef4dd',
      {
        name: '水滴管理员哈哈哈哈',
        desc: '',
        tel: '13023321111',
        password: '123456',
        account: '3213213',
      },
    );
  }

  @Get('/find')
  async find() {
    return await this.userService.find('decea1a9-75c4-4fec-a5e5-6c3c6afef4dd');
  }
}
