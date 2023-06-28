import { Module, ConsoleLogger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [ConsoleLogger, UserService, UserResolver],
  exports: [], // 不用再appController调用,所以不用到处userService
})
export class UserModule {}
