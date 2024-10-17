"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold">
            MembershipApp
          </Link>
          <div className="space-x-4">
            <Link href="/" passHref>
              <Button variant={pathname === '/' ? 'default' : 'ghost'}>Home</Button>
            </Link>
            <Link href="/events" passHref>
              <Button variant={pathname === '/events' ? 'default' : 'ghost'}>Events</Button>
            </Link>
            <Link href="/members" passHref>
              <Button variant={pathname === '/members' ? 'default' : 'ghost'}>Members</Button>
            </Link>
            <Link href="/admin" passHref>
              <Button variant={pathname === '/admin' ? 'default' : 'ghost'}>Admin</Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;