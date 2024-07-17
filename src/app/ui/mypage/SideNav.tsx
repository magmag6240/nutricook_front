'use client';

import Link from 'next/link';
import axios from 'axios';
import NavLinks from './navLinks';
import { User, UserContextType } from '@/app/types';
import { useState } from 'react';
import { useAuth } from '../../provider/AuthProvider';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import styles from './sideNav.module.css';

export default function SideNav() {
    const [user, setUser] = useState<UserContextType>();
    const auth = useAuth();
    const http = axios.create({
        baseURL: 'http://localhost:8000',
        withCredentials: true,
        withXSRFToken: true
    });
    const logout = () => {
        http.post('/api/logout')
            .then((res) => {
                if (res.status === 200) {
                    const appUser = res.data() as User;
                    setUser(appUser);
                }
            })
    }

    return (
        <div className={styles.sideNav}>
            <Link className={styles.home_link} href='/'>
                <p className={styles.home_link_text}>
                    NutriCook
                </p>
            </Link>
            <div className={styles.links_group}>
                <NavLinks />
                <div className={styles.nav_form}></div>
                {auth !== null ?
                    <form onSubmit={logout}>
                        <button className={styles.logout_button} type='submit'>
                            <LogoutIcon className={styles.logout_icon} />
                            <p className={styles.logout_text}>Sign Out</p>
                        </button>
                    </form>
                    :
                    <Link className={styles.link} href='/login'>
                        <LoginIcon className={styles.login_icon} />
                        <p className={styles.login_text}>Sign In</p>
                    </Link>
                }
            </div>
        </div>
    );
}