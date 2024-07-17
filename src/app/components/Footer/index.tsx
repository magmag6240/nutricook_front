import Link from 'next/link';
import styles from './style.module.css';

const Footer = () => {
    return (
        <header className={styles.header}>
        <h1>
            <Link href="/">
                <p className="text-2xl font-logo">iam</p>
            </Link>
            </h1>
            <span className="flex-1"></span>
        </header>
    );
};

export default Footer;