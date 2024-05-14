import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LazyLoginForm = lazy <FC<LoginFormProps>>(() => import('./LoginForm'));
