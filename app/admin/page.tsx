import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Admin() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Manage Members</CardTitle>
            <CardDescription>Approve and manage member accounts</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/admin/members">Manage Members</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Manage Events</CardTitle>
            <CardDescription>Create and edit events</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/admin/events">Manage Events</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Manage News</CardTitle>
            <CardDescription>Create and edit news items</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/admin/news">Manage News</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Email Members</CardTitle>
            <CardDescription>Send bulk emails to members</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/admin/email">Send Emails</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Membership Settings</CardTitle>
            <CardDescription>Manage membership types and settings</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/admin/membership-settings">Manage Settings</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}