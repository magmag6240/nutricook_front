'use client';

import axios, { AxiosResponse } from 'axios';
import { useState, createContext, useEffect, useContext } from 'react';
import { User, UserContextType } from '../types';

const http = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
    withXSRFToken: true
});

const LoginCheck = (): Promise<AxiosResponse> => {
    http.get('/sanctum/csrf-cookie');
    const response = http.get('/api/user');
    return response;
}

export const AuthContext = createContext<UserContextType>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserContextType>();

    useEffect(() => {
        LoginCheck()
            .then((res) => {
                const appUser = res.data() as User;
                setUser(appUser);
            })
            .catch(() => {
                setUser(null);
            })
    }, [])

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);