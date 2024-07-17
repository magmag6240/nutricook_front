import { ReactNode } from 'react';

export type User = {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    password: string;
    remember_token: string;
    last_login_at: string;
    created_at: string;
    updated_at: string;
}

export type UserContextType = User | null | undefined;

export type GuardPropsType = {
    children: ((user: User) => ReactNode) | ReactNode;
}