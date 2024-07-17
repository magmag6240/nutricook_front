'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '../provider/AuthProvider';
import { GuardPropsType } from '../types';

const UserGuard = ({ children }: GuardPropsType) => {
    const pathname = usePathname();
    const user = useAuth();
    const router = useRouter();

    if (user === null && pathname !== '/login') {
        router.push('/login');
        return null;
    }

    if (!user) {
        return null;
    }

    if (typeof children === 'function') {
        return <>{children(user)}</>;
    } else {
        return <>{children}</>;
    }
};

export default UserGuard;