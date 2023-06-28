import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserType {
  @Field({ description: '昵称' })
  name: string;

  @Field({ description: '描述' })
  desc: string;

  @Field({ description: '手机号码' })
  tel: string;

  @Field({ description: 'id' })
  id: string;

  @Field({ description: 'password' })
  password: string;

  @Field({ description: 'account' })
  account: string;
}
