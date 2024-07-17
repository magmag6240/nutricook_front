import Footer from '../components/Footer';
import styles from './style.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
        <main className={styles.main}>
            <div className={styles.children}>
                {children}
            </div>
        </main>
        <Footer />
        </>
    );
}