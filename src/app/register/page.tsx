'use client'

import React, { useCallback, useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import Link from 'next/link';
import styles from './style.module.css';
import { User } from '../types';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState<User[]>([]);

    const http = axios.create({
        baseURL: 'http://localhost:8000',
        withCredentials: true,
        withXSRFToken: true
    });

    const register = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await http.get('/sanctum/csrf-cookie')
        await http.post('/api/register', { name, email, password })
            .then((res: AxiosResponse<User[]>) => {
                const { data } = res;
                setUser(data);
            })
    }

    return (
        <div className={styles.register}>
            <h2 className={styles.register_title}>新規会員登録</h2>
            <form className={styles.register_form} onSubmit={register}>
                <div className={styles.name_group}>
                    <label className={styles.label_name}>ユーザー名</label>
                    <input id="name" name="name" type="text" required
                placeholder="user_name" onChange={(e) => setName(e.target.value)}
                className={styles.input_name}/>
                </div>
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
                        className={styles.register_button}>
                        会員登録
                    </button>
                </div>
            </form>
            <Link className={styles.login_link} href='/login'>
                会員の方はこちらから
            </Link>
        </div>
    )
}

export default Register;
