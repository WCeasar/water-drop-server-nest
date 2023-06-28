import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserInputType {
  @Field({ description: '昵称' })
  name: string;

  @Field({ description: '描述' })
  desc: string;
}
