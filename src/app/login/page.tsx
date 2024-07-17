'use client'

import React, { useCallback, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import Link from 'next/link';
import styles from './style.module.css';
import { User } from '../types';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState<User[]>([]);

    const http = axios.create({
        baseURL: 'http://localhost:8000',
        withCredentials: true,
        withXSRFToken: true
    });

    const login = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await http.get('/sanctum/csrf-cookie')
        await http.post('/api/login', { email, password })
            .then((res: AxiosResponse<User[]>) => {
                const { data } = res;
                setUser(data);
            })
    }

    return (
        <div className={styles.login}>
            <h2 className={styles.login_title}>ログイン</h2>
            <form className={styles.login_form} onSubmit={login}>
                <div className={styles.email_group}>
                    <label className={styles.label_email}>メールアドレス</label>
                    <input id="email" name="email" type="email" required
                placeholder="test@example.com" onChange={(e) => setEmail(e.target.value)}
                className={styles.input_email}/>
                </div>

                <div className={styles.password_group}>
                    <label className={styles.label_password}>
                        パスワード
                    </label>
                    <input id="password" name="password" type="password" required placeholder="password" onChange={(e) => setPassword(e.target.value)}
                    className={styles.input_email}/>
                </div>
                <div className={styles.button_wrap}>
                    <button type="submit"
                        className={styles.login_button}>
                        ログイン
                    </button>
                </div>
            </form>
            <Link className={styles.register_link} href='/register'>
                会員でない方はこちらから
            </Link>
        </div>
    )
}

export default Login;
