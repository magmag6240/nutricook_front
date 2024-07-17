import SideNav from '../../ui/mypage/SideNav';
import UserGuard from '../../guards/userGuard';
import styles from './style.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <UserGuard>
            <main className={styles.main}>
                <div className={styles.sideNav}>
                    <SideNav />
                </div>
                <div className={styles.children}>
                    {children}
                </div>
            </main>
        </UserGuard>
    );
}