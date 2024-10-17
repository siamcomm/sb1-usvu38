import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Welcome to MembershipApp</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Latest News</CardTitle>
            <CardDescription>Stay up to date with our community</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Button className="mt-4" asChild>
              <Link href="/news">Read More</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Don't miss out on our exciting events</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Join us for our next community meetup on July 15th, 2023. It's a great opportunity to network and learn!</p>
            <Button className="mt-4" asChild>
              <Link href="/events">View Events</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}