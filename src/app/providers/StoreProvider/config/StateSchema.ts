import { CounterSchema } from 'entities/Counter';
import { userSchema } from 'entities/User';

export interface StateSchema {
  counter: CounterSchema;
  user: userSchema;
}
