'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import FlatwareIcon from '@mui/icons-material/Flatware';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import EditNoteIcon from '@mui/icons-material/EditNote';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import styles from './navLinks.module.css';


const links = [
    {
        name: 'RecipeCreate',
        href: '/api/recipe/new',
        icon: PlaylistAddIcon,
    },
    { name: 'MyPage', href: '/api/mypage', icon: PersonIcon },
    { name: 'Setting', href: '/api/user_setting', icon: SettingsIcon },
];

export default function NavLinks() {
    return (
        <>
        {links.map((link) => {
            const LinkIcon = link.icon;
            return (
                <Link
                    key={link.name}
                    href={link.href}
                    className={styles.link}
                >
                    <LinkIcon className={styles.link_icon} />
                    <p className={styles.link_name}>{link.name}</p>
                </Link>
            );
        })}
        </>
    );
}