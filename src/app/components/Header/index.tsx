import Link from 'next/link';
import styles from './style.module.css';
import { useState } from 'react';
import { useAuth } from '../../provider/AuthProvider';

const Header = () => {
    const user = useAuth();
    const [waiting, setWaiting] = useState<boolean>(false);

    return (
        <header className={styles.header}>
        <h1>
            <Link href="/">
                <a className="text-2xl font-logo">iam</a>
            </Link>
            </h1>
            <span className="flex-1"></span>
      {user === null && !waiting && <button><Link href='/login'>ログイン</Link></button>}
      {user && <button>ユーザーメニュー</button>}
        </header>
    );
};

export default Header;