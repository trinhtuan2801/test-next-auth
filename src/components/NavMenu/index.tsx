'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './index.scss';
import clsx from 'clsx';

function AuthButton() {
  const { data: session } = useSession();

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        padding: '12px 12px',
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        borderTop: '1px solid purple',
      }}
    >
      {session ? (
        <>
          <div>{session?.user?.name}</div>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <div>Not sign in</div>
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
    </div>
  );
}

const links = [
  { pathname: '/', label: 'Home' },
  { pathname: '/protected', label: 'Protected' },
  { pathname: '/server-action', label: 'Server action' },
  { pathname: '/api-from-client', label: 'Api from client' },
  { pathname: '/api-from-server', label: 'Api from server' },
];

export default function NavMenu() {
  const pathname = usePathname();

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '240px',
        borderRight: '1px solid #aeaeae',
        height: '100vh',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {links.map((link) => (
          <Link
            key={link.pathname}
            href={link.pathname}
            className={clsx({
              link: true,
              active: pathname === link.pathname,
            })}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <AuthButton />
    </div>
  );
}
